// @use k6/x/faker

import faker from "k6/x/faker";

export default function () {
  console.log(faker.person.firstName(), faker.person.lastName());
  console.log(faker.internet.email());
  console.log(faker.address.city(), faker.address.country());
}
