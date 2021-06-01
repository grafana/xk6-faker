# xk6-faker

A k6 extension for random fake data generation.

Altought there is several good JavaScript fake data generator, but using these as remote module in k6 tests has several disadvantages (download size, memory usage, startup time, etc). The *xk6-faker* implemented as a golang extension, so tests starts faster and use less memory. The price is a little bit smaller feature set compared with popular JavaScript fake data generators.

The underlying implementation is https://github.com/brianvoe/gofakeit.

Built for [k6](https://go.k6.io/k6) using [xk6](https://github.com/k6io/xk6).

## Usage

The main generator class is [Faker](docs/classes/faker.md).

```js
import { Faker } from "k6/x/faker"

let f = new Faker();
console.log(f.name());
```

Pass a random seed number to [Faker constructor](docs/classes/faker.md#constructor) if you want to get deterministic random values.

```js
import { Faker } from "k6/x/faker"

let f = new Faker(1234);
console.log(f.name());
```

For easier usage, the module's default export is a Faker instance too, so you can use generator functions without instantiating the [Faker](docs/classes/faker.md) class:

```js
import faker from "k6/x/faker"

console.log(faker.name())
```

You can pass random seed value in `XK6_FAKER_SEED` env if you want deterministic generated random values.

## API

General purpose generator functions:

 - [lexify(str)](docs/classes/faker.md#lexify) will replace `?` with random generated letters
 - [numerify(str)](docs/classes/faker.md#numerify) will replace `#` with random numerical values
 - [generate(str)](docs/classes/faker.md#generate) will replace values within `{}` with generator function return values

For complete generated API documentation click [here](docs/README.md)!

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
