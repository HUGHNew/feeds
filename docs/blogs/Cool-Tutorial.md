# Cool 快速入门

> cs143 Classroom Object Oriented Language

> 程序执行 `(new Main).main()`

Main类中的main函数为入口

> 如果理解BNF的话 看Cool的BNF 更好理解语法

## HelloWorld

```cool
class Main inherits IO{
    hw:String <- "HelloWorld\n"; -- initialization or assignment
    hello():String{"Hello"}; -- define a method
    main():SELF_TYPE{ -- return type:Main
        out_string(hw)
    };
};
```

## 分支与循环

### 分支

#### if

```cool
if <expr:Bool> then <expr> else <expr> fi
```

#### case

> 一种 runtime type-check 的机制

```cool
case <expr0> of
    <id1> : <type1> => <expr1>;
    . . .
    <idn> : <typen> => <exprn>;
    x : Object => {} -- same as default
esac
```

无匹配会报错

### 循环

```cool
while <expr:Bool> loop <expr> pool
```

类型为 Object

## 注释

```cool
-- line commet

(*
    block comment
    (*may be nested*)
    but can't cross file boundaries
*)
```

## 块

```cool
{ <expr>; ... <expr>; }
```

块的值和类型与最后一个表达式相同

`;` 是表达式结束符 而非分隔符

从左到右求值

## let

```cool
let <id1> : <type1> [ <- <expr1> ], ..., <idn> : <typen> [ <- <exprn> ] in <expr>
```

初始化操作可选(使用默认初始化)

`let` 的值和类型 与 body 同

`let` 初始化列表中可以多次赋值 初始化列表中 `idn` 对于 `idn+k` 可见~~k为正整数~~

## isvoid

```cool
isvoid expr
```

## 基础类

- [Object](#object)
- [IO](#io)
- Int
- [String](#string)
- Bool

### Object

```
abort() : Object
type_name() : String
copy() : SELF_TYPE -- shallow copy
```

### IO

```
out_string(x : String) : SELF_TYPE
out_int(x : Int) : SELF_TYPE
in_string() : String
in_int() : Int
```

### String

```
length() : Int
concat(s : String) : String
substr(i : Int, l : Int) : String
```

## 运行

```bash
coolc hello.cl # compile to MIPS assembly
spim hello.s # run the assembly
```

## 参考

- [Cool 手册](https://web.stanford.edu/class/cs143/materials/cool-manual.pdf)
- [Cool Tour](https://web.stanford.edu/class/cs143/materials/cool-tour.pdf)