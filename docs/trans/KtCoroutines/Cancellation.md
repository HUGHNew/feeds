# 超时与取消

介绍协程的取消和超时

## 取消协程执行

你也许需要对于长时间执行应用后台协程的细粒度控制
可以通过对于`launch`函数返回的`Job`来控制
```kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {

    val job = launch {
        repeat(1000) { i ->
            println("job: I'm sleeping $i ...")
            delay(500L)
        }
    }
    delay(1300L) // delay a bit
    println("main: I'm tired of waiting!")
    job.cancel() // cancels the job
    job.join() // waits for job's completion 
    println("main: Now I can quit.")   
}
```

### 取消是需要协调的

协程的代码必须**检查协程取消状态**才能是可取消的

> 所有在`kotlinx.coroutine`的`suspend`函数都是可取消的 会检查协程取消状态 取消时会抛出`CancellationException`
> 上例中的 `delay` 函数是 `suspend` 函数

一个不检查取消状态的协程是不会被取消的
```kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {

    val startTime = System.currentTimeMillis()
    val job = launch(Dispatchers.Default) {
        var nextPrintTime = startTime
        var i = 0
        while (i < 5) { // computation loop, just wastes CPU
            // print a message twice a second
            if (System.currentTimeMillis() >= nextPrintTime) {
                println("job: I'm sleeping ${i++} ...")
                nextPrintTime += 500L
            }
        }
    }
    delay(1300L) // delay a bit
    println("main: I'm tired of waiting!")
    job.cancelAndJoin() // cancels the job and waits for its completion
    println("main: Now I can quit.")
    
}
```
协程会打印所有5次信息

### 让代码可取消

有两种方法可以让协程的代码能够被取消
- 周期性调用检查取消的`suspend`函数(比如[`yield`](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/yield.html))
- 显式检查取消状态

这里展示后者 用`while(isActive)` 替换之前代码的 `while(i<5)`
```kotlin
val startTime = System.currentTimeMillis()
val job = launch(Dispatchers.Default) {
    var nextPrintTime = startTime
    var i = 0
    while (isActive) { // cancellable computation loop
        // print a message twice a second
        if (System.currentTimeMillis() >= nextPrintTime) {
            println("job: I'm sleeping ${i++} ...")
            nextPrintTime += 500L
        }
    }
}
delay(1300L) // delay a bit
println("main: I'm tired of waiting!")
job.cancelAndJoin() // cancels the job and waits for its completion
println("main: Now I can quit.")
```
### 协程中取消的处理

可以在协程中添加 `catch` 和 `finally` 块来处理取消所产生的异常

```kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {

    val job = launch {
        try {
            repeat(1000) { i ->
                println("job: I'm sleeping $i ...")
                delay(500L)
            }
        } catch(c:CancellationException){
            println("Catch CancellationException")
        }
        finally {
            println("job: I'm running finally")
        }
    }
    delay(1300L) // delay a bit
    println("main: I'm tired of waiting!")
    job.cancelAndJoin() // cancels the job and waits for its completion
    println("main: Now I can quit.")
}
```

### 不能取消的代码块

> 因为执行代码的协程被取消 所以在 `finally` 块中执行 `suspend` 函数会导致 `CancellationException` 异常的抛出

使用 `withContext(NonCancellable){}` 代码块来保证不会被取消

```kotlin
val job = launch {
    try {
        repeat(1000) { i ->
            println("job: I'm sleeping $i ...")
            delay(500L)
        }
    } finally {
        withContext(NonCancellable) {
            println("job: I'm running finally")
            delay(1000L)
            println("job: And I've just delayed for 1 sec because I'm non-cancellable")
        }
    }
}
delay(1300L) // delay a bit
println("main: I'm tired of waiting!")
job.cancelAndJoin() // cancels the job and waits for its completion
println("main: Now I can quit.")
```

## 超时

在协程域中 可以设置函数的超时 [Kotlin Playground](https://play.kotlinlang.org/editor/v1/N4Igxg9gJgpiBcICWBbADhATgFwAQGsJsAbJAOwA8A6STCAV23JgGcqAqAHTO4DN6yuFAENyACgCUuALy5MAgELEIYfOQDmuYN2649uAO5JsACwAqqGA2xiAjAGYADI4AyU7YP1fMMNDGE2ts6O7rhIuAC0AHy6XnF6aJjkJGRinCAAkgDkKLgsxDC%2BGrgAJOFUFekSsfFesMTCAJ5iAKzObjVxAL6dPTxkXSAANCDYwpjqMNgACg3YvFgoCCAAVsIAbsLD4BDoSAWYAGowmCxIEGTLtlQAbFRBIF1AA?_ga=2.71828499.1628050418.1646539220-49589855.1645533652&_gl=1*1ekifed*_ga*NDk1ODk4NTUuMTY0NTUzMzY1Mg..*_ga_J6T75801PF*MTY0Njc5ODE0Ni4yMS4wLjE2NDY3OTgxNDYuNjA.)

```kotlin
withTimeout(1300L) {
        repeat(1000) { i ->
            println("I'm sleeping $i ...")
            delay(500L)
        }
    }
```

超时时会抛出 `TimeoutCancellationException` 这是 `CancellationException` 的一个子类

取消(cancellation)只是一种异常 所以可以用 `try-catch-finally` 包起来处理
也可以使用 `withTimeoutOrNull` 处理需要返回值的情况

```kotlin
val result = withTimeoutOrNull(1300L) {
    repeat(1000) { i ->
        println("I'm sleeping $i ...")
        delay(500L)
    }
    "Done" // will get cancelled before it produces this result
}
println("Result is $result")
```

### 异步超时

> `withTimeout` 中的超时事件相对于在其块中运行的代码是异步的，并且可能随时发生，甚至在从超时块内部返回之前

所以在协程中使用资源时 在注意在finally块中 释放资源