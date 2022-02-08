# Wireshark 解密 SSL 获取更多包信息

问题描述

很多时候，用wireshark捕获http分组的时候，发现明明打开了很多网站，却捕获不到几个分组，这怎么解决？
想捕获两个 **304 Not Modified** 的包怎么找不到呢？

## Reason

这是因为很多网站通过https协议进行数据传输，数据进行了加密，而此时wireshark无法解密，就无法捕获改分组，很多数据包捕获不到，可以试试配置SSL-Key来解决。

## Solution

**创建一个log文件** 例如 `C:ssl-keys.log` 或者 `/home/usr/log/ssl-keys.log`

![File](/images/File-Create.png)

**添加环境变量 `SSLKEYLOGFILE` 其值为log文件的完整路径**

![Windows-Env](/images/environment-variable.png)

打开浏览器 访问使用https的网站 **只要发现log文件不为空就行**



添加Wireshark配置 编辑 -> 首选项 -> Protocols

1.   -> SSL 低版本的Wiresharks
2.   -> TLS 高版本的Wiresharks
3.   有SSL就用SSL 没有就是TLS

![WireShark Conf](/images/WireShark-Conf.png)

在 (Pre)-Master-Secret log filename处 选择之前创建的文件



## Reference

[How to Decrypt SSL with Wireshark – HTTPS Decryption Guide](https://www.comparitech.com/net-admin/decrypt-ssl-with-wireshark/)