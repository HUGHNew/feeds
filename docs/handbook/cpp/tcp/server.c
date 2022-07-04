#include <arpa/inet.h>
#include <netinet/in.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <unistd.h>
void worker(int client){
  // 向客户端发送数据
  char str[] = "Hello World!";
  write(client, str, sizeof(str));

  // 关闭套接字
  close(client);
}
void serve() {
  const int port = 12345;
  int serv_sock = socket(AF_INET, SOCK_STREAM, 0);  // tcp server socket

  // 将套接字和IP、端口绑定
  struct sockaddr_in serv_addr;
  memset(&serv_addr, 0, sizeof(serv_addr));  // 每个字节都用0填充
  serv_addr.sin_family = AF_INET;            // 使用IPv4地址
  serv_addr.sin_addr.s_addr = inet_addr("127.0.0.1");  // 具体的IP地址
  serv_addr.sin_port = htons(port);                    // 端口
  bind(serv_sock, (struct sockaddr*)&serv_addr, sizeof(serv_addr));

  // 进入监听状态，等待用户发起请求
  listen(serv_sock, 20);

  // 接收客户端请求
  struct sockaddr_in clnt_addr;
  socklen_t clnt_addr_size = sizeof(clnt_addr);
  int clnt_sock =
      accept(serv_sock, (struct sockaddr*)&clnt_addr, &clnt_addr_size);

  worker(clnt_sock);

  // 关闭套接字
  close(serv_sock);
}
int main() {
  //创建套接字
  serve();
  return 0;
}