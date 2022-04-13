# Flex/Bison 大 学 习

::: tip [lex/flex yacc/bison][1]
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
```lex
%{
  // 定义段
  #include<iostream>
  #include<cstdio>
%}
// 可以定义变量
ALPHA [a-zA-Z]

// 用两个 % 分割段 下一个段为规则段 指定规则和行为
%%
{ALPHA} std::cout<<"匹配到字母"<<std::endl;
[0-9]+ std::cout<<"匹配到数字串"<<std::endl;
%%
int main(int argc, char **argv)
{
  printf("Lexer Begin\n");
  yylex();
  printf("Lexer End\n");
}
```

::: danger 规则的匹配
规则的格式
```lex
REGEX {/*code block*/}
```
Lex/Flex 匹配规则
1. 贪婪模式
2. 多个匹配项选择最早的模式(更早定义的)
:::


## Bison


## Flex/Bison in C++

[Flex][2]: `lex -+ -o hello  hello.l`

[Bison][3]:
```bison
%require "3.2"
%language "c++"
```

## 参考与学习
- [The Lex & Yacc Page](http://dinosaur.compilertools.net/)

[1]:https://stackoverflow.com/questions/623503/what-is-the-difference-between-flex-lex-and-yacc-bison
[2]:https://westes.github.io/flex/manual/Cxx.html#Cxx
[3]:https://www.gnu.org/software/bison/manual/html_node/A-Simple-C_002b_002b-Example.html