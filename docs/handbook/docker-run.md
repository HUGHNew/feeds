# docker-run



> run 的时候先会查看本地是否有此镜像
>
> 如果没有则 pull :latest
>
> run = create + exec

```bash
sudo docker run -it --rm alpine
```



常用的短指令

| 短指令 | 含义                  | 备注                   |
| ------ | --------------------- | ---------------------- |
| -it    | 打开输入并分配一个tty | 一般进入容器会用       |
| --rm   | 容器用完即删          |                        |
| -p     | 暴露端口              |                        |
| --name | 指定容器名            | 控制友好型参数         |
| -v     | 挂载文件夹            | 相当于ln到容器中       |
| -w     | 指定工作目录          | 约等于进入后cd到此目录 |
| -h     | 指定容器hostname      |                        |
| -d     | 后台启动              |                        |



```
Usage:  docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

Run a command in a new container

Options:
  -a, --attach list                    Attach to STDIN, STDOUT or STDERR
  -d, --detach                         Run container in background and print container ID
      --entrypoint string              Overwrite the default ENTRYPOINT of the image
  -e, --env list                       Set environment variables
      --expose list                    Expose a port or a range of ports
  -h, --hostname string                Container host name
  -i, --interactive                    Keep STDIN open even if not attached
  -m, --memory bytes                   Memory limit
      --mount mount                    Attach a filesystem mount to the container
      --name string                    Assign a name to the container
  -p, --publish list                   Publish a container's port(s) to the host
      --rm                             Automatically remove the container when it exits
  -t, --tty                            Allocate a pseudo-TTY
  -u, --user string                    Username or UID (format: <name|uid>[:<group|gid>])
  -v, --volume list                    Bind mount a volume
  	  --read-only                      Mount the container's root filesystem as read only
  -w, --workdir string                 Working directory inside the container
```

## 端口映射

### 暴露端口 expose

暴露:容器开发能访问的端口

```bash
docker run -d nginx
# docker ps 能看见容器80端口已暴露 但是主机无法访问
```

`docker ps` 查看容器信息 仅列出

| PORTS  |
| :----: |
| 80/tcp |

暴露方式

1. 在Dockerfile里

```dockerfile
EXPOSE 80
```

2. `docker run --expose ports`

### 发布端口 publish

发布:让主机能够访问容器端口

`-p [<binding address>]:<host port>:<container port>[/tcp|/udp]`

### -p 80

随机分配一个端口映射到容器80端口

|      PORTS       |
| :--------------: |
| :::49153->80/tcp |

### -p 80:80

指定映射到容器80端口的端口

|     PORTS     |
| :-----------: |
| :::80->80/tcp |

### -p 127.0.0.1:80:80

指定映射到容器80端口的端口和限制访问的IP

|        PORTS         |
| :------------------: |
| 127.0.0.1:80->80/tcp |

