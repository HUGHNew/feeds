# nil in Golang

> 就像是有特定类型的`nullptr`
可比较性点击[此处](README.md)

1. `nil` 与 `nil` 不可比较
2. 不同类型的 `nil` 地址一样

## 类型为 nil 与 值为 nil

::: tip 一个包含nil指针的接口不是nil接口
参考 <https://book.itsfun.top/gopl-zh/ch7/ch7-05.html> 7.5.1.
:::

@[code](go/nil-interface.go)

对于接口类型而言 包含了两个部分:类型 与 值


![nil&interface](https://book.itsfun.top/gopl-zh/images/ch7-05.png)

## reference

- [理解 Go nil](https://sanyuesha.com/2017/06/11/go-nil/)