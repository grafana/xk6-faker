// MIT License
//
// Copyright (c) 2021 Iván Szkiba
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

package faker

import (
	"os"
	"strconv"

	"github.com/dop251/goja"
	"github.com/sirupsen/logrus"
	"go.k6.io/k6/js/modules"
)

const envSEED = "XK6_FAKER_SEED"

// Register the extensions on module initialization.
func init() {
	modules.Register("k6/x/faker", New())
}

type (
	RootModule struct{}

	ModuleInstance struct {
		vu      modules.VU
		exports map[string]interface{}
	}
)

// Ensure the interfaces are implemented correctly.
var (
	_ modules.Instance = &ModuleInstance{}
	_ modules.Module   = &RootModule{}
)

// New returns a pointer to a new RootModule instance.
func New() *RootModule {
	return &RootModule{}
}

// NewModuleInstance implements the modules.Module interface and returns
// a new instance for each VU.
func (*RootModule) NewModuleInstance(vu modules.VU) modules.Instance {
	mi := &ModuleInstance{
		vu:      vu,
		exports: make(map[string]interface{}),
	}

	mi.exports["Faker"] = mi.newFaker

	return mi
}

// Exports implements the modules.Instance interface and returns the exports
// of the JS module.
func (mi *ModuleInstance) Exports() modules.Exports {
	return modules.Exports{
		Named:   mi.exports,
		Default: newFaker(mi.vu, seed()),
	}
}

func (mi *ModuleInstance) newFaker(call goja.ConstructorCall) *goja.Object {
	rt := mi.vu.Runtime()

	seed := call.Argument(0).ToInteger()

	return rt.ToValue(newFaker(mi.vu, seed)).ToObject(rt)
}

func seed() int64 {
	str := os.Getenv(envSEED)
	if str == "" {
		return 0
	}

	n, err := strconv.ParseInt(str, 10, 64)
	if err != nil {
		logrus.Error(err) // no module logger on k6 extension API...

		return 0
	}

	return n
}
