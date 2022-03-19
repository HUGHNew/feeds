# Python 执行命令行

参考
- <https://janakiev.com/blog/python-shell-commands/>
- [Python 多线程](https://www.cnblogs.com/chengd/articles/7770898.html)

```python
```

## os

### os.system

最直接的方式

```python
import os
code = os.system("pwd") # 得到执行脚本的路径
# 返回 return code
```

### [os.popen](https://docs.python.org/3/library/os.html#os.popen)

使用管道 可以获取输出内容

```python
import os
pipe = os.popen('echo Returned output')
output = pipe.read() # read from pipe
```
## subprocess

> `subprocess` 提供了执行新进程同时获取结果的强大功能

### [subprocess.run](https://docs.python.org/3/library/subprocess.html#subprocess.run)

since Python>=3.5

`subprocess.run(*popenargs, input:bytes=None, capture_output=False, timeout=None, check=False, **kwargs)`

```python
import subprocess
result = subprocess.run(['ls','-l']) # 阻塞 API
# result : CompletedProcess
# result.args
# result.returncode
# result.stdout/stderr 捕获的输出 即 caputer_output=True 时有用
result = subprocess.run(['ls','-l'],caputer_output=True)
result.stdout # bytes
```

### [subprocess.Popen](https://docs.python.org/3/library/subprocess.html#subprocess.Popen)

此类可以创造和管理执行的进程

```python
import subprocess
process = subprocess.Popen(['echo', 'More output'],
                     stdout=subprocess.PIPE, 
                     stderr=subprocess.PIPE) # 指定为 pipe 通过 communicate 读取
stdout, stderr = process.communicate() # 类型都是 bytes
```

指定文件作为输出

```python
with open('test.txt', 'w') as f:
    process = subprocess.Popen(['ls', '-l'], stdout=f)
```