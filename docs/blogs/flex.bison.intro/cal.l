%{
  #include"y.tab.h"
  #include<string.h>
%}

%option noyywrap
NUMS [0-9]+
%%
{NUMS}  {yylval.value = atoi(yytext); return NUM;}
"-"     {return SUB;}
"+"     {return ADD;}
"*"     {return MUL;}
"/"     {return DIV;}
"\n"    {return EOL;}
%%