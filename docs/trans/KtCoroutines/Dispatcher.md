# 上下文与分派器

协程总是在 Kotlin 标准库中定义的 [`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/) 类型的值表示的某些上下文中执行

协程上下文是一系列的元素 主要包含 `job` 和 它的`dispatcher`