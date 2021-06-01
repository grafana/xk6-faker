# xk6-faker

xk6-faker random fake data generator

The main generator class is [Faker](classes/faker.md).

```js
import { Faker } from "k6/x/faker"

let f = new Faker();
console.log(f.name());
```

Pass a random seed number to [Faker constructor](classes/faker.md#constructor) if you want to get deterministic random values.

```js
import { Faker } from "k6/x/faker"

let f = new Faker(1234);
console.log(f.name());
```

For easier usage, the module's default export is a Faker instance too, so you can use generator functions without instantiating the [Faker](classes/faker.md) class:

```js
import faker from "k6/x/faker"

console.log(faker.name())
```

You can pass random seed value in `XK6_FAKER_SEED` env if you want deterministic generated random values.

## Table of contents

### Classes

- [Faker](classes/faker.md)

### Interfaces

- [Address](interfaces/address.md)
- [Car](interfaces/car.md)
- [Contact](interfaces/contact.md)
- [CreditCard](interfaces/creditcard.md)
- [CreditCardOptions](interfaces/creditcardoptions.md)
- [Currency](interfaces/currency.md)
- [Job](interfaces/job.md)
- [Person](interfaces/person.md)
