# Gradle GradleW 与 AGP

本文浅谈一下这三个工具的关联与区别

> Gradle: 基于JVM的通用构建工具

> AGP: Android Gradle Plugin 专用于 Gradle 构建 Android 应用的插件

> Gradlew: Gradle Wrapper

~~看上去 gradlew 不太需要更新~~

## Gradle与Wrapper

~~Wrapper 是 Gradle 的 `Wrapper`~~

Wrapper的实质是一个脚本(sh/bat) 主要作用就是**获取指定版本的gradle并在项目构建中绑定使用**(便于统一构建环境)
> gradle 存储在 `~/.gradle/wrapper/dists` 也是个脚本(sh/bat)
> 
> gradlew 的 gradle 相关配置文件为 `gradle/wrapper/gradle-wrapper.properties`

目前小版本(7.4.2 vs 7.3.3)之间的 gradle 脚本基本一致
```bash
$ diff ~/.gradle/wrapper/dists/gradle-7.4.2-bin/48ivgl02cpt2ed3fh9dbalvx8/gradle-7.4.2/bin/gradle ~/.gradle/wrapper/dists/gradle-7.3.3-bin/6a41zxkdtcxs8rphpq6y0069z/gradle-7.3.3/bin/gradle
117c117
< CLASSPATH=$APP_HOME/lib/gradle-launcher-7.4.2.jar
---
> CLASSPATH=$APP_HOME/lib/gradle-launcher-7.3.3.jar
```
早期版本间 也较为一致(4.10.1 vs 5.2.1)
```bash
$ diff ~/.gradle/wrapper/dists/gradle-4.10.1-all/455itskqi2qtf0v2sja68alqd/gradle-4.10.1/bin/gradle ~/.gradle/wrapper/dists/gradle-5.2.1-bin/9lc4nzslqh3ep7ml2tp68fk8s/gradle-5.2.1/bin/gradle
31c31
< DEFAULT_JVM_OPTS=""
---
> DEFAULT_JVM_OPTS='"-Xmx64m"'
67c67
< CLASSPATH=$APP_HOME/lib/gradle-launcher-4.10.1.jar
---
> CLASSPATH=$APP_HOME/lib/gradle-launcher-5.2.1.jar
```

gradle版本设置配置
```properties
distributionUrl=https\://services.gradle.org/distributions/gradle-7.4.2-bin.zip
```

gradlew 脚本的最后一行: 运行gradlew 开始工作流
```bash
exec "$JAVACMD" "$@"
# $JAVACMD 是 Java 命令
# 不同版本稍有不同
```

下图为 gradlew 的工作流程图
![gradlew](https://docs.gradle.org/current/userguide/img/wrapper-workflow.png)

### Gradle 与 Daemon

Gradle 默认使用 Daemon 为C/S架构 减少JVM启动的开销并提供缓存等功能

`--no-daemon` 设置后不开启 daemon (~~与Maven相同~~)

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