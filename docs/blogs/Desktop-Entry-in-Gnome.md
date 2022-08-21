# Gnome 的桌面入口

::: TIP 适宜人群
- 想在新建一个桌面入口跑脚本
- 想关联文件类型到自己想要的可执行文件
- 想了解为什么文件类型的关联方式
- 想改掉一些莫名奇妙的文件类型关联
:::

> .desktop 文件
> 
> Desktop Entry 桌面入口文件 指定一个入口 可以关联到可执行文件和处理的文件类型

## 默认关联

可以在一些文件中看见MIME类型和一些对应的默认程序的关联

- /etc/gnome/defaults.list
- /usr/share/applications/defaults.list

能看到比如这样的内容

```
application/xhtml+xml=google-chrome.desktop;
application/rdf+xml=google-chrome.desktop;
application/rss+xml=google-chrome.desktop;
application/xhtml+xml=google-chrome.desktop;
```

`google-chrome.desktop` 就是前面MIME类型指定的默认打开应用的入口

但是这不是应用相关的任何id 而是可以自己创建和修改的桌面入口 可以在`/usr/share/applications/` 中找到

::: details 简略版的 google-chrome.desktop

```desktop
[Desktop Entry]
Version=1.0
Name=Google Chrome
# Only KDE 4 seems to use GenericName, so we reuse the KDE strings.
# From Ubuntu's language-pack-kde-XX-base packages, version 9.04-20090413.
GenericName=Web Browser
# Gnome and KDE 3 uses Comment.
Comment=Access the Internet
Comment[zh_CN]=访问互联网
Exec=/usr/bin/google-chrome-stable %U
StartupNotify=true
Terminal=false
Icon=google-chrome
Type=Application
Categories=Network;WebBrowser;
MimeType=application/pdf;application/rdf+xml;application/rss+xml;application/xhtml+xml;application/xhtml_xml;application/xml;image/gif;image/jpeg;image/png;image/webp;text/html;text/xml;x-scheme-handler/http;x-scheme-handler/https;
Actions=new-window;new-private-window;
[Desktop Action new-window]
Name=New Window
Name[zh_CN]=新建窗口
Name[zh_TW]=開新視窗
Exec=/usr/bin/google-chrome-stable
[Desktop Action new-private-window]
Name=New Incognito Window
Name[zh_CN]=新建隐身窗口
Name[zh_TW]=新增無痕式視窗
Exec=/usr/bin/google-chrome-stable --incognito
```
:::

## 创建自己的入口

同样也可以创建自己的入口 不过不用在 `/usr/share/applications` 在 `~/.local/share/applications` 就可以了

具体的写法可以参考几个比较短的 `.desktop` 文件 这里比如腾讯会议

```
[Desktop Entry]
Name=WeMeetApp
Exec=/opt/wemeet/wemeetapp.sh %u
Comment=
Terminal=false
Icon=/opt/wemeet/icons/hicolor/64x64/mimetypes/wemeetapp.png
Type=Application
```

| 字段 | 含义 |
| :---: | -- |
| **Name** | 外露显示的应用名 |
| **Type** | 入口类型 |
| Comment | 可能是某些详细页的介绍 可以根据不同语言设置 `Comment[zh_CN]` |
| Terminal(boolean) | 是否终端可用 |
| Exec | 相关可执行文件路径 |
| Icon | 显示的图标(默认路径在`/usr/share/icons`) |
| MimeType | 关联的MIME文件类型 |
| Categories | 入口分类 |


::: details 这里以 [Koodo Reader](https://github.com/troyeguo/koodo-reader) appimage 版本举例
```
[Desktop Entry]
Name=Koodo-reader
Comment=Epub/Mobi/Azw3 Reader know more here @troyeguo/koodo-reader
Icon=/path/to/koodo-reader.png
Exec=/path/to/your/reader
Terminal=false
Type=Application
Keywords=reader;epub;mobi;azw3;opensource;
Categories=Utility;Office;
MimeType=application/epub+zip;application/x-mobipocket-ebook;
```

对于这个入口而言 设置 `MimeType` 是我使用时最关注的一个东西 因为ubuntu没有自带的epub阅读器 而我又使用的appimage格式
:::

## 更新索引


```sh
$ desktop-file-validate your_entry.desktop # 检查格式是否有问题
$ desktop-file-install --dir=~/.local/share/applications your_entry.desktop # 将入口文件放入指定目录 似乎直接 mv 也行
$ update-desktop-database ~/.local/share/applications # 更新索引以便可用
```

## 参考

- [Arch Wiki entry](https://wiki.archlinux.org/title/desktop_entries)
- [Mozilla MIME](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)