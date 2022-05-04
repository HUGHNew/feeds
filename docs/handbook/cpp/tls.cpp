#include<iostream>
#include<thread>
thread_local int count = 0;
void incr(const char*tag){
  ++count;
  std::cout<<"tag: "<<tag<<" count: "<<count<<std::endl;
}
int main(){
  std::thread([](const char*s){
    incr(s);
    incr(s);
    incr(s);
  },"thread-1").join();
  std::thread([](const char*s){
    incr(s);
    incr(s);
    incr(s);
  },"thread-2").join();
  return 0;
}