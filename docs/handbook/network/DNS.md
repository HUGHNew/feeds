# Quick-Know DNS

DNS : Domain Name System

域名 --DNS--> IP(v4/v6)

## 层次结构

- root(.) 根服务器
- TLD(com./cn.) 顶级域名服务器
- authoritative(cn.com./bing.cn.com.) 权威服务器
- [local] 本地DNS服务器

### 服务器分类

DNS 服务器的分类
1. nameserver
   1. root
   2. TLD
   3. authoritative DNS查询的最后一站 返回IP或者错误信息
2. Resolver/Recuror
   1. 替客户端获取到查询结果(通常是DNS查询的第一站)~~client递归查询->Resolver迭代查询-->结果~~
   2. 运营商ISP分配的DNS、谷歌8.8.8.8等都属于DNS Resolver

![DNS-LookUp](https://www.cloudflare.com/img/learning/dns/what-is-dns/dns-record-request-sequence-3.png)

### 查询方式

1. 迭代:
2. 递归:
3. 非递归:DNS Resolver 通过缓存数据返回结果

查询过程

1. host 本地查找
2. host **递归**查询本地DNS服务器
3. 本地DNS服务器**迭代**查询根服务器到权威服务器

![lookup](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2984663361/p336439.png)

## 记录

DNS资源记录(Resource Record):层次结构的分布式数据库

存储在DNS服务器 (host本地(OS/Browser)缓存)

:::details RR
RR:(Name, Value, Type, TTL)

Name和Value取决于Type

| Type  | Name            | Value                      | 记录           |
| ----- | --------------- | -------------------------- | -------------- |
| A     | 主机名          | IP                         | 映射           |
| AAAA  | 主机名          | IPv6                       | 映射           |
| NS    | 域(Name System) | 权威服务器主机名           |                |
| CNAME | 规范名称记录     | 主机对应的规范主机名       | 主机别名       |
| MX    |                 | 邮件服务器对应的规范主机名 | 邮件服务器别名 |
| PTR   | 指针记录        | 引导至一个规范名称(Canonical Name) | 只传回一个CNAME 常用于反向DNS查找 |

> 对于某特定主机
>
> 权威服务器存储其A记录
>
> 其他类型的存储NS记录和其A记录
:::

## 参考

- [what-is-dns](https://www.cloudflare.com/learning/dns/what-is-dns/)
- [DNS基本概念](https://help.aliyun.com/document_detail/102237.html)