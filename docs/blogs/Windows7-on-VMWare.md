# VMWare 上安装 Win7

reference:[VM16 虚拟机Win7无法安装VM tools解决方法](https://www.cnblogs.com/21r000/p/15646781.html) 作者：21r000

> VMWare16 上 安装 Windows7

##　Win7镜像

- [MSDN](https://msdn.itellyou.cn/)
- [MSDN升级版](https://next.itellyou.cn/) Windows7可以BT下载

## 解决VMWare Tools无法安装问题

设置 Floppy 为 Auto detect

下载 **Windows7 KB4474419** 补丁并安装
- [x86](http://download.windowsupdate.com/c/msdownload/update/software/secu/2019/09/windows6.1-kb4474419-v3-x86_0f687d50402790f340087c576886501b3223bec6.msu)
- [x64](http://download.windowsupdate.com/c/msdownload/update/software/secu/2019/09/windows6.1-kb4474419-v3-x64_b5614c6cea5cb4e198717789633dca16308ef79c.msu)

安装补丁后重启即可安装 VMWare Tools