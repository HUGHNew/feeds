# xmake 快速上手

::: tip 阅前提示
观看此文需要一定的makefile/CMakeLists.txt等构建工具使用基础

完整学习见 `xmake` [文档](https://xmake.io/#/zh-cn/)
:::

> 写给还不会CMake的自己

::: details xmake
`xmake` 基于 `Lua` 构建 但不会`Lua`并不影响使用 了解Lua能够更好的使用

`xmake` 是一个直接的构建工具 也可以用以生成 CMakeLists.txt ~~CMakeMake~~ 具体操作[见此](https://xmake.io/#/zh-cn/guide/other_features?id=%e5%b0%9d%e8%af%95%e4%bd%bf%e7%94%a8%e5%85%b6%e4%bb%96%e6%9e%84%e5%bb%ba%e7%b3%bb%e7%bb%9f%e6%9e%84%e5%bb%ba%ef%bc%88trybuild-%e6%a8%a1%e5%bc%8f%ef%bc%89)
:::

## [安装](https://xmake.io/#/zh-cn/guide/installation)

::: tip 比较通用的方式:
```bash
bash <(curl -fsSL https://xmake.io/shget.text)
bash <(wget https://xmake.io/shget.text -O -)
```

作者也编译了各个发行版的二进制
:::

## [自动生成 xmake.lua](https://xmake.io/#/zh-cn/guide/other_features?id=%e8%87%aa%e5%8a%a8%e6%89%ab%e6%8f%8f%e6%ba%90%e7%a0%81%e7%94%9f%e6%88%90xmakelua)

目前只支持单级目录的扫描

对于简单的项目

```
.
├── hello.h
├── main.cpp
└── hello.cpp
```

::: details 查看代码
main.cpp:
@[code](xmake-intro/main.cpp)

include/hello.h:
@[code cpp](xmake-intro/include/hello.h)

src/hello.cpp:
@[code](xmake-intro/src/hello.cpp)
:::

直接输入 `xmake` 可以自动生成 `xmake.lua`

![xmake-auto-gen](/images/xmake.gen.png)

```bash
xmake # 构建项目
xmake run # 运行项目
```

查看 `xmake.lua`
```lua
add_rules("mode.debug", "mode.release")

target("xm-test")
    set_kind("static")
    add_files("hello.cpp")

target("main")
    set_kind("binary")
    add_files("main.cpp")

    add_deps("xm-test")
```

xm-test 是当前的文件夹名

## 自己构建项目

因为自动生成的 `xmake.lua` 只支持单级目录

所以要实现一个良好项目结构的话 还是需要自己手写 `xmake.lua`

对于刚才的项目结构 重构如下

```
.
├── include
│   └── hello.h
├── main.cpp
└── src
    └── hello.cpp
```

那么可以重构 `xmake.lua` 为

@[code](xmake-intro/xmake.lua)

执行 `xmake` 之后的结果

```
.
├── bin
│   └── main
├── build
├── include
│   └── hello.h
├── lib
│   └── libxm-test.a
├── main.cpp
├── src
│   └── hello.cpp
└── xmake.lua
```

之后就可以直接 `xmake run` 或者 `./bin/main` 来执行二进制程序了

```bash
$ xmake run
HelloWorld
```

## 使用Xrepo包管理工具

todo