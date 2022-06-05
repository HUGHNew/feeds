%{
  // 定义段
  #include<stdio.h>
%}
/* 可以定义变量 */
ALPHA [a-zA-Z]

/* 用两个 % 分割段 下一个段为规则段 指定规则和行为 */
%%
{ALPHA} puts("匹配到字母");
[0-9]+ puts("匹配到数字串");
%%
int main(int argc, char **argv)
{
  printf("Lexer Begin\n");
  yylex(); // 执行到结束或者 return
  printf("Lexer End\n");
}