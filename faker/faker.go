// Package faker contains Faker class implementation for goja.
package faker

import (
	"math/rand"

	"github.com/brianvoe/gofakeit/v6"
	"github.com/dop251/goja"
	"lukechampine.com/frand"
)

// Constructor is a Faker class constructor.
func Constructor(call goja.ConstructorCall, runtime *goja.Runtime) *goja.Object {
	seed := call.Argument(0).ToInteger()

	return runtime.NewDynamicObject(newFaker(seed, runtime))
}

// New calls Faker constructor and returns new Faker object.
func New(seed int64, runtime *goja.Runtime) *goja.Object {
	return Constructor(
		goja.ConstructorCall{
			This:      runtime.NewObject(),
			Arguments: []goja.Value{runtime.ToValue(seed)},
		},
		runtime,
	)
}

// faker represents JavaScript Faker class.
type faker struct {
	rand    *rand.Rand
	runtime *goja.Runtime
}

// newFaker creates new Faker instance.
func newFaker(seed int64, runtime *goja.Runtime) *faker {
	src := frand.NewSource()

	if seed != 0 {
		src.Seed(seed)
	}

	return &faker{rand: rand.New(src), runtime: runtime} //nolint:gosec
}

// Delete implements goja.DynamicObject.
func (f *faker) Delete(_ string) bool {
	return false
}

// Get implements goja.DynamicObject.
func (f *faker) Get(key string) goja.Value {
	if key == "call" {
		return f.runtime.ToValue(f.call)
	}

	category := newCategory(f, key)
	if category == nil {
		return goja.Undefined()
	}

	return f.runtime.NewDynamicObject(category)
}

// Has implements goja.DynamicObject.
func (f *faker) Has(_ string) bool {
	return false
}

// Keys implements goja.DynamicObject.
func (f *faker) Keys() []string {
	return getCategoryNames()
}

// Set implements goja.DynamicObject.
func (f *faker) Set(_ string, _ goja.Value) bool {
	return false
}

// call invokes faker function by name.
// The faker function name is the first parameter, the rest of parameters passed to function.
func (f *faker) call(call goja.FunctionCall) goja.Value {
	function := call.Argument(0)

	if goja.IsUndefined(function) {
		panic(f.runtime.NewTypeError(function))
	}

	info, found := lookupFunc(function.ToString().String())
	if !found {
		panic(f.runtime.NewTypeError(function))
	}

	call.Arguments = call.Arguments[1:]

	return f.invoke(info, call)
}

func (f *faker) toMapParams(info *gofakeit.Info, call goja.FunctionCall) *gofakeit.MapParams {
	if len(info.Params) == 0 {
		return nil
	}

	params := gofakeit.NewMapParams()

	for idx, param := range info.Params {
		val := call.Argument(idx)
		if goja.IsUndefined(val) {
			if len(param.Default) != 0 {
				params.Add(param.Field, param.Default)
				continue
			}

			if param.Optional {
				continue
			}

			panic(f.runtime.NewTypeError("missing parameter: %s", param.Field))
		}

		var arr []string

		if f.runtime.ExportTo(val, &arr) == nil {
			(*params)[param.Field] = arr
		} else {
			params.Add(param.Field, val.String())
		}
	}

	return params
}

func (f *faker) invoke(info *gofakeit.Info, call goja.FunctionCall) goja.Value {
	params := f.toMapParams(info, call)

	val, err := info.Generate(f.rand, params, info)
	if err != nil {
		panic(f.runtime.NewGoError(err))
	}

	return f.runtime.ToValue(val)
}

type category struct {
	faker *faker
	funcs map[string]*gofakeit.Info
}

func newCategory(faker *faker, name string) *category {
	funcs, ok := lookupCategory(name)
	if !ok {
		return nil
	}

	return &category{faker: faker, funcs: funcs}
}

// Delete implements goja.DynamicObject.
func (c *category) Delete(_ string) bool {
	return false
}

// Get implements goja.DynamicObject.
func (c *category) Get(key string) goja.Value {
	info, ok := c.funcs[key]
	if !ok {
		return goja.Undefined()
	}

	return c.faker.runtime.ToValue(func(call goja.FunctionCall) goja.Value {
		return c.faker.invoke(info, call)
	})
}

// Has implements goja.DynamicObject.
func (c *category) Has(_ string) bool {
	return false
}

// Keys implements goja.DynamicObject.
func (c *category) Keys() []string {
	return []string{}
}

// Set implements goja.DynamicObject.
func (c *category) Set(_ string, _ goja.Value) bool {
	return false
}

//go:generate go run -tags codegen ../tools/codegen json ../functions.json
