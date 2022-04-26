# suspend函数的组合

这节讲述了多种组合suspend函数的方式

## 默认顺序执行

假设我们有两个实际工作的函数

```kotlin
suspend fun doSomethingUsefulOne(): Int {
    delay(1000L) // pretend we are doing something useful here
    return 13
}

suspend fun doSomethingUsefulTwo(): Int {
    delay(1000L) // pretend we are doing something useful here, too
    return 29
}
```

如何顺序调用这两个函数并求和?

因为在`coroutine`中的代码跟一般代码一样 默认顺序执行 所以我们顺序调用就可以了

```kotlin
val time = measureTimeMillis {
    val one = doSomethingUsefulOne()
    val two = doSomethingUsefulTwo()
    println("The answer is ${one + two}")
}
println("Completed in $time ms")
```

可能产生这样的结果
```
The answer is 42
Completed in 2007 ms
```

## 使用异步并发

可以使用 `async` 函数来让代码异步执行


::: tip async 与 launch
从概念上讲 [async](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/async.html) 跟 [launch](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/launch.html)很像 但`async` 启动一个单独的并行的协程

差异在于`launch`返回一个`Job`对象并且不会带有结果值  
`async`返回一个[Deferred](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-deferred/index.html)(a light-weight non-blocking future that represents a promise to provide a result later)实例 可以掉用`await`等待并获取计算值 同时它是Job的子类(可以取消)
:::

```kotlin
val time = measureTimeMillis {
    val one = async { doSomethingUsefulOne() }
    val two = async { doSomethingUsefulTwo() }
    println("The answer is ${one.await() + two.await()}")
}
println("Completed in $time ms")
```
可能的结果如下
```
The answer is 42
Completed in 1017 ms
```

## Lazy async

`async`可以设置参数`start`为[CoroutineStart.LAZY](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-start/-l-a-z-y/index.html)

Lazy模式下 只有调用`await`或者`start` 协程才会开始执行

```kotlin
val time = measureTimeMillis {
    val one = async(start = CoroutineStart.LAZY) { doSomethingUsefulOne() }
    val two = async(start = CoroutineStart.LAZY) { doSomethingUsefulTwo() }
    // some computation
    one.start() // start the first one
    two.start() // start the second one
    println("The answer is ${one.await() + two.await()}")
}
println("Completed in $time ms")
```

如果之前的代码每个协程都没有调用`start`的话 那么结果会跟顺序执行一样

`async(start = CoroutineStart.LAZY)` 是标准函数 `lazy` 在suspend函数中的替代

## 异步风格函数

https://kotlinlang.org/docs/composing-suspending-functions.html#async-style-functions

通过使用`GlobalScope`引用来退出结构化并发(opt-out of the structured concurrency)的`async`协程构建器 可以定义async风格的函数来调用`doSomethingUsefulOne`和`doSomethingUsefulTwo`

:::tip GlobalScope
GlobalScope is a delicate API that can backfire in non-trivial ways, one of which will be explained below, so you must explicitly opt-in into using GlobalScope with @OptIn(DelicateCoroutinesApi::class).
:::

```kotlin
// The result type of somethingUsefulOneAsync is Deferred<Int>
@OptIn(DelicateCoroutinesApi::class)
fun somethingUsefulOneAsync() = GlobalScope.async {
    doSomethingUsefulOne()
}

// The result type of somethingUsefulTwoAsync is Deferred<Int>
@OptIn(DelicateCoroutinesApi::class)
fun somethingUsefulTwoAsync() = GlobalScope.async {
    doSomethingUsefulTwo()
}
```

但上述的`xxxAsync`函数**不**是*suspend*函数 它们可以随处调用 同时它们的使用已知暗示着异步代码执行

```kotlin
// note that we don't have `runBlocking` to the right of `main` in this example
fun main() {
    val time = measureTimeMillis {
        // we can initiate async actions outside of a coroutine
        val one = somethingUsefulOneAsync()
        val two = somethingUsefulTwoAsync()
        // but waiting for a result must involve either suspending or blocking.
        // here we use `runBlocking { ... }` to block the main thread while waiting for the result
        runBlocking {
            println("The answer is ${one.await() + two.await()}")
        }
    }
    println("Completed in $time ms")
}
```

:::warning
上述代码仅供演示 因为其他语言里面这种方式很流行

但是**强烈不建议**在Kotlin coroutine里面这么写

如果`val one = somethingUsefulOneAsync()` 和 `one.await()`之间还有别的代码 并且出现了逻辑错误或者抛出了异常 然后程序中止

一般情况下 一个全局的error-handle会捕获异常 生成日志 然后报告给开发者 但这个程序能继续执行其他操作

在上述代码中 即使启动`xxxAsync`的操作已中止 它也会在后台继续执行
:::

在结构化并发中 上述问题不会出现

## async结构化并发

[参考前例](#使用异步并发) 提取出一个并发操作的函数

因为`async`协程构建器(coroutine builder)被定义为`CoroutineScope`的拓展 所以需要使用[coroutineScope](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/coroutine-scope.html)

```kotlin
suspend fun concurrentSum(): Int = coroutineScope {
    val one = async { doSomethingUsefulOne() }
    val two = async { doSomethingUsefulTwo() }
    one.await() + two.await()
}
```
这种写法的话 如果在`concurrentSum`中出现错误 会抛出一个异常 所有启动(launch)的协程也能被取消
```kotlin
val time = measureTimeMillis {
    println("The answer is ${concurrentSum()}")
}
println("Completed in $time ms")
```

cancel会通过coroutine层次传播

```kotlin
import kotlinx.coroutines.*

fun main() = runBlocking<Unit> {
    try {
        failedConcurrentSum()
    } catch(e: ArithmeticException) {
        println("Computation failed with ArithmeticException")
    }
}

suspend fun failedConcurrentSum(): Int = coroutineScope {
    val one = async<Int> { 
        try {
            delay(Long.MAX_VALUE) // Emulates very long computation
            42
        } finally {
            println("First child was cancelled")
        }
    }
    val two = async<Int> { 
        println("Second child throws an exception")
        throw ArithmeticException()
    }
    one.await() + two.await()
}
```

```
Second child throws an exception
First child was cancelled
Computation failed with ArithmeticException
```

注意观察输出结果