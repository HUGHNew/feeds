# Flex/Bison 小 学 习

::: tip lex/flex yacc/bison
[lex/flex yacc/bison][1]

lex 和 flex(the fast lexical analyser generator) 可以认为没什么区别 如果等你用到了有区别的地方时 你就知道有什么区别了

Bison 是 GNU 的 Yacc 实现/拓展 Flex 是 Lex 的继承者

更推荐用 Flex/Bison 替代 Lex/Yacc
> byacc 是 Berkeley 的 Yacc 实现

> ubuntu20.04:`lrwxrwxrwx 1 root root 4 8月   7  2018 /usr/bin/lex -> flex`
```bash
yacc -V
bison (GNU Bison) 3.5.1
Written by Robert Corbett and Richard Stallman.
```
:::

## Flex

文件后缀为 `l` VSCode的插件:**Yash**

文件结构
@[code c](flex.bison.intro/demo.l)

::: danger 规则的匹配
规则的格式
```lex
REGEX {/*code block*/}
```
Lex/Flex 匹配规则
1. 贪婪模式
2. 多个匹配项选择最早的模式(更早定义的)
:::

flex 编译
```bash
flex demo.l # 默认生成文件名为 lex.yy.c
flex -t demo.l > demo.lex.c # 生成文件名为 demo.lex.c
```

## Bison

flex可以单独使用 但bison不行 bison通过`yylex()`获取输入

bison的三个部分和flex相同

下面是简单的四则运算代码
@[code c](flex.bison.intro/cal.y)
> bison 需要定义`yyerror`函数

bison 编译
```bash
bison -d cal.y
# 默认生成 cal.tab.h cal.tab.c
# cal.tab.h 里面定义了终结符（enum）
```


## cal

下面展示一个flex和bison联合使用的例子

bison代码同上
@[code c](flex.bison.intro/cal.l)
> 通过`yylval`来设置终结符的值 值类型和名在bison的`%union`联合体中定义

Makefile编译
@[code bash](flex.bison.intro/Makefile)

## 参考与学习
- [The Lex & Yacc Page](http://dinosaur.compilertools.net/)

[1]:https://stackoverflow.com/questions/623503/what-is-the-difference-between-flex-lex-and-yacc-bison
[2]:https://westes.github.io/flex/manual/Cxx.html#Cxx
[3]:https://www.gnu.org/software/bison/manual/html_node/A-Simple-C_002b_002b-Example.html