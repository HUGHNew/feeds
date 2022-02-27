# [纯文本占位符替换](https://github.com/HUGHNew/Markdown-Placeholder)

写Markdown一时头脑发热 在想为什么不能用变量 改个东西得翻来覆去得改 很是麻烦

于是用Python写了一个脚本来做占位符替换

占位符为 `^numbers$`

直接利用正则表达式进行按内容本文行替换

例如Markdown文件

```md
Hello,^0$
This ^1$:^2$ is a toy ^1$ for substitution the repeated content in Markdown which may help you produce mary copies from a template markdown file. maybe helpful

print("Hello,^0$")
```

内容文本
```
Placeholder
project
**Markdown-Placeholder**
```

替换后

```md
Hello,Placeholder
This project:Markdown-Placeholder is a toy project for substitution the repeated content in Markdown which may help you produce mary copies from a template markdown file. maybe helpful

print("Hello,Placeholder")
```

github 链接 <https://github.com/HUGHNew/Markdown-Placeholder>