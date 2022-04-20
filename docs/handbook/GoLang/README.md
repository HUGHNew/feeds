# Golang 探险

本系列写一些关于 golang 语言的一些探索内容。

书籍建议
- [gopl-zh](https://book.itsfun.top/gopl-zh/)
- [go语言高级编程](https://chai2010.cn/advanced-go-programming-book/)

其他
推荐 **幼麟实验室**
- [B站](https://space.bilibili.com/567195437)
- [知乎专栏](https://www.zhihu.com/column/c_1277573348877479936)

::: danger 可能包含以下要素

- ~~猎奇~~ 探索golang源码 了解内部机制
- ~~重口~~ 尝试用golang实现一些语言上不太关注的东西(比如FP)
- ~~ntr~~ 直接引用别人的文章然后一句话不讲
:::

::: details 可比较性|有序性
[参考](https://islishude.github.io/blog/2020/09/22/golang/Go%E4%B8%AD%E5%8F%AF%E6%AF%94%E8%BE%83%E6%80%A7%E5%92%8C%E6%9C%89%E5%BA%8F%E6%80%A7/)
- 有序
  - 数值
  - 字符串
- 可比较(同类型|底层含指针类型与nil)
  - 指针(相同类型的指针)
  - channel(不同类型的channel不可比较,包含方向指定)
  - 数组
  - interface(根据底层类型和值)~~空接口似乎可以跟任何东西比较~~
  - struct(根据底层类型和值)
- 不可比较
  - 不同类型
  - Slice
  - Map
  - func
:::