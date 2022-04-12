#include <iostream>
#include <string>
static std::ostream& println(std::string const& msg) {
  return std::cout << msg << std::endl;
}
class Int {
  int* v;

 public:
  Int(int val) : v(new int(val)) { println("ctor"); }
  Int(Int const& val) : v(new int(*val.v)) { println("ref ctor"); }
  Int(Int&& val) : v(val.v) {
    val.v = nullptr;
    println("rref ctor");
  }
  void printThis()const{
    printf("%p\n",this);
  }
  void printInt()const{
    printf("%p\n",this->v);
  }
  Int& operator=(const Int& iv) {
    v = new int(*iv.v);
    println("copy");
    return *this;
  }
  Int& operator=(Int&& iv) {
    v = iv.v;
    iv.v = nullptr;
    println("r copy");
    return *this;
  }
  ~Int(){
    if(v)delete v;
    println("dtor");
  }
};
Int ret(){Int a(0); return a; }
void xvalue(){
  /**
   * #1 Int a(0) ctor
   * #2 return a;-> 一个临时对象 rref ctor
   * #1 dctor
   * #3 a 移动构造  rref ctor
   * #2 dctor
  */
  Int a = ret();
  println("\tBefore b");
  Int&& b = ret(); // 延续返回的临时对象的生命周期
  println("\tBefore End");
}
void printThis(){
  Int&& a = [](){Int a(0);a.printThis();return a;}();
  println("");
  a.printThis();
}
void printInt(){
  Int&& a = [](){Int a(0);a.printInt();return a;}();
  println("");
  a.printInt();
}
void move(){
  Int a(42);
  a.printInt();
  Int b = std::move(a);
  a.printInt();
  b.printInt();
}
#include<vector>
int main() {
  move();
  return 0;
}