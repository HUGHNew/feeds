# tar 使用

> tar: tape archive

|          打包          |            压缩            |
| :--------------------: | :------------------------: |
| 将多个文件变成一个文件 | 使用算法将单个文件体积减小 |

## 归档文件

> tar包 英文为 **tarball** 也叫归档文件 因为它本身只打包不压缩

### 通用参数

|    参数     | 含义         |
| :---------: | ------------ |
|  -f(file)   | 指定包名     |
| -v(verbose) | 显示操作过程 |

### 打包

|      参数      | 含义                     |
| :------------: | ------------------------ |
|   -c(create)   | 将多个文件或目录进行打包 |
| -A(--catenate) | 追加 tar 文件到归档文件  |

```bash
$ ls
f1.txt  f1.txt.bz2  f1.txt.xz  f3.txt  f4.txt
$ tar cvf f.tar ./*
./f1.txt
./f1.txt.bz2
./f1.txt.xz
./f3.txt
./f4.txt
$ ls
f1.txt  f1.txt.bz2  f1.txt.xz  f3.txt  f4.txt  f.tar
```

### 解包

|         参数         | 含义              |
| :------------------: | ----------------- |
| -x(--extract, --get) | 解包              |
|   -C(--directory)    | 指定解包位置      |
|      -t(--list)      | 查看包文件        |
|     -r(--append)     | 追加文件到tarball |

```bash
$ tar tf f.tar
./f1.txt
./f1.txt.bz2
./f1.txt.xz
./f3.txt
./f4.txt
$ tar xf f.tar -C . # 需要保证指定目录存在
```

## 压缩

压缩工具:
- zip
- gzip
- bzip2
- xz

解压工具:
- unzip
- gunzip
- bunzip2
- xz

::: tip
除了 `zip` 其他软件其实都是调用的同一个二进制 只不过使用的不同参数

默认压缩对于源文件操作 并添加后缀(压缩软件名) 如`xz 1.txt` `1.txt -> 1.txt.xz` 解压会逆操作

> `-d` 解压  
> `-k` 保留原有文件

:::

### tar 压缩

> tar 可以使用如上所说的软件压缩和解压(不包括zip/unzip)

|        参数         | 含义                        |
| :-----------------: | --------------------------- |
| -a(--auto-compress) | 根据tarball后缀自动选择工具 |
|     -j(--bzip2)     | 使用 bzip2                  |
|      -J(--xz)       | 使用 xz                     |
|     -z(--gzip)      | 使用 gzip                   |

```bash
# 压缩示例
$ touch {1..7}.txt
$ tar jcvf f.tar ./*
$ ls
1.txt  3.txt  5.txt  7.txt
2.txt  4.txt  6.txt  f.tar.gz
```

```bash
$ mkdir files
# 用什么压缩 就要用什么解压
$ tar jxf f.tar.gz -C files
# tar axf f.tar.gz -C files
$ ls files
1.txt  2.txt  3.txt  4.txt  5.txt  6.txt  7.txt
```