func main() {
	var local int
	var nlocal = new(int)
	fmt.Printf("%p,%p", &local, nlocal) // 0xc0000bc000,0xc0000bc008
}