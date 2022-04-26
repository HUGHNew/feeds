# 杂项

## QA

### Intellij 新建 Kotlin console(build.gradle.kts) `Undefined reference: kotlinx`

在 `build.gradle.kts` 文件末尾添加 根据提示使用最新版本

```kotlin
dependencies {
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.6.1")
}
```