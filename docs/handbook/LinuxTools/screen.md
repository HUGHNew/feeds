# screen

> GNU 协议 `apt install screen`
> 配置文件 `.screenrc`

screen 的指令有两种
- screen内外都能用的命令行参数(`screen [options]`)
- screen内部的组合键控制(默认以 Ctrl+A 开始的组合键)

## 使用

### 创建

```bash
screen
screen -S name
# 创建新的screen -S 指定会话名 否则默认生成一个

# screen command
screen ssh user@ip
# 创建新的screen并执行命令
Ctrl + A, C
# 可以创建新的会话
```

> screen 的默认命令为当前shell 即 `screen` `screen $SHELL`

### 退出

```bash
# 在 screen 中
exit
# 退出并关闭当前会话
# 也可以使用组合键关闭
Ctrl + A, K
Ctrl + D
# 最想要的退出方式是退出了会话 但会话不中断
Ctrl + A, D
# detach
```

### 查看

`screen -ls` 查看当前已有的screen会话

### 进入

使用 `screen -r`
![screen-attach](/images/screen-reattach.png)

## 分割

|竖直分割|水平分割|
|:-:|:-:|
|`^a, S`|`^a, |`|

> `Ctrl+A, Tab`

## 参考

- [tmux&screen](https://qianxu.run/2021/03/28/tmux-vs-screen/)
- `man screen` 查看更多