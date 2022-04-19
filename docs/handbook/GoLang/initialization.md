# 初始化

golang没有构造函数 变量声明后会零初始化(也算是RAII吧)

本文讲述不同类型变量零初始化的结果和其他初始化操作

## 零初始化

:::tip 常量`const`
golang的常量存在一种特殊情况:无类型常量
```go
const (
    e  = 2.71828182845904523536028747135266249775724709369995957496696763
    pi = 3.14159265358979323846264338327950288419716939937510582097494459
)
```
[至少有256bit的运算精度][1]

它可以赋值给有类型的变量 不过会折损精度
:::

|类型 | 初始化 | 备注 |
|----|:-----:|------|
|数值类型|0|complex虚部和实部都初始化为0|
|字符串|""|字符串不可变|
|Slice/Map/func|nil|只能和nil比较|
|interface/channel/pointer|nil||
|struct|每个成员零初始化|按该表规则递归初始化各部分|


## new

为类型分配空间并进行零初始化 然后返回该空间地址
::: warning new 在 golang 中并不意味堆分配
@[code](go/go-new.go)
可以发现这里的地址是连续的 所以并不是new出来的在堆上 **变量的存储地址由编译器决定**
:::

```go
// 方式1
ptr := new(T)

// 方式2
var t T
ptr := &t
```

[可以认为new(T)是 var t T; &t 的语法糖][2]

反正变量都会零初始化 所以不知道new有什么意义

## make

构造后底层数据后返回包含底层数据地址的复合结构
> 具体行为与传参时的复制类似
@[code](go/make.go)

## reference

- [理解 Go make 和 new 的区别](https://sanyuesha.com/2017/07/26/go-make-and-new/)


[1]:https://book.itsfun.top/gopl-zh/ch3/ch3-06.html
[2]:https://www.zhihu.com/question/446317882/answer/2245768201