# C++ 大 学 习

## [move semantics](https://zh.cppreference.com/w/cpp/language/reference)


::: tip
右值引用是 移动构造和移动拷贝 的基础

这三者是移动语义实现的底层
:::

C++11 新增
1. 右值引用
2. 移动语义
3. 完美转发(forward)

C++11 划分右[值](https://zh.cppreference.com/w/cpp/language/value_category)为两种
- 将亡值(xvalue, expiring value)
- 纯右值(pvalue, pure value)

> g++会省略创建一个只是为了初始化另一个同类型对象的临时对象 `-fno-elide-constructors` 来关闭该优化
> `-O0` 是优化缺省值 并不能关闭优化
> 
@[code](cpp/move.cpp)

以下均展示关闭构造函数优化后的结果 不同标题名代表不同的函数

### xvalue

::: details xvalue() 结果
```
ctor
rref ctor
dtor
rref ctor
dtor
        Before b
ctor
rref ctor
dtor
        Before End
dtor
dtor
```
:::

### printThis

你无法获取局部对象 这是肯定的

::: details printThis() 结果
```
ctor
0x7ffc643384b0
rref ctor
dtor

0x7ffc643384f0
dtor
```
:::

### printInt

但是你可以一直持有原来的资源 这是能办到的

::: details printInt() 结果
```
ctor
0x55b5773e9eb0
rref ctor
dtor

0x55b5773e9eb0
dtor
```
:::

### move

`std::move` 只是单纯的类型转换 `lvalue -> rvalue` 但是能让你简单的资源挪位 而非重新构造

::: details move() 结果
```
ctor
0x558542ebbeb0
rref ctor
(nil)
0x558542ebbeb0
dtor
dtor
```
:::

### std::forward

```cpp
template<typename T>
void callG(T&& val){ // 涉及知识点 引用折叠
  g(std::forward<T>(val));
}
```

## [返回值优化](https://mp.weixin.qq.com/s/LwnDtK6HNZo_StIxQ5yJhA)

| 返回值优化 | RVO | NRVO |
| - | - | - |
| 全称 | Return Value Optimization | Named Return Value Optimization(对于具名~~泛左值~~对象的返回优化) |
| 原理 | 返回一个类对象的函数的返回值当做该函数的参数(T&)来处理 | 对于具名变量的增强  |

## [初始化](https://zh.cppreference.com/w/cpp/language/initialization)

> 所有具有静态存储期的非局部变量的初始化会作为程序启动的一部分在 main 函数的执行之前进行（除非被延迟，见下文）。所有具有线程局部存储期的非局部变量的初始化会作为线程启动的一部分进行，按顺序早于线程函数的执行开始。

一段能在 `main` 函数之前执行的代码

@[code](cpp/before-main.cpp)

### 延迟动态初始化

还看不懂

## 优秀文章/博客

### 模板

- [CRTP](https://fuzhe1989.github.io/2018/04/21/crtp/)

### 内存管理

- [C++ 内存问题](https://segmentfault.com/a/1190000039348996#item-6)
- 十问 Linux虚拟内存管理
  - [1-4](https://cloud.tencent.com/developer/article/1004428)
  - [6-10](https://cloud.tencent.com/developer/article/1004429)

### 移动语义

- [C++11 移动语义](https://segmentfault.com/a/1190000016041544#item-4)
- [Modern C++ 左值 右值](https://mp.weixin.qq.com/s/_9-0iNUw6KHTF3a-vSMCmg)
- [lvalue，rvalue和move](https://zhuanlan.zhihu.com/p/138210501)
- [现代C++之万能引用、完美转发、引用折叠](https://zhuanlan.zhihu.com/p/99524127)