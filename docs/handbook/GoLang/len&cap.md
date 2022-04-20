# string和Slice的长度

## string

@[code](go/string.go)

`string` 的长度就是字符串或者string切片的长度

## slice

@[code](go/slice.go)

`Slice` 的长度是切片长度 但是Slice的容量是切片开始位置到原Slice的容量结束位置

对于Slice切片的操作会作用于底层数组

更有趣的一些事情是 `append` 操作如果没有超过原Slice的容量的话 会直接修改值

如果超过了 就会重新分配(先检测 再分配赋值)

## len&cap

@[code](go/len.go)

各部分运行结果如下
```
len of v:8=8    v[1:]:7=8-1     v[1:3]:2=3-1
s len:8=8,cap:8=8
s[1:] len:7=8-1,cap:7=8-1
s[2:7] len:5=7-2,cap:6=8-2
```

```
raw data:9,addr:0xc0000c0078
in it v:9,addr:0xc0000c0078
s[2:7] len:5=7-2,cap:6=8-2
it len:6=7-2+1,cap:6=8-2
```

```
s: [1 2 3 4 10 11 12 9]
it: [4 10 11 12]
raw data:9,addr:0xc0000c0078
in it v:4,addr:0xc0000c0058
s: [1 2 3 4 10 11 12 9]
it: [12 20 21 22]
raw data:9,addr:0xc0000c0078
in it v:12,addr:0xc0000be020
```