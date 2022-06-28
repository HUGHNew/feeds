# Gradle GradleW 与 AGP

本文浅谈一下这三个工具的关联与区别

> Gradle: 基于JVM的通用构建工具

> AGP: Android Gradle Plugin 专用于 Gradle 构建 Android 应用的插件

> Gradlew: Gradle Wrapper

~~看上去 gradlew 不太需要更新~~

## Gradle与Wrapper

~~Wrapper 是 Gradle 的 `Wrapper`~~

Wrapper的实质是一个脚本(sh/bat) 主要作用就是**获取指定版本的gradle并在项目构建中使用**(便于统一构建环境)
> gradle 存储在 `~/.gradle/wrapper/dists`
> 
> gradlew 的 gradle 相关配置文件为 `gradle/wrapper/gradle-wrapper.properties`

gradle版本设置配置
```properties
distributionUrl=https\://services.gradle.org/distributions/gradle-7.4.2-bin.zip
```

gradlew 脚本的最后一行: 运行gradlew 开始工作流
```bash
exec "$JAVACMD" "${JVM_OPTS[@]}" -classpath "$CLASSPATH" org.gradle.wrapper.GradleWrapperMain "$@"
# $JAVACMD 是 Java 命令
# $CLASSPATH 是 gradlew jar 的路径
# CLASSPATH=$APP_HOME/gradle/wrapper/gradle-wrapper.jar
```

下图为 gradlew 的工作流程图
![gradlew](https://docs.gradle.org/current/userguide/img/wrapper-workflow.png)

## AGP

[AGP通常会与 Android Studio 的更新步调保持一致][1]

目前插件版本基本跟随 Gradle 更新 ~~AGP 版本需要与 Gradle 版本匹配以减少兼容性问题~~

| AGP | Gradle |
| --- | ------ |
| 7.0 | 7.0+   |
| 7.1 | 7.2+   |
| 7.2 | 7.3.3+ |

> 此外 Android Studio 与 AGP 也[会有兼容性问题][2] 不过 AS 所用的插件向前兼容很好 主要是最新版本插件的兼容问题

```kotlin
plugins {
    id("com.android.application") version "7.2" apply false // AGP import
    id("com.android.library") version "7.2" apply false
    id("org.jetbrains.kotlin.android") version "1.5.31" apply false
}
```

[1]: https://developer.android.com/studio/releases/gradle-plugin?hl=zh-cn
[2]: https://developer.android.com/studio/releases/gradle-plugin?hl=zh-cn#agp-studio-compatibility