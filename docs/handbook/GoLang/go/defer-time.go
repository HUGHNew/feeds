import (
	"fmt"
)

func incr(v int) int {
	defer func() {
		fmt.Println("in defer1", v)
		v++
	}()
	defer func() {
		fmt.Println("in defer2", v)
		v++
	}()
	v++
	return v
}
func main() {
	fmt.Println(incr(1))
}
