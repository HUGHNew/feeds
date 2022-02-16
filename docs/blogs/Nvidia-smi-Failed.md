# Ubuntu 显示器无法使用

前情提要:有时候Windows连接时用得好好的显示器 使用Ubuntu/Linux时就没法用了

先 `xrandr` 查看 hdmi 连接情况 看是否检测到屏幕

检测不到同时确定hdmi线没有问题的话 看看是否为显卡驱动的问题~~AMD的不了解 下面只说NVIDIA的显卡~~

`nvidia-smi` 看看是否能连上驱动

一般的错误信息如下

> `$ nvidia-smi`
> NVIDIA-SMI has failed because it couldn't communicate with the NVIDIA driver. Make sure that the latest NVIDIA driver is installed and running

这样的话就是 NVIDIA 驱动的问题 简单的办法就是 打开**Software Updater** 查看 **Additional Drivers** 里面的显卡驱动版本 然后安装重启就能解决
> 命令行安装 `sudo apt install nvidia-driver-<version>` ~~我经常重装一下显卡驱动重启就好了~~

不行的话可能需要安装 nvidia-cuda-toolkit `sudo apt install nvidia-cuda-toolkit`

参考
- <https://askubuntu.com/questions/927199/nvidia-smi-has-failed-because-it-couldnt-communicate-with-the-nvidia-driver-ma>
- <https://stackoverflow.com/questions/49186723/error-nvidia-smi-has-failed-because-it-couldnt-communicate-with-the-nvidia-dri>