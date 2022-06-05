# C++ 大 学 习

更一些比较短小有意义的的东西 长篇的内容转到[CSDN](https://blog.csdn.net/qq_46264758/category_11787298.html)

CSDN:
- [移动语义](https://blog.csdn.net/qq_46264758/article/details/125133088)
- [推导](https://blog.csdn.net/qq_46264758/article/details/125133006)

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

## [random](https://zh.cppreference.com/w/cpp/header/random)

C++11之前只有`srand/rand`(`<stdlib.h>`)可以来获取均匀分布的随机数

在`<random>`(Since C++11)中 随机数的获取分为了一组协作的类
- 随机数引擎(Engines) --> 生成随机的`unsigned`序列
- 随机数分布(Distribution) --> 使用`Engine`返回服从特定分布的随机数

> 随机数(伪随机数)产生的原理为 对于给定的初始值(seed) 经过计算 得到非周期性的结果

### C-like

标准库提供一个默认的随机数引擎`std::default_random_engine` 它的具体类型取决与编译器

可以这样实现一个`random`函数 `std::default_random_engine`的一个有参构造函数指定了初始化时的随机数种子
```cpp
#include<random>
unsigned _your_random(){
  static std::default_random_engine dre;
  return dre();
}
```

### 引擎

引擎(`Engine`)类有一些通用操作
- `Engine::result_type` 引擎使用和生成数值的类型
- `Engine e;`
- `Engine e(seed);`
- `e.seed(_seed);`
- `e.min/max();` 上下确界
- `e.discard(ull);` 丢弃多个随机数

```cpp
// discard 的实现
void discard(unsigned long long __z){
  for (; __z != 0ULL; --__z)(*this)();
}
```

:::details 更多引擎类

> 引擎模板 C++11实现了三种引擎模板
> - `linear_congruential_engine` : 实现线性同余算法
> - `mersenne_twister_engine` : 实现梅森缠绕器算法
> - `subtract_with_carry_engine` : 实现带进位减(一种延迟斐波那契)算法

几种预定义的随机数生成器(充满了Magic Number)
```cpp
using minstd_rand0 = std::linear_congruential_engine<std::uint_fast32_t, 16807, 0, 2147483647>; // 1988年的最小标准
using minstd_rand = std::linear_congruential_engine<std::uint_fast32_t, 48271, 0, 2147483647>; // 1993年的最小标准

using mt19937 = std::mersenne_twister_engine<std::uint_fast32_t, 32, 624, 397, 31,
                             0x9908b0df, 11,
                             0xffffffff, 7,
                             0x9d2c5680, 15,
                             0xefc60000, 18, 1812433253>; // 32bit 梅森缠绕器

using mt19937_64 = std::mersenne_twister_engine<std::uint_fast64_t, 64, 312, 156, 31,
                             0xb5026f5aa96619e9, 29,
                             0x5555555555555555, 17,
                             0x71d67fffeda60000, 37,
                             0xfff7eee000000000, 43, 6364136223846793005>; // 64bit 梅森缠绕器

using ranlux24_base = std::subtract_with_carry_engine<std::uint_fast32_t, 24, 10, 24>;
using ranlux48_base = std::subtract_with_carry_engine<std::uint_fast64_t, 48, 5, 12>;
```
:::

### 分布

分布(`Dist`)类有一些通用操作
- `Dist d;` 其他构造函数根据具体的分布类而定
- `d(e);` 获取服从该分布的随机数
- `d.min/max();` 上下确界
- `d.reset();` 重置分布状态 消除之前产生数据的影响

均匀分布代码示例
```cpp
#include<random>
#include<iostream>
int main(){
  std::default_random_engine dre;
  std::uniform_int_distribution<unsigned> uniform(0,19); // 创建闭区间 [0, 19] 上的分布
  std::uniform_real_distribution<float> ur(0,1); // 区间 [a, b) 上的均匀分布
  for(int i=0;i<10;++i){
    std::cout<<uniform(dre)<<" "<<std::ends;
  }
  return 0;
}
```
伯努利分布示例
```cpp
#include<random>
#include<iostream>
template<typename func>
void repeat(unsigned times,func fn){
  for(;times!=0;--times)fn();
}
int main(){
  std::default_random_engine dre;
  std::bernoulli_distribution bd;
  int count = 0;
  repeat(1e5,[&](){count+=bd(dre);});
  std::cout<<count<<"/"<<1e5<<"="<<count/1e5<<std::endl; // 可能结果 49922/100000=0.49922
  return 0;
}
```

所有的分布类别
- 均匀分布
- 伯努利分布
- 泊松分布
- 正态分布
- 采样分布

### 特殊设施

[`std::random_device`](https://zh.cppreference.com/w/cpp/numeric/random/random_device):生成非确定随机数的均匀分布整数随机数生成器 通常仅用于播种类似 mt19937 的伪随机数生成器

[`std::seed_seq`](https://zh.cppreference.com/w/cpp/numeric/random/seed_seq):消耗整数值随机数列 并产生无符号数值
```cpp
#include <random>
#include <cstdint>
#include <iostream>
 
int main(){
  std::seed_seq seq{1,2,3,4,5};
  std::vector<std::uint32_t> seeds(10);
  seq.generate(seeds.begin(), seeds.end());
  for (std::uint32_t n : seeds) {
      std::cout << n << '\n';
  }
}
```

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
@[code](cpp/decltype.cpp)

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