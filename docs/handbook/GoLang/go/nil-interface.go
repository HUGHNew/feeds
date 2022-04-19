package site

import (
	"bytes"
	"io"
)

const debug = true

func main() {
	var buf *bytes.Buffer
	if debug {
		buf = new(bytes.Buffer) // enable collection of output
	}
	f(buf) // NOTE: subtly incorrect!
	if debug {
		// ...use buf...
	}
}

// If out is non-nil, output will be written to it.
func f(out io.Writer) {
	// type of out : *bytes.Buffer
	// value of out : nil
	if out != nil {
		out.Write([]byte("done!\n")) // panic here maybe
	}
}
