# Kotlin 协程文档翻译

> 官网文档:<https://kotlinlang.org/docs/coroutines-guide.html>
> 中文站:<https://www.kotlincn.net/docs/reference/coroutines/coroutines-guide.html>

Kotlin 的keyword没有 async 和 await

协程的所有东西都放在了 `kotlinx.coroutines` 包里面

代码可以在 JetBrains的Playground运行:<https://play.kotlinlang.org/> 也可以使用IDE如Intellij和Android Studio
> 不建议使用 VSCode

目录
- [x] [基础](Basics.md)
- [x] [取消与超时](Cancellation.md)
- [x] [suspend函数的组合](Compose.md)
- [x] [上下文和分派器](Dispatcher.md)
- [ ] [异步流](Flow.md)
- [ ] [channels](Channel.md)
- [ ] [协程异常处理](Exceptions.md)
- [ ] [共享的可变状态和并发](Concurrency.md)