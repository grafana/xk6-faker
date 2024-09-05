package faker

import (
	"bytes"
	_ "embed"
	"encoding/json"
	"fmt"
	"testing"

	"github.com/brianvoe/gofakeit/v6"
	"github.com/grafana/xk6-faker/faker"
	"github.com/grafana/xk6-faker/module"
	"github.com/stretchr/testify/require"
	"go.k6.io/k6/cmd"
	"go.k6.io/k6/cmd/tests"
	"go.k6.io/k6/js/modulestest"
)

//go:generate go run -tags codegen ./tools/codegen json ./functions.json
//go:embed functions.json
var functionsJSON []byte

func Test_functions_json(t *testing.T) {
	t.Parallel()

	var functions map[string]*gofakeit.Info

	require.NoError(t, json.Unmarshal(functionsJSON, &functions))
	require.Len(t, functions, len(faker.GetFuncLookups()))

	runtime := modulestest.NewRuntime(t)
	err := runtime.SetupModuleSystem(map[string]any{module.ImportPath: module.New()}, nil, nil)

	require.NoError(t, err)

	_, err = runtime.RunOnEventLoop(`
	let mod = require("` + module.ImportPath + `")
	let faker = new mod.Faker(11)
	`)

	require.NoError(t, err)

	lookups := faker.GetFuncLookups()

	for name, info := range functions {
		require.Contains(t, lookups, name)

		val, err := runtime.RunOnEventLoop("typeof faker.zen." + name)
		require.NoError(t, err)
		require.Equal(t, "function", val.String())

		val, err = runtime.RunOnEventLoop(fmt.Sprintf("typeof faker.%s.%s", info.Category, name))
		require.NoError(t, err)
		require.Equal(t, "function", val.String())
	}
}

//go:generate go run -tags codegen ./tools/codegen test ./functions-test.js
//go:embed functions-test.js
var testJS []byte

func Test_run_k6_test(t *testing.T) {
	if testing.Short() {
		t.Skip()
	}

	t.Parallel()

	ts := tests.NewGlobalTestState(t)

	ts.CmdArgs = []string{"k6", "run", "--quiet", "-"}
	ts.Stdin = bytes.NewBuffer(testJS)
	cmd.ExecuteWithGlobalState(ts.GlobalState)

	if stdout := ts.Stdout.String(); len(stdout) != 0 {
		t.Log(stdout)
	}

	if stderr := ts.Stderr.String(); len(stderr) != 0 {
		t.Error(stderr)
	}
}

//go:generate go run -tags codegen ./tools/codegen ts ./index.d.ts
