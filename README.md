# xk6-faker

A k6 extension for random fake data generation.

This module is mostly just an interface to go faker library. The underlying implementation is https://github.com/brianvoe/gofakeit.

Built for [k6](https://go.k6.io/k6) using [xk6](https://github.com/k6io/xk6).

## Usage

Import an entire module's contents:
```JavaScript
import faker from "k6/x/faker";
```

Import a single export from a module:
```JavaScript
import { Faker } from "k6/x/faker";
```

## API

The main generator class is [Faker](docs/classes/faker.md). For easier usage, the module's default export is a Faker instance too, so you can use generator functions without instantiating the Faker class:

```js
import faker from "k6/x/faker"

console.log(faker.name())
```

You can pass random seed value in `XK6_FAKER_SEED` env if you want deterministic generated random data.

For complete API documentation click [here](docs/README.md)!

## Build

To build a `k6` binary with this extension, first ensure you have the prerequisites:

- [Go toolchain](https://go101.org/article/go-toolchain.html)
- Git

Then:

1. Install `xk6`:
  ```bash
  $ go install github.com/k6io/xk6/cmd/xk6@latest
  ```

2. Build the binary:
  ```bash
  $ xk6 build --with github.com/szkiba/xk6-faker@latest
  ```
