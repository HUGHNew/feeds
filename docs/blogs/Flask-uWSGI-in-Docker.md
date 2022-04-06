# Flask-nginx in Docker

> 使用两个容器 部署 Flask

Flask/uWSGI nginx的基础使用可以看[这里](Flask-uWSGI-nginx.md)

## docker 配置

::: tip 容器拉取
`sudo docker pull git4docker/flask nginx:alpine`

git4docker/flask的[Dockerfile](https://raw.githubusercontent.com/HUGHNew/Dockerfiles/master/Dockerfile.flask)
:::

因为需要nginx反向代理`uwsgi` 所以需要nginx知道Flask容器的地址

在不使用 `Docker Compose` 和 K8S 的情况下 可以用两种方式让nginx容器知道Flask容器的存在

- run --link: 启动nginx的时候将flask容器link入nginx容器中
- docker network: 配置一个 nginx 和 flask 共用的桥接网络

`docker network create __your_network_name__` 默认使用桥接(Bridge)网络 即 `create -d bridge`

> 本文中创建的网络为`backend`

## uwsgi 配置

@[code](flask-docker/flask/uwsgi.ini)

::: tip uwsgi 配置对比
对比[正常使用的代码](Flask-uWSGI-nginx.md#配置) 少了`daemonize = uwsgi.log`
:::

## nginx 配置

@[code](flask-docker/ngx/flask.conf)

主要就是写一个配置文件

::: tip nginx配置
`alpine` nginx 的 `nginx.conf` 里面默认include `/etc/nginx/conf.d/*.conf`
:::

## 项目结构

```
.
├── flask
│   ├── app.py
│   ├── uwsgi.ini
├── ngx
│   └── flask.conf
└── run.sh
```

## 容器启动

@[code](flask-docker/run.sh)

容器启动时的容器名配置是必须的

::: details 一些小提示
flask 容器的容器名可以修改 不过需要保证 `docker run` 时的name和 `nginx upstream` 中配置的相同

nginx 容器必须前台启动
:::

## 使用 docker compose

compose 配置文件

@[code](flask-docker/docker-compose.yml)

拉取镜像 `docker compose pull`

启动服务 `docker compose up`(前台启动 可以查看日志) 或者 `docker compose up -d`(daemon后台启动)

## 参考

- [nginx daemon off](https://www.cnblogs.com/weifeng1463/p/10277178.html)
- [Docker network 原理](https://juejin.cn/post/6904201044390051848)
- [容器网络使用](https://yeasy.gitbook.io/docker_practice/network/linking)