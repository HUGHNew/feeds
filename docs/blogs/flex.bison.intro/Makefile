# yacc/bison flags
YFLAGS=-d
cal: lex.c
lex.c: cal.l
	lex -t $< > $@
cal.c cal.h:cal.y

demo: demo.c
demo.c: demo.l

clean:
	-rm cal
	-rm lex.*
	-rm cal.tab.* cal.c y.tab.h
	-rm demo.c demo
