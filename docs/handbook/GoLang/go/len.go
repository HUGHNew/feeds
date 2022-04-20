func main() {
	var v = "12345678"
	fmt.Printf("len of v:%d=8\tv[1:]:%d=8-1\tv[1:3]:%d=3-1\n", len(v), len(v[1:]), len(v[1:3]))
	var s = []int{1, 2, 3, 4, 5, 6, 7, 8}
	fmt.Printf("s len:%d=8,cap:%d=8\n", len(s), cap(s))
	fmt.Printf("s[1:] len:%d=8-1,cap:%d=8-1\n", len(s[1:]), cap(s[1:]))
	fmt.Printf("s[2:7] len:%d=7-2,cap:%d=8-2\n", len(s[2:7]), cap(s[2:7]))
	// how about append the slice of Slice
	it := append(s[2:7], 9)
	fmt.Printf("raw data:%d,addr:%p\nin it v:%d,addr:%p\n", s[7], &s[7], it[5], &it[5])
	fmt.Printf("s[2:7] len:%d=7-2,cap:%d=8-2\n", len(s[2:7]), cap(s[2:7]))
	fmt.Printf("it len:%d=7-2+1,cap:%d=8-2\n", len(it), cap(it))
	// something more interesting
	it = append(s[3:4], 10, 11, 12)
	fmt.Println("s:", s)
	fmt.Println("it:", it)
	fmt.Printf("raw data:%d,addr:%p\nin it v:%d,addr:%p\n", s[7], &s[7], it[0], &it[0])
	it = append(s[6:7], 20, 21, 22)
	fmt.Println("s:", s)
	fmt.Println("it:", it)
	fmt.Printf("raw data:%d,addr:%p\nin it v:%d,addr:%p\n", s[7], &s[7], it[0], &it[0])
}