# Android APK 的构建

> APK 文件就是一个压缩包

先看看 Android APK 的构建流程图

![](/images/apk_build.jpg)

这是老版本的流程图 现在我在Google的Android文档上已经找不到了

Google/Android的官方文档命令行构建的方法还是[基于 gradle 在做][1]

如果有手工编译的想法 可以参考 [知乎此文][2] 不过就是不知道对应的工具应该在哪儿下载

![](/images/apk.build-process_2x.png)

这是官方现存的比较笼统的流程图

## Kotlin

Kotlin代码编译的阶段与Java代码的编译是同时期的 编译产物都是 .class 文件

## .class 与 .dex

JVM可以直接执行 .class 但Android的Dalvik/ART 二进制文件为 .dex 所以需要将 .class 转化打包为 .dex

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/2/1730dfb360e912a5~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
> desugar 操作可以实现向前兼容


从 .class 到 .dex 中间的流程有一个演进过程

`DX -> D8 -> R8` 的演变:
1. DX 是早期(低版本)的工具
2. D8 是后期(高版本 **Since 3.2**)的工具
3. R8 是添加混淆后的D8(**Since AGP3.4**)


下图是R8开启前后的流程
![Before-R8](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/2/1730dfffebe694eb~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)
![After-R8](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/2/1730dffdfcfc3efc~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)


## 参考

- [聊聊Android编译流程](https://juejin.cn/post/6845166890759749645)
- [手动命令行编译APK](https://zhuanlan.zhihu.com/p/22302525)
- [配置build](https://developer.android.com/studio/build?hl=zh-cn)

[1]: https://developer.android.com/studio/build/building-cmdline?hl=zh-cn
[2]: https://zhuanlan.zhihu.com/p/22302525