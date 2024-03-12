package faker_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/szkiba/xk6-faker/faker"
)

func TestGetFuncLookups(t *testing.T) {
	t.Parallel()

	funcs := faker.GetFuncLookups()

	require.Len(t, funcs, 317)
	require.Contains(t, funcs, "intRange")
	require.Contains(t, funcs, "randomString")
}

func TestGetCategoryFuncs(t *testing.T) {
	t.Parallel()

	categories := faker.GetCategoryFuncs()

	require.Len(t, categories, 37)
	require.Contains(t, categories, "zen")
	require.Contains(t, categories, "number")

	require.Contains(t, categories["zen"], "intRange")
	require.Contains(t, categories["number"], "intRange")
	require.Same(t, categories["zen"]["intRange"], categories["number"]["intRange"])
}
