# 使用LLVM

> [Ubuntu Focal 安装使用 LLVM](https://apt.llvm.org/)

```bash
wget -O - https://apt.llvm.org/llvm-snapshot.gpg.key|sudo apt-key add -
echo "deb [arch=amd64]  http://apt.llvm.org/focal/ llvm-toolchain-focal main"|sudo tee /etc/apt/sources.list.d/llvm.list > /dev/null
sudo apt update
# sudo apt install clang
# will install clang-15 on April 13rd, 2022
```

TODO