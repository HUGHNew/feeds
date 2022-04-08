# 一个简单的正则表达式匹配实现

::: tip 原文信息
Code by Rob Pike
Exegesis by Brian Kernighan
Draft version Jan 28 2007
网址:<https://www.cs.princeton.edu/courses/archive/spr09/cos333/beautiful.html>
:::

## 引言

优美的代码应该简单——清晰并易于理解。优美的代码应该是紧凑的——恰好能实现功能但又不神秘(cryptic)以至于不能理解。优美的代码很可能是通用的，以统一的方式解决一大类问题。人们甚至可以将其描述为优雅，显示出良好的品味和精致。

~~后面就是些介绍 懒得翻译了~~

## 编程练习

Rob Pike 和 Brian Kernighan 在1998年正在写 *The Practice of Programming*("TPOP")


处理以下结构的正则表达式(一个子集)
```
c    matches any literal character c
.    matches any single character
^    matches the beginning of the input string
$    matches the end of the input string
*    matches zero or more occurrences of the previous character
```


## 实现

在书中，这个正则表达式匹配是模仿`grep`的一部分代码，但这部分代码是完全与其他部分独立的。主程序在这里并不太重要，它就像`grep`和类似的`*nix`工具一样，从标准输入或者文件中读取字符流，然后输出匹配项。

这就是匹配部分的代码：

@[code](match.c)

> 代码经过 Google 风格格式化

