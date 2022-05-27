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

## 推导

### typeof

> gcc only

C++11标准前 类似`decltype`功能的运算符

### typeid

获取目标操作数类型的运算符 返回的是左值 只会涉及基本类型 不包含CV限定符和引用

### auto

1. 对于变量 从它的初始化器推导出它的类型(Since C++11)
2. 对于函数 从它的return语句推导出类型(Since C++14)
3. 对于非类型模板形参 指定要从实参推导出它的类型(Since C++20)

可配合cv限定符和`&`/`*`(引用/指针)这样的修饰符一起使用

### decltype

[3条推导规则](https://zh.cppreference.com/w/cpp/language/decltype)
1. 如果实参是没有括号的标识表达式或类成员访问表达式 那么 `decltype` 产生以该表达式命名的实体的类型
   1. 如果没有这种实体或该实参指名了一组重载函数 那么程序非良构(即错误的)
   2. 如果实参是指名某个结构化绑定的没有括号的标识表达式 那么 `decltype` 产生其被引用类型(Since C++17)
   3. 如果实参是指名某个非类型模板形参的没有括号的标识表达式 那么 `decltype` 生成该模板形参的类型(当该模板形参以占位符类型声明时，类型会先进行任何所需的类型推导)(Since C++20)
2. 如果实参是其他类型为 `T`(可以是不完整类型) 的任何表达式
   1. 如果 表达式 的值类别是**亡值** 将会 `decltype->T&&`
   2. 如果 表达式 的值类别是**左值** 将会 `decltype->T&`
   3. 如果 表达式 的值类别是**纯右值** 将会 `decltype->T`
   4. 如果 表达式 是返回类类型纯右值的函数调用 或是右操作数为这种函数调用的逗号表达式 那么不会对该纯右值引入临时量 (Before C++17)
   5. 如果 表达式 是~~除了（可带括号的）立即调用以外的 (Since C++20)~~纯右值，那么不会从该纯右值实质化临时对象:即这种纯右值没有结果对象。(Since C++17)
3. 如果对象的名字带有括号 那么它会被当做通常的左值表达式 从而`decltype(x)` 和 `decltype((x))` 通常是不同的类型

对于第一条规则
```cpp
int i = 0;
int* j=&i;
int n[10];
decltype(i=0); // int& // 但不会赋值(Clang)
// rule 1
static_assert(std::is_same_v<decltype(i = 0), int&>);
static_assert(std::is_same_v<decltype(n[5]), int&>);
static_assert(std::is_same_v<decltype(*j), int&>);
static_assert(std::is_same_v<decltype(static_cast<int&&>(i)), int&&>);
static_assert(std::is_same_v<decltype(i++), int>);
static_assert(std::is_same_v<decltype(++i), int&>);

// rule 2
static_assert(std::is_same_v<decltype(std::move(i)), int&&>); // xvalue
static_assert(std::is_same_v<decltype(0, i), int&>); // comma/lvalue
static_assert(std::is_same_v<decltype(i, 0), int>); // rvalue
static_assert(std::is_same_v<decltype("hello world"), const char(&)[12]>); // lvalue

// rule 3
static_assert(std::is_same_v<decltype((i)), int&>);
```

:::tip cv限定符
通常情况下 `decltype` 会推导出cv限定符

但当表达式是成员变量时 父对象的限定符会被忽略
```cpp
struct A {
  double x;
};
const A* a = new A();
static_assert(std::is_same_v<decltype(a->x),double>);
static_assert(std::is_same_v<decltype((a->x)),const double&>);
```
但多加一层括号会改变结果
:::

### decltype(auto)

> Since C++14

1. 只能独立使用(不能搭配cv限定 指针/引用)
2. 使`auto`推导使用`decltype`方式

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