# defer

> 看上去就像是 try-catch 的 `finally`



## defer的机制

defer 调用时机
1. 函数return 之后
2. panic之后
3. 函数结束之后

:::tip defer & instant
1. 多个defer函数的调用可以看作栈式结构
2. defer的参数在声明时确定(并不会lazy)
:::

@[code](go/defer-time.go)

输出结果为
```
in defer2 2
in defer1 3
2
```



## reference

- [理解 Go defer](https://sanyuesha.com/2017/07/23/go-defer/)
