package faker

import (
	"errors"
	"math/rand"
	"testing"

	"github.com/brianvoe/gofakeit/v6"
	"github.com/dop251/goja"
	"github.com/stretchr/testify/require"
)

func Test_faker_dynamic(t *testing.T) {
	t.Parallel()

	faker := newFaker(11, goja.New())

	// Delete
	require.False(t, faker.Delete("foo"))

	// Get
	require.False(t, goja.IsUndefined(faker.Get("call")))
	require.True(t, goja.IsUndefined(faker.Get("no such category")))
	require.False(t, goja.IsUndefined(faker.Get("zen")))

	// Has
	require.False(t, faker.Has("zen"))

	// Keys
	require.NotEmpty(t, faker.Keys())

	// Set
	require.False(t, faker.Set("foo", faker.runtime.ToValue(42)))
}

func Test_faker_invoke(t *testing.T) {
	t.Parallel()

	faker := newFaker(11, goja.New())

	info, ok := lookupFunc("username")

	require.True(t, ok)

	val := faker.invoke(info, goja.FunctionCall{This: goja.Undefined()})

	require.False(t, goja.IsUndefined(val))

	clone := *info
	info = &clone

	info.Generate = func(_ *rand.Rand, _ *gofakeit.MapParams, _ *gofakeit.Info) (any, error) {
		return nil, errors.ErrUnsupported
	}

	require.Panics(t, func() {
		faker.invoke(info, goja.FunctionCall{This: goja.Undefined()})
	})
}

func Test_newCategory(t *testing.T) {
	t.Parallel()

	faker := newFaker(11, goja.New())

	require.Nil(t, newCategory(faker, "no such category"))
	require.NotNil(t, newCategory(faker, "zen"))
}

func Test_category_dynamic(t *testing.T) {
	t.Parallel()

	category := newCategory(newFaker(11, goja.New()), "zen")

	// Delete
	require.False(t, category.Delete("foo"))

	// Get
	require.False(t, goja.IsUndefined(category.Get("username")))
	require.True(t, goja.IsUndefined(category.Get("no such function")))

	// Has
	require.False(t, category.Has("username"))

	// Keys
	require.Empty(t, category.Keys())

	// Set
	require.False(t, category.Set("foo", category.faker.runtime.ToValue(42)))
}

func Test_faker_toMapParams(t *testing.T) {
	t.Parallel()

	runtime := goja.New()
	faker := newFaker(11, runtime)

	info, ok := lookupFunc("intRange")

	require.True(t, ok)

	var call goja.FunctionCall

	require.Panics(t, func() {
		faker.toMapParams(info, call)
	})

	call.Arguments = append(call.Arguments, runtime.ToValue(1), runtime.ToValue(42))

	mparams := faker.toMapParams(info, call)

	require.NotNil(t, mparams)
	require.Equal(t, &gofakeit.MapParams{"min": []string{"1"}, "max": []string{"42"}}, mparams)

	clone := *info
	clone.Params = nil
	clone.Params = append(clone.Params, info.Params...)
	info = &clone

	info.Params[1].Default = "24"

	call.Arguments = []goja.Value{runtime.ToValue(1)}

	mparams = faker.toMapParams(info, call)

	require.NotNil(t, mparams)
	require.Equal(t, &gofakeit.MapParams{"min": []string{"1"}, "max": []string{"24"}}, mparams)

	info.Params[0].Optional = true
	call.Arguments = nil

	mparams = faker.toMapParams(info, call)

	require.NotNil(t, mparams)
	require.Equal(t, &gofakeit.MapParams{"max": []string{"24"}}, mparams)
}
