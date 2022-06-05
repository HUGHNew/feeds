%{
  #include<stdio.h>
  #include<stdlib.h>
  void yyerror(const char*);
%}
%union{
  double value;
  char ch;
  /* 定义节点类型  */
}

%token<value> NUM /* 定义终结符类型 */
%token EOL ADD SUB DIV MUL /* 非定义类型则默认为int 无法获取到值 */

%type<value> term
%%
cal_list : cal EOL cal_list {/* 表达式后的符号 $$表示cal_list $1-$n依次表示cal EOL cal_list  */}
  | /*cal_list -> cal EOL cal_list | empty*/
  ; /* 分号作为产生式的结束符号  */
cal : {/* 空匹配 相当于empty或者\epsilon */ printf("> ");  }
  | term ADD term{ printf("= %lf\n> ",$1+$3); }
  | term SUB term{ printf("= %lf\n> ",$1-$3); }
  | term{ printf("= %lf\n> ",$1); }
  ;
term: NUM MUL NUM { $$ = $1 * $3; }
  | NUM DIV NUM { $$ = $1 / $3; }
  | NUM { $$=$1; }
  ;
%%
int main(){
  printf("> ");
  yyparse();
  return 0;
}
void yyerror(const char*msg){
  fprintf(stderr,"%s\n",msg);
}