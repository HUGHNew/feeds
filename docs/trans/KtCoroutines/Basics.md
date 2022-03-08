# 基础协程概念

协程是可暂停计算的一个实例。

> 协程在概念上与线程相似，但协程并不约束于任一线程（可以在不同的线程中挂起和唤醒）

## 第一份协程代码

```kotlin
import kotlinx.coroutines.*

fun main() = runBlocking { // this: CoroutineScope
    launch { // launch a new coroutine and continue
        delay(1000L) // non-blocking delay for 1 second (default time unit is ms)
        println("World!") // print after delay
    }
    println("Hello") // main coroutine continues while a previous one is delayed
}
```

[launch](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/launch.html) 是协程的创建器(builder) 可以启动一个独立工作的协程

[delay](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/delay.html) 是一种特殊的suspend函数 可以挂起协程但不阻塞当前线程

[runBlocking](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/run-blocking.html) 也是协程的builder 用于连接非协程域和协程域 **类型为`CoroutineScope`**

runBlocking 构建一个阻塞当前线程的协程域

### 结构化并发

> 协程遵循结构化并发的原则 即**新的协程只能在一个特定的`CoroutineScope`中启动**

### 提取函数

如何将launch块中的语句提取成一个函数？

```kotlin
import kotlinx.coroutines.*

fun main() = runBlocking { // this: CoroutineScope
    launch { doWorld() }
    println("Hello")
}

// this is your first suspending function
suspend fun doWorld() {
    delay(1000L)
    println("World!")
}
```

结合上例，可以看出提取函数的特点 需要在协程中执行的函数 需要添加 `suspend` 修饰符

> 在IDE中 可以通过 `Extract funcion` 功能提取函数

suspend 函数跟常规函数类似 只是它们还能调用 suspend 函数(`suspend`函数可以相互间调用)

## Scope builder

可以使用 `coroutineScope` 声明自己的协程域

`coroutineScope` 会创建一个协程域 当域内所有协程结束时它才会结束

> `coroutineScope` 和 `runBlocking` 的主要区别是 后者(常规函数)会阻塞当前线程 而前者(suspend函数)不会 但会挂起外部协程

可以在任何suspend函数中使用`coroutineScope` 可以将上例改为这样

```kotlin
fun main() = runBlocking {
    doWorld()
}

suspend fun doWorld() = coroutineScope {  // this: CoroutineScope
    launch {
        delay(1000L)
        println("World!")
    }
    println("Hello")
}
```

### 并发

`coroutineScope` 可以在任何 `suspend` 函数中用来执行多并发操作 例如下例中同时运行两个协程

```kotlin
// Concurrently executes both sections
suspend fun doWorld() = coroutineScope { // this: CoroutineScope
    launch {
        delay(2000L)
        println("World 2")
    }
    launch {
        delay(1000L)
        println("World 1")
    }
    println("Hello")
}
```

这两个协程会同时执行

### 显式 job

一个 `launch` 协程builder 返回一个 `Job` 对象

该对象可以处理这个已启动的协程 也可以用于显式等待 `join`

```kotlin
val job = launch { // launch a new coroutine and keep a reference to its Job
    delay(1000L)
    println("World!")
}
println("Hello")
job.join() // wait until child coroutine completes
println("Done") 
// 输出:
// Hello
// World!
// Done
```
