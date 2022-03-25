# docker 卷

数据卷 是一个可供一个或多个容器使用的特殊目录，它绕过 UFS，可以提供很多有用的特性：
- 数据卷 可以在容器之间共享和重用
- 对 数据卷 的修改会立马生效
- 对 数据卷 的更新，不会影响镜像
- 数据卷 默认会一直存在，即使容器被删除

[注意：数据卷 的使用，类似于 Linux 下对目录或文件进行 mount，镜像中的被指定为挂载点的目录中的文件会复制到数据卷中（仅数据卷为空时会复制）。][1]

## mount-with-run

```bash
docker run -d -P \
    --name web \
    --mount source=my-vol,target=/usr/share/nginx/html \
    nginx:alpine
# 上下两种用法一样
docker run -d -P \
    --name web \
    -v my-vol:/usr/share/nginx/html \
    nginx:alpine
```

::: warning
同时 -v 还可以直接挂载本地绝对路径

`-v /path/to/local/a:/path/to/container/a`

当路径不存在时会直接创建路径
:::

## volume

::: tip
volume 的概念 就是一块存储空间

`docker volume create` 时 只是创建一个空的可用的存储空间 并不会将任何东西放进去
:::

```bash
docker volume
    create __name # 创建卷
    ls
    inspect __name # 查看卷信息
    rm __names
    prune
```

[1]: https://yeasy.gitbook.io/docker_practice/data_management/volume