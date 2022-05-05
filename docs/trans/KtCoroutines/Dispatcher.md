# 上下文与分派器

协程总是在 Kotlin 标准库中定义的 [`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/) 类型的值表示的某些上下文中执行

协程上下文是一系列的元素 主要包含 `job` 和 它的`dispatcher`

## 分派器与线程

协程上下文包含了一个协程分派器(coroutine dispatcher) 它指明了对应的协程在哪个或哪些线程上执行 可以限制协程执行在
- 特定线程
- 线程池
- 不受限制

运行

所有协程构建器(builder) 如[`launch`](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/launch.html)和[`async`](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/async.html) 接收一个可选的 [`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/) 参数 可以用来指定新协程的分派器和其他上下文元素

如下例

```kotlin
import kotlinx.coroutines.*

fun main() = runBlocking<Unit> {
    launch { // context of the parent, main runBlocking coroutine
        println("main runBlocking      : I'm working in thread ${Thread.currentThread().name}")
    }
    launch { // context of the parent, main runBlocking coroutine
        println("main runBlocking      : I'm working in thread ${Thread.currentThread().name}")
    }
    launch(Dispatchers.Unconfined) { // not confined -- will work with main thread
        println("Unconfined            : I'm working in thread ${Thread.currentThread().name}")
    }
    launch(Dispatchers.Unconfined) { // not confined -- will work with main thread
        println("Unconfined            : I'm working in thread ${Thread.currentThread().name}")
    }
    launch(Dispatchers.Default) { // will get dispatched to DefaultDispatcher 
        println("Default               : I'm working in thread ${Thread.currentThread().name}")
    }
    launch(newSingleThreadContext("MyOwnThread")) { // will get its own new thread
        println("newSingleThreadContext: I'm working in thread ${Thread.currentThread().name}")
    }    
}
```
结果可能如此
```
Unconfined            : I'm working in thread main @coroutine#3
Default               : I'm working in thread DefaultDispatcher-worker-1 @coroutine#4
main runBlocking      : I'm working in thread main @coroutine#2
newSingleThreadContext: I'm working in thread MyOwnThread @coroutine#5
```


当 `launch{...}` 没有指定参数时 继承调用处的上下文

在上例中 继承`runBlocking`协程的上下文

[`Dispatchers.Unconfined`](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-dispatchers/-unconfined.html) 是一个执行在主线程的特殊的分派器

当没有显式指定域中分派器时 使用默认分派器([`Dispatchers.Default`](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-dispatchers/-default.html) 使用共享线程池)

[`newSingleThreadContext`](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/new-single-thread-context.html) 创建一个用于协程执行的新线程

## 未指定的分派器

[`Dispatchers.Unconfined`](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-dispatchers/-unconfined.html) 协程分派器在**调用线程**开始执行协程 直到第一个挂起点(suspend 函数) 协程恢复时所在的线程完全由调用的挂起函数确定

未指定的分派器适用于 消耗CPU时间 同时更新指定线程的共享数据的协程 使用

另一方面 分派器默认从外部协程域继承

特别是 `runBlocking` 协程的默认调度程序仅限于调用线程，因此继承它具有将执行限制在具有可预测 FIFO 调度的该线程的效果

```kotlin
launch() { // not confined -- will work with main thread
    println("Unconfined      : I'm working in thread ${Thread.currentThread().name}")
    delay(500)
    println("Unconfined      : After delay in thread ${Thread.currentThread().name}")
}
launch { // context of the parent, main runBlocking coroutine
    println("main runBlocking: I'm working in thread ${Thread.currentThread().name}")
    delay(1000)
    println("main runBlocking: After delay in thread ${Thread.currentThread().name}")
}
```
执行结果
```
Unconfined      : I'm working in thread main
main runBlocking: I'm working in thread main
Unconfined      : After delay in thread kotlinx.coroutines.DefaultExecutor
main runBlocking: After delay in thread main
```
所以继承`runBlocking`上下文的协程在主线程执行 而未指定的协程在`delay`函数所用的`default executor`线程恢复

:::tip
未指定分派器是一种在一些边界情况有用的高级机制
The unconfined dispatcher is an advanced mechanism that can be helpful in certain corner cases where dispatching of a coroutine for its execution later is not needed or produces undesirable side-effects, because some operation in a coroutine must be performed right away.

在一般代码中并不需要
:::

## 上下文中的 Job

协程的`Job`是它上下文的一部分 可以通过`coroutineContext[Job]`表达式获取
```kotlin
println("My job is ${coroutineContext[Job]}")
```

:::tip isActive
CoroutineScope的`isActive` 是 `coroutineContext[Job]?.isActive == true` 的简写
:::

## 子协程

当一个协程在另一个协程的协程域启动时(launch) 它会从 [`CoroutineScope.coroutineContext`](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-scope/coroutine-context.html)继承自己的上下文 同时新协程的[`Job`](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-job/index.html)是父协程`job`的儿子

当父协程取消的时候 它的所有子协程也会递归取消

然而有两种方法可以显式重载父子关系
- 当使用一个不同的协程域启动协程时(`GlobalScope.launch`) 新协程不会从父协程域继承`Job`
- 当协程启动时 传递一个不同的`Job`对象 它会覆盖父域的`Job`

这两种情况 新协程都不会关联到它启动的域 同时可以独立操作
```kotlin
// launch a coroutine to process some kind of incoming request
val request = launch {
    // it spawns two other jobs
    launch(Job()) { 
        println("job1: I run in my own Job and execute independently!")
        delay(1000)
        println("job1: I am not affected by cancellation of the request")
    }
    // and the other inherits the parent context
    launch {
        delay(100)
        println("job2: I am a child of the request coroutine")
        delay(1000)
        println("job2: I will not execute this line if my parent request is cancelled")
    }
}
delay(500)
request.cancel() // cancel processing of the request
delay(1000) // delay a second to see what happens
println("main: Who has survived request cancellation?")
```
可能的运行结果
```
job1: I run in my own Job and execute independently!
job2: I am a child of the request coroutine
job1: I am not affected by cancellation of the request
main: Who has survived request cancellation?
```

## Parental responsibilities

父协程会一直等待所有子协程的完成(不需要记录启动的子协程 也不需要逐一join子协程)

```kotlin
// launch a coroutine to process some kind of incoming request
val request = launch {
    repeat(3) { i -> // launch a few children jobs
        launch  {
            delay((i + 1) * 200L) // variable delay 200ms, 400ms, 600ms
            println("Coroutine $i is done")
        }
    }
    println("request: I'm done and I don't explicitly join my children that are still active")
}
request.join() // wait for completion of the request, including all its children
println("Now processing of the request is complete")
```

运行结果
```
request: I'm done and I don't explicitly join my children that are still active
Coroutine 0 is done
Coroutine 1 is done
Coroutine 2 is done
Now processing of the request is complete
```

## 结合上下文元素

可以用`+`连接定义的多个上下文元素
```kotlin
launch(Dispatchers.Default + CoroutineName("test")) {
    println("I'm working in thread ${Thread.currentThread().name}")
}
```

:::details CoroutineName
`CoroutineName` 可以用于协程命名 调试的时候很好用

```kotlin
log("Started main coroutine")
// run two background value computations
val v1 = async(CoroutineName("v1coroutine")) {
    delay(500)
    log("Computing v1")
    252
}
val v2 = async(CoroutineName("v2coroutine")) {
    delay(1000)
    log("Computing v2")
    6
}
log("The answer for v1 / v2 = ${v1.await() / v2.await()}")
```
定义 `-Dkotlinx.coroutines.debug` 后的结果
```
[main @main#1] Started main coroutine
[main @v1coroutine#2] Computing v1
[main @v2coroutine#3] Computing v2
[main @main#1] The answer for v1 / v2 = 42
```
:::

## 协程域

对于有生命周期(lifecycle)的非协程对象 协程必须在生命周期结束时取消才能避免内存泄漏

`kotlinx.coroutines` 提供了一个抽象封装 [`CoroutineScope`](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-scope/index.html)

我们通过创建`CoroutineScope`实例来管理协程的生命周期

一个`CoroutineScope`实例可以通过 [`CoroutineScope()`](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-scope.html)或者[`MainScope`](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-main-scope.html)工厂函数来创建

前者创建一个通用协程域 后者创建一个用于UI应用的域 并且使用`Dispatcher.Main`作为默认分派器

```kotlin
class Activity {
    private val mainScope = MainScope()

    fun destroy() {
        mainScope.cancel()
    }
    // to be continued ...
```
### 线程局部数据

Thread-local data

有时候需要在协程间利用线程局部数据 但协程并不绑定在特定线程上 所以手动操作会出问题

对于 [`ThreadLocal`](https://docs.oracle.com/javase/8/docs/api/java/lang/ThreadLocal.html) [`asContextElement`](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/as-context-element.html)拓展函数能解决这个问题 它会创建一个额外的能存指定的`ThreadLocal`并且能够每次协程上下文切换时都能恢复的上下文元素(context element)

```kotlin
import kotlinx.coroutines.*

val threadLocal = ThreadLocal<String?>() // declare thread-local variable

fun main() = runBlocking<Unit> {
    threadLocal.set("main")
    println("Pre-main, current thread: ${Thread.currentThread()}, thread local value: '${threadLocal.get()}'")
    val job = launch(Dispatchers.Default + threadLocal.asContextElement(value = "launch")) {
        println("Launch start, current thread: ${Thread.currentThread()}, thread local value: '${threadLocal.get()}'")
        yield()
        println("After yield, current thread: ${Thread.currentThread()}, thread local value: '${threadLocal.get()}'")
    }
    job.join()
    println("Post-main, current thread: ${Thread.currentThread()}, thread local value: '${threadLocal.get()}'")    
}
```

示例中我们利用后台线程池(`Dispatchers.Default`)启动新协程 所以它在一个不同的线程上执行 同时它拥有指定的线程局部变量`threadLocal.asContextElement(value = "launch")` 这个与所在的线程无关
```
Pre-main, current thread: Thread[main @coroutine#1,5,main], thread local value: 'main'
Launch start, current thread: Thread[DefaultDispatcher-worker-1 @coroutine#2,5,main], thread local value: 'launch'
After yield, current thread: Thread[DefaultDispatcher-worker-2 @coroutine#2,5,main], thread local value: 'launch'
Post-main, current thread: Thread[main @coroutine#1,5,main], thread local value: 'main'
```

> 很容易忘记指定相关的上下文元素

如果执行协程的线程不同 会从线程局部变量获取到意料之外的值

推荐使用会在错误使用时很快出错的`ensurePresent`方法来避免上述问题

ThreadLocal has first-class support and can be used with any primitive kotlinx.coroutines provides. It has one key limitation, though: when a thread-local is mutated, a new value is not propagated to the coroutine caller (because a context element cannot track all ThreadLocal object accesses), and the updated value is lost on the next suspension. Use withContext to update the value of the thread-local in a coroutine, see asContextElement for more details.

Alternatively, a value can be stored in a mutable box like class Counter(var i: Int), which is, in turn, stored in a thread-local variable. However, in this case you are fully responsible to synchronize potentially concurrent modifications to the variable in this mutable box.

For advanced usage, for example for integration with logging MDC, transactional contexts or any other libraries which internally use thread-locals for passing data, see the documentation of the ThreadContextElement interface that should be implemented.