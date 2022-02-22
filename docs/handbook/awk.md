# awk

`awk '{match action[;actions]} file'`
`awk -f _.awk file`

## script

action:`BEGIN{}{__body__}END{}`

BEGIN块在开始前执行

END块在结束后执行

按分割的列读取
- `$0` 整行
- `$n` 第n列 `$10`

### match

三种匹配方式
- 列匹配 : **`ColOpVal`** `$2~100` 列|运算符|值
- 正则匹配 : `/pattern/`
- `match` 函数 : `match(value,/pattern/,storage)`
  - 使用`()`匹配子项
  - 使用`storage[n]`取值


#### operations

| 操作符 | 含义        |
| :----: | ----------- |
|   !    | Not         |
|   &&   | And         |
|  \|\|  | Or          |
|   ==   | Equal       |
|   !=   | Not equal   |
|   >    | Greater     |
|   <    | Litter      |
|   >=   | Ge          |
|   <=   | Le          |
|   ~    | Regex Match |
|   !~   | Not Match   |

### action

主要使用 `print`

条件 `if(match){}`

控制
- `next` : 跳过当前记录 
- `exit` : 跳到END

#### inner variable

| 变量名   | 含义                                          |
| -------- | --------------------------------------------- |
| ARGC     | 命令行变元个数                                |
| ARGV     | 命令行变元数组                                |
| FILENAME | 当前输入文件名                                |
| FNR      | 当前文件中的记录号                            |
| FS       | 输入域分隔符，默认为一个空格(-F)                |
| OFS      | 输出域分隔符                                  |
| RS       | 输入记录分隔符                                |
| NF       | 当前记录里域个数 number of field              |
| NR       | 到目前为止记录数 number of the current record |
| ORS      | 输出记录分隔符                                |

### args

命令行参数

| options | meanings |
| :---: | --- |
| -F | 设置内置变量`FS`值 |
| -v | 设置变量 `-v var=0` |
| -f | 从脚本文件中读取指令 |

## tldr

```bash
# Print the fifth column (a.k.a. field) in a space-separated file:
awk '{print $5}' {{filename}}

# Print the second column of the lines containing "foo" in a space-separated file:
awk '/{{foo}}/ {print $2}' {{filename}}

# Print the last column of each line in a file, using a comma (instead of space) as a field separator:
awk -F ',' '{print $NF}' {{filename}}

# Sum the values in the first column of a file and print the total:
awk '{s+=$1} END {print s}' {{filename}}

# Print every third line starting from the first line:
awk 'NR%3==1' {{filename}}

# Print different values based on conditions:
awk '{if ($1 == "foo") print "Exact match foo"; else if ($1 ~ "bar") print "Partial match bar"; else print "Baz"}' {{filename}}

# Print all lines where the 10th column value equals the specified value :
awk '($10 == value)'

# Print all the lines which the 10th column value is between a min and a max :
awk '($10 >= min_value && $10 <= max_value)'
```

## overview

![awk-manual](https://gitee.com/HughNew/Photos/raw/master/Shell/awk.png)