# OS 与 包管理器

重所周知，*nix系统都会自带包管理器，一般情况下，你只会在 Ubuntu 使用 apt/apt-get；在 fedora 使用 dnf/yum。

## 包管理器行为

原生的包管理器会管理所有的依赖等资源，它会维护自己的依赖树和文件。如果在一个系统同时使用多个这样的包管理器可能导致兼容性问题。

如Ubuntu的apt/dpkg维护自己的依赖树，这时下载yum/rpm，同时使用的话，可能导致底层glibc之类的包依赖不同而覆盖安装。

## 新的打包方式

> 主要的区别在于 Snap和Flakpak 都是为了解决发行版依赖不同而提出的沙盒/容器

### Snap

> snap 通用 Linux 包格式，使简单的二进制包能够完美的、安全的运行在任何 Linux 桌面、服务器、云和设备上


> 下载查询卸载之类的操作跟`apt`差不多

#### 安装的几种模式

> 安装目录 `/snap/bin` ~~似乎`~/snap`也会有~~

```bash
snap install --[devmode|jailmode|edge|beta|stable|classic] __pak
```

| mode | disable | 简介 |
| --- | --- | :---: |
| devmode | security confinement | 开发模式 |
| jailmode |  | 强制限制模式 |
| classic | security | 经典模式 |

#### 软件启动

直接软件名就能启动

也能在软件选择里面找

### Flatpak

> 从一开始它的主要目标是允许相同的应用程序运行在各种 Linux 发行版和操作系统上。

> 使用沙盒和命名空间（比如`com.gnu.emacs`）

Flatpak比snap多一个runtime中间层

flatpak 可以只为用户安装（默认为系统(`--system`)安装）

```bash
flatpak install --user __pak
```

需要使用带命名空间的名称才能调用，如`com.gnu.emacs`

### AppImage

> 一个文件就是一个应用
> 不依赖系统资源

下载一个 .appimage 文件，给执行权限

然后就可以运行了

> [Portable Mode](https://docs.appimage.org/user-guide/portable-mode.html)

似乎配置文件路径在 `~/.config/__name`



## Windows?

Windows 下包管理器推荐 winget+scoop

winget用于下载商店软件和一些其他软件如steam epic等

scoop用来下载开发工具(unix tools)~~需要git和代理~~

[详细介绍](./Windows-Pkg-Man.md)