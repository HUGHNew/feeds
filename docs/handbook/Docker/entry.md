# docker command

> 本文解释在`Dockerfile`中`CMD`和`ENTRYPOINT`的区别 以及在使用是与命令行参数的交互情况

::: tip CMD/ENTRYPOINT 的两种格式
```dockerfile
# exec 格式
# 该格式下 Dockerfile 命令的值为 JSON数组
CMD ["cmd","param"]
ENTRYPOINT ["cmd","param"]
# shell 格式
CMD cmd param
ENTRYPOINT cmd param
```

在单一指令的情况下 不同格式的等价效果

- exec 格式:`cmd param`
- shell 格式:`/bin/sh -c cmd param`
:::

## ENTRYPOINT

::: danger `ENTRYPOINT`的注意事项
`ENTRYPOINT` 的 shell 格式会覆盖 `CMD` 和 run 时的命令行参数

Dockerfile 中 最后一个 `ENTRYPOINT` 才有效(对于子镜像 这条依然成立)
:::

`ENTRYPOINT` shell 格式有等价的 exec 格式

```dockerfile
# 下面两种格式等价
ENTRYPOINT ["/bin/sh","-c","cmd","param"]
ENTRYPOINT cmd param
```

## CMD

`CMD` 会多一个格式 就是完全作为 `ENTRYPOINT` 的参数(但其实没区别)

```dockerfile
# (as default parameters to ENTRYPOINT)
CMD ["param1","param2"]
```

## 运行容器

`docker run` 时的命令行参数会覆盖 `CMD`

`docker run --entrypoint` 的参数可以覆盖 `ENTRYPOINT`

## 示例

`sudo docker build -t hello .`

将镜像命令为 hello

### shell 格式

@[code dockerfile](docker/Dockerfile.cmd-sh)

```bash
$ sudo docker run hello
hello

$ sudo docker run hello world
hello
```

可以看出 shell 格式的 `ENTRYPOINT` 会覆盖掉命令行参数和 `CMD`

### exec 格式

@[code dockerfile](docker/Dockerfile.cmd-exec)

```bash
# echo "hello; echo world"
$ sudo docker run hello
hello; echo world;

# echo "hello; world"
$ sudo docker run hello world
hello; world

# echo "world"
$ sudo docker run --entrypoint echo hello world
world
```

::: tip CMD的参数形式
从上面的例子中 可以看出 `CMD` 并入 `ENTRYPOINT` 的方式就是将 `CMD` 列表中的值作为参数传递给 `ENTRYPOINT` 执行
:::

## [官方文档](https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact)

|                                | No ENTRYPOINT              | ENTRYPOINT exec_entry p1_entry | ENTRYPOINT [“exec_entry”, “p1_entry”]          |
| :----------------------------- | :------------------------- | :----------------------------- | ---------------------------------------------- |
| **No CMD**                     | *error, not allowed*       | /bin/sh -c exec_entry p1_entry | exec_entry p1_entry                            |
| **CMD [“exec_cmd”, “p1_cmd”]** | exec_cmd p1_cmd            | /bin/sh -c exec_entry p1_entry | exec_entry p1_entry exec_cmd p1_cmd            |
| **CMD [“p1_cmd”, “p2_cmd”]**   | p1_cmd p2_cmd              | /bin/sh -c exec_entry p1_entry | exec_entry p1_entry p1_cmd p2_cmd              |
| **CMD exec_cmd p1_cmd**        | /bin/sh -c exec_cmd p1_cmd | /bin/sh -c exec_entry p1_entry | exec_entry p1_entry /bin/sh -c exec_cmd p1_cmd |

> If `CMD` is defined from the base image, setting `ENTRYPOINT` will reset `CMD` to an empty value. In this scenario, `CMD` must be defined in the current image to have a value.

> 设置 `ENTRYPOINT` 会将基础镜像中的 `CMD` 置空(如果有)
> 在这种情况下 `CMD` 只能在当前镜像中定义
