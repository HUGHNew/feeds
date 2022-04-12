#include <iostream>
int test() {
  std::cout << "Before Main" << std::endl;
  return 1;
}
int v = test();
int val = []() {
  std::cout << "Lambda" << std::endl;
  return 0;
}();
int main() {
  std::cout << "main" << std::endl;
  return 0;
}
