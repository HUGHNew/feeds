#include<type_traits>
#include<bits/move.h>
int main(){
  int i = 0;
  int* j=&i;
  int n[10];
  decltype(i=0); // int& // 但不会赋值(Clang)
  // rule 1
  static_assert(std::is_same_v<decltype(i = 0), int&>);
  static_assert(std::is_same_v<decltype(n[5]), int&>);
  static_assert(std::is_same_v<decltype(*j), int&>);
  static_assert(std::is_same_v<decltype(static_cast<int&&>(i)), int&&>);
  static_assert(std::is_same_v<decltype(i++), int>);
  static_assert(std::is_same_v<decltype(++i), int&>);

  // rule 2
  static_assert(std::is_same_v<decltype(std::move(i)), int&&>); // xvalue
  static_assert(std::is_same_v<decltype(0, i), int&>); // comma/lvalue
  static_assert(std::is_same_v<decltype(i, 0), int>); // rvalue
  static_assert(std::is_same_v<decltype("hello world"), const char(&)[12]>); // lvalue

  // rule 3
  static_assert(std::is_same_v<decltype((i)), int&>);
}