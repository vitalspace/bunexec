package main

/*
#include <stdlib.h>
#include <string.h>
*/
import "C"
import (
	"os"
)

func ch(str string) *C.char {
	return C.CString(str)
}

func str(ch *C.char) string {
	return C.GoString(ch)
}

//export FileExists
func FileExists(st *C.char) C.int {
	_, err := os.Stat(str(st))
	if os.IsNotExist(err) {
		return 0
	}
	return 1
}

//export CreateFile
func CreateFile(name *C.char, content *C.char) C.int {
	file, err := os.Create(str(name))

	if err != nil {
		return 1
	}

	defer file.Close()

	if content != nil {
		_, err = file.WriteString(str(content))
		if err != nil {
			return 2
		}
	}

	return 0
}

func main() {}
