# [生成C++的词法生成器][1]

> 翻译自[1] 对原文格式有一点小修改

:::warning 实验性
目前扫描类(scanning class)的形式是实验性的，在主要版本之间可能会有很大的变化。
:::

> scanner/lexer 词法生成器/lexer 认定为同一个东西

`flex` 提供了两种不同的方式去生成C++代码的lexer。第一种方法是简单地使用 C++ 编译器而不是 C 编译器编译`flex`生成的lexer。你应该不会遇到任何编译错误（见[报告错误][2]。然后你可以在你的规则动作中使用C++代码而不是C代码。注意，你的scanner的默认输入源仍然是`yyin`，默认的`echo`仍然是对`yyout`进行的。这两个仍然是 `FILE *` 变量，而不是C++流(streams)。

你也可以使用`flex`生成一个C++scanner类，使用`-+`选项（或者，使用`%option c++`），如果`flex`可执行文件的名称以'+'结尾，例如`flex++`，则自动指定该选项。当使用该选项时，flex默认生成的scanner为`lex.yy.cc`文件，而不是`lex.yy.c`。生成的scanner包括头文件`FlexLexer.h`，它定义了两个C++类的接口。

## FlexLexer.h

`FlexLexer.h`
- `FlexLexer`: 提供了一个定义一般scanner类接口的抽象基类。
- `yyFlexLexer`，派生于`FlexLexer`。定义了额外的成员函数

### FlexLexer

提供了以下成员函数。
- `const char* YYText()`: 返回最近匹配的标记的文本，相当于yytext。
- `int YYLeng()`: 返回最近匹配的标记的长度，相当于yyleng。
- `int lineno() const`: 返回当前的输入行数（见`%option yylineno`），如果没有使用`%option yylineno`，则返回1。
- `void set_debug( int flag )`: 设置scanner的调试标志，相当于分配给`yy_flex_debug`（见[scanner选项][3]）。注意，你必须使用`%option debug`来构建scanner，以便在其中包含调试信息。
- `int debug() const`: 返回当前调试标志的设置。

还提供了相当于`yy_switch_to_buffer()`、`yy_create_buffer()`（尽管第一个参数是一个`istream&`对象引用，而不是一个`FILE*`）、`yy_flush_buffer()`、`yy_delete_buffer()`和`yyrestart()`（同样，第一个参数是一个`istream&`对象引用）的成员函数。

### yyFlexLexer

定义了以下额外的成员函数。

```cpp
yyFlexLexer( istream* arg_yyin = 0, ostream* arg_yyout = 0 );
yyFlexLexer( istream& arg_yyin, ostream& arg_yyout );
```

`virtual int yylex()`
执行与`yylex()`对普通`flex`scanner相同的作用：它扫描输入流，消耗token，直到规则的动作返回一个值。如果你从`yyFlexLexer`派生出一个子类`S`，并想在`yylex()`中访问`S`的成员函数和变量，那么你需要使用`%option yyclass="S"`来通知flex，你将使用该子类而不是`yyFlexLexer`。在这种情况下，`flex`不会生成`yyFlexLexer::yylex()`，而是生成`S::yylex()`
> 同时也会生成一个假的`yyFlexLexer::yylex()`，如果被调用，则调用`yyFlexLexer::LexerError()`。

```cpp
virtual void switch_streams(istream* new_in = 0, ostream* new_out = 0);
virtual void switch_streams(istream& new_in, ostream& new_out);
```
重新分配`yyin`到`new_in`（如果非空）和`yyout`到`new_out`（如果非空），如果`yyin`被重新分配，则删除之前的输入缓冲区。

```cpp
int yylex( istream* new_in, ostream* new_out = 0 );
int yylex( istream& new_in, ostream& new_out );
```
首先通过`switch_streams(new_in，new_out)`切换输入流，然后返回`yylex()`的值。

:::detail yylex(new_int,new_out)
```cpp
// 可能的实现
int yylex( istream* new_in, ostream* new_out = 0 ){
  switch_streams(new_in,new_out);
  return yylex();
}
int yylex( istream& new_in, ostream& new_out ){
  switch_streams(new_in,new_out);
  return yylex();
}
```
:::

此外，`yyFlexLexer`定义了以下受保护的虚函数，你可以在派生类中重新定义这些函数，以定制scanner。

#### protected

```cpp
virtual int LexerInput( char* buf, int max_size );
```
向buf中读取最多max_size的字符，并返回读取的字符数。为了表示输入结束，返回0个字符。注意，交互式scanner（见[scanner选项][4]中的`-B`和`-I`标志）定义了宏`YY_INTERACTIVE`。如果你重新定义了`LexerInput()`，并且需要根据scanner是否可能正在扫描一个交互式输入源而采取不同的行动，你可以通过`#ifdef`语句测试这个名字的存在。

```cpp
virtual void LexerOutput( const char* buf, int size );
```
从缓冲区buf中写出size的字符，虽然是NUL结尾的，但如果scanner的规则可以匹配其中有NUL的文本，那么它也可能包含内部的NUL。

```cpp
virtual void LexerError( const char* msg );
```
报告一个致命的错误信息。这个函数的默认版本将信息写入流`cerr`并退出。

::: tip
yyFlexLexer对象包含其整个扫描状态。

因此你可以使用这样的对象来创建可重入的scanner，但也请看[可重入(Reentrant)](https://www.cs.virginia.edu/~cr4bd/flex-manual/Reentrant.html#Reentrant)。

你可以实例化同一个`yyFlexLexer`类的多个实例，你也可以在同一个程序中使用上面讨论的 `-P` 选项将多个C++ scanner类组合在一起。
:::

最后，请注意，`%array`功能对 C++ scanner类是不可用的；你必须使用`%pointer`（这是默认的）。

### example

下面是一个简单的C++scanner的例子。

```cpp
// An example of using the flex C++ scanner class.

%{
#include <iostream>
using namespace std;
int mylineno = 0;
%}

%option noyywrap c++

string  \"[^\n"]+\"

ws      [ \t]+

alpha   [A-Za-z]
dig     [0-9]
name    ({alpha}|{dig}|\$)({alpha}|{dig}|[_.\-/$])*
num1    [-+]?{dig}+\.?([eE][-+]?{dig}+)?
num2    [-+]?{dig}*\.{dig}+([eE][-+]?{dig}+)?
number  {num1}|{num2}

%%

{ws}    /* skip blanks and tabs */

"/*"    {
        int c;

        while((c = yyinput()) != 0)
            {
            if(c == '\n')
                ++mylineno;

            else if(c == '*')
                {
                if((c = yyinput()) == '/')
                    break;
                else
                    unput(c);
                }
            }
        }

{number}  cout << "number " << YYText() << '\n';

\n        mylineno++;

{name}    cout << "name " << YYText() << '\n';

{string}  cout << "string " << YYText() << '\n';

%%

// This include is required if main() is an another source file.
//#include <FlexLexer.h>

int main( int /* argc */, char** /* argv */ )
{
    FlexLexer* lexer = new yyFlexLexer;
    while(lexer->yylex() != 0)
        ;
    return 0;
}
```

    
如果你想创建多个（不同的）scanner类，你可以使用`-P`标志（或者`prefix=`选项）将每个`yyFlexLexer`重命名为其他'xxFlexLexer'。然后，你可以在你的其他源中包含`<FlexLexer.h>`，每个lexer类一次，首先对`yyFlexLexer`进行重命名，如下所示。
```cpp
#undef yyFlexLexer
#define yyFlexLexer xxFlexLexer
#include <FlexLexer.h>

#undef yyFlexLexer
#define yyFlexLexer zzFlexLexer
#include <FlexLexer.h>
```
例如，如果你对你的一个scanner使用`%option prefix="xx"`，对另一个使用`%option prefix="zz"`。

[1]: https://www.cs.virginia.edu/~cr4bd/flex-manual/Cxx.html#Cxx
[2]: https://www.cs.virginia.edu/~cr4bd/flex-manual/Reporting-Bugs.html#Reporting-Bugs
[3]: https://www.cs.virginia.edu/~cr4bd/flex-manual/Scanner-Options.html#Scanner-Options
[4]: https://www.cs.virginia.edu/~cr4bd/flex-manual/Scanner-Options.html#Scanner-Options