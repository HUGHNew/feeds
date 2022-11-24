# Quick-Know HTTP

HTTP 影响因素: **带宽** **延迟**



延迟

- HOL block: 一列的第一个数据包（队头）受阻而导致整列数据包受阻
- DNS 查询: 可以通过 DNS Cache缓解
- 链接建立: 基于TCP的HTTP需要三次握手建立连接

## HTTP0.9

> `GET` and `HTML` only

## HTTP1.x

HTTP1.0: 

- 短连接 (默认)
- 长连接 `Connection: Keep-Alive` (非官方 看浏览器支持)

HTTP1.1

- 短连接 `Connection: close`

- 长连接 (默认)
- 流水线 (被 HTTP2 *multiplexing* 替代)



| HTTP         | 1.0                           | 1.1                                            |
| ------------ | ----------------------------- | ---------------------------------------------- |
| 缓存处理     | `If-Modified-Since` `Expires` | 更多的缓存头 `Entity tag` `If-Match` `If-None` |
| 带宽优化     | 传送整个对象                  | 断点续传 range头部(只传输部分)                 |
| 错误通知管理 |                               | 新增状态码                                     |
| Host头部     | 无                            | 无Host则400                                    |
| 长连接       |                               | PersistentConnection Pipelining                |



## HTTP2

[Akamai 同时请求379张图片的HTTP对比展示](https://http2.akamai.com/demo)

### SPDY

1. **多路复用**: 多个请求使用同一个tcp连接
2. **请求优先级**: 给每个 request 设置优先级
3. **header压缩**
4. **强制TLS**
5. **服务端推送**



> Google 2012 HTTP2 base
>
> 位于 HTTP1.x 和 SSL/TLS 之间

### HTTP2/SPDY

|              | HTTP2                                                        | SPDY                                            |
| ------------ | ------------------------------------------------------------ | ----------------------------------------------- |
| HTTP         | 可以明文                                                     | SSL/TLS                                         |
| 首部压缩算法 | [HPACK](https://github.com/httpwg/http2-spec/blob/main/draft-ietf-httpbis-header-compression.xml) | [DEFLATE](http://zh.wikipedia.org/wiki/DEFLATE) |

### HTTP1/2

- 二进制格式(二进制分帧)
- 多路复用
- header压缩
- server push



## HTTP3

### QUIC

> QUIC 协议(UDP based)是 **HTTP/3** 协议的底层协议 使用[**TLS1.3**](TLS.md#tls1-3)的密钥交换方案

> 应用层协议 **默认使用加密**

![QUIC-handshake](/images/Tcp-vs-quic-handshake.svg)
> 图片来自 [Wiki](https://en.wikipedia.org/wiki/QUIC)

特点:
1. 可插拔: 应用程序层面就能实现不同的拥塞控制算法。\*
2. 前向纠错(FEC) \*
3. 单调递增的 Packet Number:  使用 Packet Number 代替了 TCP 的 seq。
4. 不允许 Reneging: 一个 Packet 只要被 Ack，就认为它一定被正确接收。
5. 更多的 Ack 块和增加 Ack Delay 时间。
6. 基于 stream 和 connection 级别的流量控制。

[主要优化点][2]
1. 连接创建开销小: TCP+TLS1.2=3RTT QUIC=1RTT
2. 单数据包加密(TCP 字节流加密 可能等待其他数据包)
3. 提高网络切换期间性能(连接标识符:表示客户端与服务器的连接)

> Mozilla 文档没有 暂不更新

> 2022.11.24 [QUIC 图解](https://quic.xargs.org/)

## HTTPS

> HTTPS = HTTPx+ SSL/TLS

<!-- ${\rm TLS}\,1.0 \;\approx\;{\rm SSL}\,3.0/3.1$ -->

TLS1.0 约等于 SSL3.0/3.1

:::tip 安全问题
信息劫持 与 中间人攻击

实际问题: 需要确定浏览器收到的公钥一定是对应网站的公钥
:::

HTTPS 引入权威机构(CA, Certificate Authority)来奠定安全的基础

网站启用HTTPS之前 申领CA的数字证书

:::details CA防篡改
证书(包含网址等基本信息)+数字签名(使用CA的公钥加密)

![数字签名的生成与验证](https://cheapsslsecurity.com/blog/wp-content/uploads/2018/09/how-do-digital-signatures-and-digital-certificates-work-together-in-ssl.png)

> hash作用:
> 1. 非对称加密的位数限制
> 2. [其他安全原因](https://crypto.stackexchange.com/questions/12768/why-hash-the-message-before-signing-it-with-rsa/12780#12780)

:::

公钥的可信
1. 根证书物理方式传递给OS/Brower厂商 然后预装
2. 证书信任链
3. 手动安装

加密内容
1. HTTP请求和响应的具体内容

外部可见内容
1. HTTP请求
2. TCP头部 Port
3. IP头部 IP

HTTPS 流程
```mermaid
sequenceDiagram
participant c as browser
participant s as server
c ->>+ s : Hello
s ->>- c : Hello(CA证书 Server公钥)
Note over c : 1. 校验 证书 信息
Note over c : 2. 对比内置 CA 判断是否可信(无则报错)
Note over c : 3. 使用内置 CA 公钥解密
Note over c : 4. 计算hash 对比签名
c ->> s : 利用Server公钥加密 协商对称加密算法
Note over c,s : 使用对称加密通讯
```
![](https://pic2.zhimg.com/v2-a0d10af45e785fe8d3f5cd12f8c309f5_r.jpg)

图示SSL流程 [具体细节](TLS.md)

![](https://img-blog.csdnimg.cn/20200609101405612.gif)

## 参考

HTTP x
- <https://juejin.cn/post/6844903489596833800>
- <https://juejin.cn/post/6995109407545622542>

HTTPS
- <https://zhuanlan.zhihu.com/p/43789231>
- [How do certification authorities store their private root keys?](https://security.stackexchange.com/questions/24896/how-do-certification-authorities-store-their-private-root-keys)
- [CA机构如何保存私钥](https://www.zhihu.com/question/22260090/answer/648910720)

[1]: https://zh.wikipedia.org/wiki/HTTP/3
[2]: https://zh.wikipedia.org/wiki/QUIC