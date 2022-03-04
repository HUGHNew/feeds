# Gnome-Classic ApplicationMenu 定制化

> Gnome 一览:<https://help.ubuntu.com/stable/ubuntu-help/shell-introduction.html.en>

![application menu长相](/images/AppMenu-View.png)
这是Applilcations菜单的原始面貌 它的问题在于点击事件都是打开应用 没有办法进行更改

要想修改 首先得知道这个东西是什么

我这里使用的是 Gnome Classic 桌面环境 这个东西叫作 Applications Menu

可以通过 `alacarte` 来修改
> `sudo apt install alacarte`

界面如图
![alacarte界面](/images/alacarte.png)
这个看上去就知道怎么操作了

> 移动位置的操作有点慢同时图标需要手动设置
> 路径寻找 如果 command 是有路径的(非`/usr/bin`的) 比如腾讯会议是`/opt/wemeet/wemeetapp.sh` 那么它的图标在:/opt/wemeet/icons/hicolor/
> 如果没有路径的话 可以在 /usr/share/icons(`/usr/share/icons/hicolor`) 中寻找图标

## Favorites

Favorites 目录是 Dock栏上固定的项目 但Gnome Classic是默认不显示Dock的

可以用`gnome-tweaks`修改
> `sudo apt install gnome-tweaks`

在 Extension -> Ubuntu Dock 中设置

## 修改 Dock

reference:
- <https://linuxconfig.org/how-to-customize-dock-panel-on-ubuntu-20-04-focal-fossa-linux>
- <https://help.ubuntu.com/stable/ubuntu-help/shell-apps-favorites.html.en>

只能在程序打开后在Dock时右击添加到Favorites