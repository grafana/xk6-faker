import faker from "k6/x/faker";

console.log(faker.fake("{username}"));

export default function () {
  console.log(faker.fake("{username}"));
}
