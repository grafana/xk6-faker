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
	"context"
	"os"
	"strconv"

	"github.com/sirupsen/logrus"
	"go.k6.io/k6/js/common"
	"go.k6.io/k6/js/modules"
)

const envSEED = "XK6_FAKER_SEED"

// Register the extensions on module initialization.
func init() {
	modules.Register("k6/x/faker", New())
}

type Module struct {
	*Faker
}

func New() *Module {
	return &Module{Faker: newFaker(seed())}
}

func (m *Module) XFaker(ctxPtr *context.Context, seed int64) (interface{}, error) {
	rt := common.GetRuntime(*ctxPtr)

	faker := newFaker(seed)

	return common.Bind(rt, faker, ctxPtr), nil
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
