# 使用的uwsgi和nginx的 Flask 服务部署

> 本文仅展示 Flask使用uwsgi nginx部署的过程和过程中必要的介绍

## 快速上手

这是一个最简单的Flask项目

```python
# filename:app.py
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
```

运行方法

```bash
$ export FLASK_APP=app
# 需要先指定 app 文件 如果该文件名为 app.py 或 wsgi.py 可省略
$ flask run
```

默认部署在 `127.0.0.1:5000`

还可以在代码中指定端口和IP

```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
if __name__=="__main__":
    app.run(host="127.0.0.1",port=5000)
```

运行
```bash
$ python app.py
```

将端口改为 `0.0.0.0` 即可外部访问 可作为简单部署方式**但不推荐**

## uWSGI与nginx

WSGI:Web Server Gateway Interface 是一个Python标准[PEP0333](https://www.python.org/dev/peps/pep-0333/)
uWSGI:一个C编写的应用服务器(全功能HTTP服务器) 可以直接构建网络服务 默认单核单线程
uwsgi:一种协议 uWSGI/nginx/apache httpd 都支持

## 部署

### 安装

```bash
pip install flask uwsgi
sudo apt install nginx
# sudo yum install nginx
```

### 配置

#### uwsgi

uwsgi配置文件放在当前路径下 可命名为 `uwsgi.ini`

```bash
[uwsgi] 
socket = 127.0.0.1:5000
#  启动程序时所使用的地址和端口
#  不过在服务器上是通过uwsgi设置端口 通过uwsgi来启动项目
#  也就是说启动了uwsgi 也就启动了项目
chdir = /path/to/your/project
#  切换目录/配置项目路径
wsgi-file = app.py
# flask程序的启动文件
# 通常在本地是通过运行  python app.py runserver 来启动项目的
callable = app
# 程序内启用的application变量名
processes = 1
# 处理器个数
threads = 2
# 线程个数
stats = 127.0.0.1:9191
# 获取uwsgi统计信息的服务地址
pidfile = uwsgi.pid
# 保存pid信息 方便停止服务和重启的时候用
daemonize = uwsgi.log
# 后台运行时记录uwsgi的运行日志
# 文件路径基于chdir路径
```

#### nginx

可以直接更改 `/etc/nginx/sites-enabled/default` 不然可能会发生服务覆盖

```bash
server{
    listen 5000;
    # port
    location /{
        include uwsgi_params;
        # 引入uwsgi参数
        uwsgi_pass 127.0.0.1:5000;
        # 设置uwsgi地址
        uwsgi_param UWSGI_CHDIR /path/to/your/project;
        # 保持与之前的路径相同
        uwsgi_param UWSGI_SCRIPT app:app;
        # app_filename:callable
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

### 服务控制

```bash
uwsgi uwsgi.ini
uwsgi --ini uwsgi.ini
# 上述两种方式一样
uwsgi  uwsgi.ini --daemonize
# 后台运行启动
uwsgi --stop uwsgi.pid
# 停止服务
uwsgi --reload uwsgi.pid
# 可以无缝重启服务


nginx
# 启动
nginx -s stop/quit
# 停止
nginx -s reload
# 热加载
```

## 参考文档/博客

- [Flask uWSGI 官方文档](https://flask.palletsprojects.com/en/2.0.x/deploying/uwsgi/)
- [Flask with nginx and uWSGI on Ubuntu Bionic](https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-uswgi-and-nginx-on-ubuntu-18-04)
- [Flask+uwsgi+nginx项目部署](https://blog.csdn.net/hit0803107/article/details/53264066)
- [nginx与uWSGI](https://blog.csdn.net/dqchouyang/article/details/81639788)