# sed

`sed [-e <script>][-f <file>] text`

## script

脚本组成 `addr|cmd` `|`仅用于区分字段

### addr

|   地址表示法  |   功能    |
|   :---:   |   :---:   |
|   n   |   正整数行号  |
|   $   |   最后一行    |
|   /regexp/    |   POSIX正则 斜线分隔 可以用`\cregexpc` 选项指定[c 为分界符] |
|   begin,end |   [begin,end]   |
|   addr,+n     |   [addr,addr+n]    |
|   begin~step  |   begin with **first** with the gap of **step**   |
|   addr!   |   except addr |
| /pattern/,n | 行号和模式双匹配 |
| n,/pattern/ | 同上 |
| x,y! | 不包括 x 到 y 行 |

### cmd

|   命令  | 功能  |
| :---------------------: | ------------------------------------------ |
| s/regexp/replacement/(gi) |   替换 replacement 可含 `&`  代表 regexp内容 分隔符为s后一个符号 |
| c | 修改/替换文本(可以后面直接接字串) |
| a |  在当前行后附加文本(可以后面直接接字串)  |
| i | 在当前行前插入文本(可以后面直接接字串) |
| d |   删除当前行    |
| p |   打印当前行    |
| c |	替换行	|
| = |   输出当前行号  |
| y/set1/set2 |   等长字符集替换    |
| q | 第一个模式匹配后立即退出 |
| w | 写入文件 |

### args

| 参数 | 功能                            |
| :----: | ------------------------------ |
|   n    | 禁止自动输出(不关会输出全部,搭配 `p` 使用) |
|   e    | 指出为命令行                   |
|   f    | 指出为文件                     |
|   i    | 原地修改                       |

## tldr

```bash
# Replace the first occurrence of a regular expression in each line of a file, and print the result:
sed 's/{{regular_expression}}/{{replace}}/' {{filename}}

# Replace all occurrences of an extended regular expression in a file, and print the result:
sed -r 's/{{regular_expression}}/{{replace}}/g' {{filename}}

# Replace all occurrences of a string in a file, overwriting the file (i.e. in-place):
sed -i 's/{{find}}/{{replace}}/g' {{filename}}

# Replace only on lines matching the line pattern:
sed '/{{line_pattern}}/s/{{find}}/{{replace}}/' {{filename}}

# Delete lines matching the line pattern:
sed '/{{line_pattern}}/d' {{filename}}

# Print the first 11 lines of a file:
sed 11q {{filename}}

# Apply multiple find-replace expressions to a file:
sed -e 's/{{find}}/{{replace}}/' -e 's/{{find}}/{{replace}}/' {{filename}}

# Replace separator / by any other character not used in the find or replace patterns, e.g. #:
sed 's#{{find}}#{{replace}}#' {{filename}}
```