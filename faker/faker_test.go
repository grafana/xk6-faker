package faker_test

import (
	"testing"

	"github.com/dop251/goja"
	"github.com/stretchr/testify/require"
	"github.com/szkiba/xk6-faker/faker"
)

func Test_Constructor(t *testing.T) {
	t.Parallel()

	vm := goja.New()

	require.NoError(t, vm.Set("Faker", faker.Constructor))

	val, err := vm.RunString("new Faker()")

	require.NoError(t, err)

	_, ok := goja.AssertFunction(val.ToObject(vm).Get("call"))

	require.True(t, ok, "has call() method")

	val, err = vm.RunString("new Faker(11)")

	require.NoError(t, err)

	_, ok = goja.AssertFunction(val.ToObject(vm).Get("call"))

	require.True(t, ok, "has call() method")
}

func Test_New(t *testing.T) {
	t.Parallel()

	vm := goja.New()

	var val *goja.Object

	require.NotPanics(t, func() {
		val = faker.New(0, vm)
	})

	_, ok := goja.AssertFunction(val.ToObject(vm).Get("call"))

	require.True(t, ok, "has call() method")
}

func Test_Faker_call(t *testing.T) {
	t.Parallel()

	vm := goja.New()

	require.NoError(t, vm.Set("Faker", faker.Constructor))

	val, err := vm.RunString("new Faker(11).call('username')")

	require.NoError(t, err)
	require.Equal(t, "Abshire5538", val.String())

	_, err = vm.RunString("new Faker(11).call('no such function')")

	require.Error(t, err)

	_, err = vm.RunString("new Faker(11).call()")

	require.Error(t, err)
}

func Test_Faker_no_parameter(t *testing.T) {
	t.Parallel()

	vm := goja.New()

	require.NoError(t, vm.Set("Faker", faker.Constructor))

	val, err := vm.RunString("new Faker(11).zen.username()")

	require.NoError(t, err)
	require.Equal(t, "Abshire5538", val.String())
}

func Test_Faker_int_parameters(t *testing.T) {
	t.Parallel()

	vm := goja.New()

	require.NoError(t, vm.Set("Faker", faker.Constructor))

	val, err := vm.RunString("new Faker(11).zen.intRange(2,19)")

	require.NoError(t, err)
	require.Equal(t, int64(5), val.ToInteger())
}

func Test_Faker_string_array_parameter(t *testing.T) {
	t.Parallel()

	vm := goja.New()

	require.NoError(t, vm.Set("Faker", faker.Constructor))

	val, err := vm.RunString("new Faker(11).zen.randomString(['foo', 'bar', 'dummy'])")

	require.NoError(t, err)
	require.Equal(t, "foo", val.String())
}

func Test_Faker_int_array_parameter(t *testing.T) {
	t.Parallel()

	vm := goja.New()

	require.NoError(t, vm.Set("Faker", faker.Constructor))

	val, err := vm.RunString("new Faker(11).zen.randomInt([1,4,2,6])")

	require.NoError(t, err)
	require.Equal(t, int64(2), val.ToInteger())
}
