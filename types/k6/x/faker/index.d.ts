/**
 * **Random fake data generator for k6.**
 *
 * Altought there is several good JavaScript fake data generator,
 * but using these in [k6](https://k6.io) tests has several disadvantages (download size, memory usage, startup time, etc).
 * The xk6-faker implemented as a golang extension, so tests starts faster and use less memory.
 * The price is a little bit smaller feature set compared with popular JavaScript fake data generators.
 *
 * For convenience, the xk6-faker API resembles the popular [Faker.js](https://fakerjs.dev/).
 * The category names and the generator function names are often different
 * (due to the [underlying go faker library](https://github.com/brianvoe/gofakeit)),
 * but the way of use is similar.
 *
 * @example
 * For convenient use, the default export of the module is a Faker instance,
 * it just needs to be imported and it is ready for use.
 *
 * ```ts
 * import faker from "k6/x/faker"
 *
 * export default function() {
 *   console.log(faker.person.firstName())
 * }
 *
 * // prints a random first name
 * ```
 * For a reproducible test run, a random seed value can be passed to the constructor of the Faker class.
 *
 * ```ts
 * import { Faker } from "k6/x/faker"
 *
 * const faker = new Faker(11)
 *
 * export default function() {
 *   console.log(faker.person.firstName())
 * }
 * ```
 * **Output** (formatted as JSON value)
 * ```json
 * "Josiah"
 * ```
 * The reproducibility of the test can also be achieved using the default Faker instance,
 * if the seed value is set in the `XK6_FAKER_SEED` environment variable.
 * ```bash
 * k6 run --env XK6_FAKER_SEED=11 script.js
 * ```
 * then
 * ```ts
 * import faker from "k6/x/faker"
 *
 * export default function() {
 *   console.log(faker.person.firstName())
 * }
 * ```
 * **Output** (formatted as JSON value)
 * ```json
 * "Josiah"
 * ```
 *
 * @module faker
 */
export as namespace faker;

/**
 * This is Faker's main class containing all generators that can be used to generate data.
 *
 * Please have a look at the individual generators and methods for more information.
 *
 * @example
 * ```ts
 * import { Faker } from "k6/x/faker"
 *
 * const faker = new Faker(11)
 *
 * export default function() {
 *   console.log(faker.person.firstName())
 * }
 * ```
 * **Output** (formatted as JSON value)
 * ```json
 * "Josiah"
 * ```
 */
export declare class Faker {
  /**
   * Creates a new instance of Faker.
   *
   * Optionally, the value of the random seed can be set as a constructor parameter.
   * This is intended to allow for consistent values in a tests,
   * so you might want to use hardcoded values as the seed.
   *
   * Please note that generated values are dependent on both the seed and the number
   * of calls that have been made.
   *
   * Setting seed to 0 (or omitting it) will use seed derived from system entropy.
   *
   * @param seed random seed value for deterministic generator
   *
   * @example
   * ```ts
   * const consistentFaker = new Faker(11)
   * const semiRandomFaker = new Faker()
   * ```
   */
  constructor(seed?: number);

  /**
   * Call fake data generator function based on function name.
   *
   * @param func the name of the generator function to be called
   * @param args parameters for the generator function to be called
   */
  call(func: string, ...args: unknown[]): unknown;


  /**
   * Generator to generate addresses and locations.
   */
  readonly address: Address;

  /**
   * Generator to generate animals.
   */
  readonly animal: Animal;

  /**
   * Generator to generate application related entries.
   */
  readonly app: App;

  /**
   * Generator to generate beer related entries.
   */
  readonly beer: Beer;

  /**
   * Generator to generate book related entries.
   */
  readonly book: Book;

  /**
   * Generator to generate car related entries.
   */
  readonly car: Car;

  /**
   * Generator to generate celebrities.
   */
  readonly celebrity: Celebrity;

  /**
   * Generator to generate colors.
   */
  readonly color: Color;

  /**
   * Generator to generate company related entries.
   */
  readonly company: Company;

  /**
   * Generator to generate emoji related entries.
   */
  readonly emoji: Emoji;

  /**
   * Generator to generate various error codes and messages.
   */
  readonly error: Error;

  /**
   * Generator to generate file related entries.
   */
  readonly file: File;

  /**
   * Generator to generate finance related entries.
   */
  readonly finance: Finance;

  /**
   * Generator to generate food related entries.
   */
  readonly food: Food;

  /**
   * Generator to generate game related entries.
   */
  readonly game: Game;

  /**
   * Generator to generate hacker/IT words and phrases.
   */
  readonly hacker: Hacker;

  /**
   * Generator to generate hipster words, phrases and paragraphs.
   */
  readonly hipster: Hipster;

  /**
   * Generator to generate internet related entries.
   */
  readonly internet: Internet;

  /**
   * Generator to generate language related entries.
   */
  readonly language: Language;

  /**
   * Generator to generate minecraft related entries.
   */
  readonly minecraft: Minecraft;

  /**
   * Generator to generate movie related entries.
   */
  readonly movie: Movie;

  /**
   * Generator to generate numbers.
   */
  readonly number: Number;

  /**
   * Generator to generate payment related entries.
   */
  readonly payment: Payment;

  /**
   * Generator to generate people's personal information.
   */
  readonly person: Person;

  /**
   * Generator to generate product related entries.
   */
  readonly product: Product;

  /**
   * Generator to generate strings.
   */
  readonly string: String;

  /**
   * Generator to generate time and date.
   */
  readonly time: Time;

  /**
   * Generator to generate words and sentences.
   */
  readonly word: Word;

  /**
   * Generator with all generator functions for convenient use.
   */
  readonly zen: Zen;
}

/** Default Faker instance. */
declare const faker: Faker;

/** Default Faker instance */
export default faker;

/**
 * Generator to generate addresses and locations.
 */
export declare interface Address {
  /**
   * Residential location including street, city, state, country and postal code.
   * @returns a random address
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.address.address())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {"Address":"53883 Villageborough, San Bernardino, Kentucky 56992","Street":"53883 Villageborough","City":"San Bernardino","State":"Kentucky","Zip":"56992","Country":"United States of America","Latitude":11.29359,"Longitude":-145.577493}
   * ```
   */
  address(): Record<string,unknown>;

  /**
   * Part of a country with significant population, often a central hub for culture and commerce.
   * @returns a random city
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.address.city())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Hialeah"
   * ```
   */
  city(): string;

  /**
   * Nation with its own government and defined territory.
   * @returns a random country
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.address.country())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Togo"
   * ```
   */
  country(): string;

  /**
   * Shortened 2-letter form of a country's name.
   * @returns a random country abbreviation
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.address.countryAbbreviation())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "TG"
   * ```
   */
  countryAbbreviation(): string;

  /**
   * Geographic coordinate specifying north-south position on Earth's surface.
   * @returns a random latitude
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.address.latitude())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 11.394086
   * ```
   */
  latitude(): number;

  /**
   * Latitude number between the given range (default min=0, max=90).
   * @returns a random latitude range
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.address.latitudeRange(13,13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 13
   * ```
   */
  latitudeRange(min: number, max: number): number;

  /**
   * Geographic coordinate indicating east-west position on Earth's surface.
   * @returns a random longitude
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.address.longitude())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 22.788172
   * ```
   */
  longitude(): number;

  /**
   * Longitude number between the given range (default min=0, max=180).
   * @returns a random longitude range
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.address.longitudeRange(13,13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 13
   * ```
   */
  longitudeRange(min: number, max: number): number;

  /**
   * Governmental division within a country, often having its own laws and government.
   * @returns a random state
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.address.state())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Massachusetts"
   * ```
   */
  state(): string;

  /**
   * Shortened 2-letter form of a country's state.
   * @returns a random state abbreviation
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.address.stateAbbreviation())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "AA"
   * ```
   */
  stateAbbreviation(): string;

  /**
   * Public road in a city or town, typically with houses and buildings on each side.
   * @returns a random street
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.address.street())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "53883 Villageborough"
   * ```
   */
  street(): string;

  /**
   * Name given to a specific road or street.
   * @returns a random street name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.address.streetName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Fall"
   * ```
   */
  streetName(): string;

  /**
   * Numerical identifier assigned to a street.
   * @returns a random street number
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.address.streetNumber())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "25388"
   * ```
   */
  streetNumber(): string;

  /**
   * Directional or descriptive term preceding a street name, like 'East' or 'Main'.
   * @returns a random street prefix
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.address.streetPrefix())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "West"
   * ```
   */
  streetPrefix(): string;

  /**
   * Designation at the end of a street name indicating type, like 'Avenue' or 'Street'.
   * @returns a random street suffix
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.address.streetSuffix())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "ville"
   * ```
   */
  streetSuffix(): string;

  /**
   * Numerical code for postal address sorting, specific to a geographic area.
   * @returns a random zip
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.address.zip())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "25388"
   * ```
   */
  zip(): string;
}

/**
 * Generator to generate animals.
 */
export declare interface Animal {
  /**
   * Living creature with the ability to move, eat, and interact with its environment.
   * @returns a random animal
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.animal.animal())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "crow"
   * ```
   */
  animal(): string;

  /**
   * Type of animal, such as mammals, birds, reptiles, etc..
   * @returns a random animal type
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.animal.animalType())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "amphibians"
   * ```
   */
  animalType(): string;

  /**
   * Distinct species of birds.
   * @returns a random bird
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.animal.bird())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "lovebird"
   * ```
   */
  bird(): string;

  /**
   * Various breeds that define different cats.
   * @returns a random cat
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.animal.cat())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Toyger"
   * ```
   */
  cat(): string;

  /**
   * Various breeds that define different dogs.
   * @returns a random dog
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.animal.dog())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Staffordshire Bullterrier"
   * ```
   */
  dog(): string;

  /**
   * Animal name commonly found on a farm.
   * @returns a random farm animal
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.animal.farmAnimal())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Cow"
   * ```
   */
  farmAnimal(): string;

  /**
   * Affectionate nickname given to a pet.
   * @returns a random pet name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.animal.petName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Nacho"
   * ```
   */
  petName(): string;
}

/**
 * Generator to generate application related entries.
 */
export declare interface App {
  /**
   * Person or group creating and developing an application.
   * @returns a random app author
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.app.appAuthor())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Wendell Luettgen"
   * ```
   */
  appAuthor(): string;

  /**
   * Software program designed for a specific purpose or task on a computer or mobile device.
   * @returns a random app name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.app.appName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Hillbe"
   * ```
   */
  appName(): string;

  /**
   * Particular release of an application in Semantic Versioning format.
   * @returns a random app version
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.app.appVersion())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "5.3.20"
   * ```
   */
  appVersion(): string;
}

/**
 * Generator to generate beer related entries.
 */
export declare interface Beer {
  /**
   * Measures the alcohol content in beer.
   * @returns a random beer alcohol
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.beer.beerAlcohol())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "6.5%"
   * ```
   */
  beerAlcohol(): string;

  /**
   * Scale indicating the concentration of extract in worts.
   * @returns a random beer blg
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.beer.beerBlg())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "13.4°Blg"
   * ```
   */
  beerBlg(): string;

  /**
   * The flower used in brewing to add flavor, aroma, and bitterness to beer.
   * @returns a random beer hop
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.beer.beerHop())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Nugget"
   * ```
   */
  beerHop(): string;

  /**
   * Scale measuring bitterness of beer from hops.
   * @returns a random beer ibu
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.beer.beerIbu())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "80 IBU"
   * ```
   */
  beerIbu(): string;

  /**
   * Processed barley or other grains, provides sugars for fermentation and flavor to beer.
   * @returns a random beer malt
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.beer.beerMalt())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Roasted barley"
   * ```
   */
  beerMalt(): string;

  /**
   * Specific brand or variety of beer.
   * @returns a random beer name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.beer.beerName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "90 Minute IPA"
   * ```
   */
  beerName(): string;

  /**
   * Distinct characteristics and flavors of beer.
   * @returns a random beer style
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.beer.beerStyle())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "English Brown Ale"
   * ```
   */
  beerStyle(): string;

  /**
   * Microorganism used in brewing to ferment sugars, producing alcohol and carbonation in beer.
   * @returns a random beer yeast
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.beer.beerYeast())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "2035 - American Lager"
   * ```
   */
  beerYeast(): string;
}

/**
 * Generator to generate book related entries.
 */
export declare interface Book {
  /**
   * Written or printed work consisting of pages bound together, covering various subjects or stories.
   * @returns a random book
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.book.book())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {"Title":"The Brothers Karamazov","Author":"Albert Camus","Genre":"Urban"}
   * ```
   */
  book(): Record<string,string>;

  /**
   * The individual who wrote or created the content of a book.
   * @returns a random book author
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.book.bookAuthor())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Edgar Allan Poe"
   * ```
   */
  bookAuthor(): string;

  /**
   * Category or type of book defined by its content, style, or form.
   * @returns a random book genre
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.book.bookGenre())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Erotic"
   * ```
   */
  bookGenre(): string;

  /**
   * The specific name given to a book.
   * @returns a random book title
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.book.bookTitle())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "The Brothers Karamazov"
   * ```
   */
  bookTitle(): string;
}

/**
 * Generator to generate car related entries.
 */
export declare interface Car {
  /**
   * Wheeled motor vehicle used for transportation.
   * @returns a random car
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.car.car())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {"Type":"Passenger car compact","Fuel":"CNG","Transmission":"Automatic","Brand":"Daewoo","Model":"Thunderbird","Year":1905}
   * ```
   */
  car(): Record<string,unknown>;

  /**
   * Type of energy source a car uses.
   * @returns a random car fuel type
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.car.carFuelType())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Ethanol"
   * ```
   */
  carFuelType(): string;

  /**
   * Company or brand that manufactures and designs cars.
   * @returns a random car maker
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.car.carMaker())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Lancia"
   * ```
   */
  carMaker(): string;

  /**
   * Specific design or version of a car produced by a manufacturer.
   * @returns a random car model
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.car.carModel())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Tucson 4wd"
   * ```
   */
  carModel(): string;

  /**
   * Mechanism a car uses to transmit power from the engine to the wheels.
   * @returns a random car transmission type
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.car.carTransmissionType())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Manual"
   * ```
   */
  carTransmissionType(): string;

  /**
   * Classification of cars based on size, use, or body style.
   * @returns a random car type
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.car.carType())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Passenger car compact"
   * ```
   */
  carType(): string;
}

/**
 * Generator to generate celebrities.
 */
export declare interface Celebrity {
  /**
   * Famous person known for acting in films, television, or theater.
   * @returns a random celebrity actor
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.celebrity.celebrityActor())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Ben Affleck"
   * ```
   */
  celebrityActor(): string;

  /**
   * High-profile individual known for significant achievements in business or entrepreneurship.
   * @returns a random celebrity business
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.celebrity.celebrityBusiness())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Larry Ellison"
   * ```
   */
  celebrityBusiness(): string;

  /**
   * Famous athlete known for achievements in a particular sport.
   * @returns a random celebrity sport
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.celebrity.celebritySport())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Greg Lemond"
   * ```
   */
  celebritySport(): string;
}

/**
 * Generator to generate colors.
 */
export declare interface Color {
  /**
   * Hue seen by the eye, returns the name of the color like red or blue.
   * @returns a random color
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.color.color())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "MediumVioletRed"
   * ```
   */
  color(): string;

  /**
   * Six-digit code representing a color in the color model.
   * @returns a random hex color
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.color.hexColor())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "#bd38ac"
   * ```
   */
  hexColor(): string;

  /**
   * Attractive and appealing combinations of colors, returns an list of color hex codes.
   * @returns a random nice colors
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.color.niceColors())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "MediumVioletRed"
   * ```
   */
  niceColors(): string[];

  /**
   * Color defined by red, green, and blue light values.
   * @returns a random rgb color
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.color.rgbColor())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * [13,150,143]
   * ```
   */
  rgbColor(): number[];

  /**
   * Colors displayed consistently on different web browsers and devices.
   * @returns a random safe color
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.color.safeColor())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "black"
   * ```
   */
  safeColor(): string;
}

/**
 * Generator to generate company related entries.
 */
export declare interface Company {
  /**
   * Brief description or summary of a company's purpose, products, or services.
   * @returns a random blurb
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.company.blurb())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Pride"
   * ```
   */
  blurb(): string;

  /**
   * Random bs company word.
   * @returns a random bs
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.company.bs())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "24-7"
   * ```
   */
  bs(): string;

  /**
   * Trendy or overused term often used in business to sound impressive.
   * @returns a random buzzword
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.company.buzzword())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Reverse-engineered"
   * ```
   */
  buzzword(): string;

  /**
   * Designated official name of a business or organization.
   * @returns a random company
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.company.company())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Xatori"
   * ```
   */
  company(): string;

  /**
   * Suffix at the end of a company name, indicating business structure, like 'Inc.' or 'LLC'.
   * @returns a random company suffix
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.company.companySuffix())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "LLC"
   * ```
   */
  companySuffix(): string;

  /**
   * Position or role in employment, involving specific tasks and responsibilities.
   * @returns a random job
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.company.job())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {"Company":"Xatori","Title":"Representative","Descriptor":"Future","Level":"Tactics"}
   * ```
   */
  job(): Record<string,string>;

  /**
   * Word used to describe the duties, requirements, and nature of a job.
   * @returns a random job descriptor
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.company.jobDescriptor())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Internal"
   * ```
   */
  jobDescriptor(): string;

  /**
   * Random job level.
   * @returns a random job level
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.company.jobLevel())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Identity"
   * ```
   */
  jobLevel(): string;

  /**
   * Specific title for a position or role within a company or organization.
   * @returns a random job title
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.company.jobTitle())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Representative"
   * ```
   */
  jobTitle(): string;

  /**
   * Catchphrase or motto used by a company to represent its brand or values.
   * @returns a random slogan
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.company.slogan())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Pride. De-engineered!"
   * ```
   */
  slogan(): string;
}

/**
 * Generator to generate emoji related entries.
 */
export declare interface Emoji {
  /**
   * Digital symbol expressing feelings or ideas in text messages and online chats.
   * @returns a random emoji
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.emoji.emoji())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "🐮"
   * ```
   */
  emoji(): string;

  /**
   * Alternative name or keyword used to represent a specific emoji in text or code.
   * @returns a random emoji alias
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.emoji.emojiAlias())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "slovakia"
   * ```
   */
  emojiAlias(): string;

  /**
   * Group or classification of emojis based on their common theme or use, like 'smileys' or 'animals'.
   * @returns a random emoji category
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.emoji.emojiCategory())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Smileys & Emotion"
   * ```
   */
  emojiCategory(): string;

  /**
   * Brief explanation of the meaning or emotion conveyed by an emoji.
   * @returns a random emoji description
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.emoji.emojiDescription())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "disguised face"
   * ```
   */
  emojiDescription(): string;

  /**
   * Label or keyword associated with an emoji to categorize or search for it easily.
   * @returns a random emoji tag
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.emoji.emojiTag())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "lick"
   * ```
   */
  emojiTag(): string;
}

/**
 * Generator to generate various error codes and messages.
 */
export declare interface Error {
  /**
   * A problem or issue encountered while accessing or managing a database.
   * @returns a random database error
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.error.databaseError())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {}
   * ```
   */
  databaseError(): string;

  /**
   * Message displayed by a computer or software when a problem or mistake is encountered.
   * @returns a random error
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.error.error())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {}
   * ```
   */
  error(): string;

  /**
   * Various categories conveying details about encountered errors.
   * @returns a random error object word
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.error.errorObjectWord())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {}
   * ```
   */
  errorObjectWord(): string;

  /**
   * Communication failure in the high-performance, open-source universal RPC framework.
   * @returns a random grpc error
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.error.gRPCError())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {}
   * ```
   */
  gRPCError(): string;

  /**
   * Failure or issue occurring within a client software that sends requests to web servers.
   * @returns a random http client error
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.error.httpClientError())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {}
   * ```
   */
  httpClientError(): string;

  /**
   * A problem with a web http request.
   * @returns a random http error
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.error.httpError())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {}
   * ```
   */
  httpError(): string;

  /**
   * Failure or issue occurring within a server software that recieves requests from clients.
   * @returns a random http server error
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.error.httpServerError())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {}
   * ```
   */
  httpServerError(): string;

  /**
   * Malfunction occuring during program execution, often causing abrupt termination or unexpected behavior.
   * @returns a random runtime error
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.error.runtimeError())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {}
   * ```
   */
  runtimeError(): string;

  /**
   * Occurs when input data fails to meet required criteria or format specifications.
   * @returns a random validation error
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.error.validationError())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {}
   * ```
   */
  validationError(): string;
}

/**
 * Generator to generate file related entries.
 */
export declare interface File {
  /**
   * Suffix appended to a filename indicating its format or type.
   * @returns a random file extension
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.file.fileExtension())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "max"
   * ```
   */
  fileExtension(): string;

  /**
   * Defines file format and nature for browsers and email clients using standardized identifiers.
   * @returns a random file mime type
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.file.fileMimeType())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "text/html"
   * ```
   */
  fileMimeType(): string;
}

/**
 * Generator to generate finance related entries.
 */
export declare interface Finance {
  /**
   * Unique identifier for securities, especially bonds, in the United States and Canada.
   * @returns a random cusip
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.finance.cusip())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "S4BL2MVY6"
   * ```
   */
  cusip(): string;

  /**
   * International standard code for uniquely identifying securities worldwide.
   * @returns a random isin
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.finance.isin())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "GHS4BL2MVY68"
   * ```
   */
  isin(): string;
}

/**
 * Generator to generate food related entries.
 */
export declare interface Food {
  /**
   * First meal of the day, typically eaten in the morning.
   * @returns a random breakfast
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.food.breakfast())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Ham omelet deluxe"
   * ```
   */
  breakfast(): string;

  /**
   * Sweet treat often enjoyed after a meal.
   * @returns a random dessert
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.food.dessert())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Lindas bloodshot eyeballs"
   * ```
   */
  dessert(): string;

  /**
   * Evening meal, typically the day's main and most substantial meal.
   * @returns a random dinner
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.food.dinner())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Asian broccoli salad"
   * ```
   */
  dinner(): string;

  /**
   * Liquid consumed for hydration, pleasure, or nutritional benefits.
   * @returns a random drink
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.food.drink())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Water"
   * ```
   */
  drink(): string;

  /**
   * Edible plant part, typically sweet, enjoyed as a natural snack or dessert.
   * @returns a random fruit
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.food.fruit())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Avocado"
   * ```
   */
  fruit(): string;

  /**
   * Midday meal, often lighter than dinner, eaten around noon.
   * @returns a random lunch
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.food.lunch())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Tortellini skewers"
   * ```
   */
  lunch(): string;

  /**
   * Random snack.
   * @returns a random snack
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.food.snack())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Hoisin marinated wing pieces"
   * ```
   */
  snack(): string;

  /**
   * Edible plant or part of a plant, often used in savory cooking or salads.
   * @returns a random vegetable
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.food.vegetable())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Broccoli"
   * ```
   */
  vegetable(): string;
}

/**
 * Generator to generate game related entries.
 */
export declare interface Game {
  /**
   * Small, cube-shaped objects used in games of chance for random outcomes.
   * @returns a random dice
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.game.dice(13,[5,4,13]))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * [5,3,6,2,5,1,1,4,1,1,1,3,1]
   * ```
   */
  dice(numdice: number, sides: number[]): number[];

  /**
   * User-selected online username or alias used for identification in games.
   * @returns a random gamertag
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.game.gamertag())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "BraveArmadillo"
   * ```
   */
  gamertag(): string;
}

/**
 * Generator to generate hacker/IT words and phrases.
 */
export declare interface Hacker {
  /**
   * Abbreviations and acronyms commonly used in the hacking and cybersecurity community.
   * @returns a random hacker abbreviation
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.hacker.hackerAbbreviation())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "GB"
   * ```
   */
  hackerAbbreviation(): string;

  /**
   * Adjectives describing terms often associated with hackers and cybersecurity experts.
   * @returns a random hacker adjective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.hacker.hackerAdjective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "auxiliary"
   * ```
   */
  hackerAdjective(): string;

  /**
   * Noun representing an element, tool, or concept within the realm of hacking and cybersecurity.
   * @returns a random hacker noun
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.hacker.hackerNoun())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "application"
   * ```
   */
  hackerNoun(): string;

  /**
   * Informal jargon and slang used in the hacking and cybersecurity community.
   * @returns a random hacker phrase
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.hacker.hackerPhrase())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Try to transpile the EXE sensor, maybe it will deconstruct the wireless interface!"
   * ```
   */
  hackerPhrase(): string;

  /**
   * Verbs associated with actions and activities in the field of hacking and cybersecurity.
   * @returns a random hacker verb
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.hacker.hackerVerb())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "read"
   * ```
   */
  hackerVerb(): string;

  /**
   * Verb describing actions and activities related to hacking, often involving computer systems and security.
   * @returns a random hackering verb
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.hacker.hackeringVerb())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "quantifying"
   * ```
   */
  hackeringVerb(): string;
}

/**
 * Generator to generate hipster words, phrases and paragraphs.
 */
export declare interface Hipster {
  /**
   * Paragraph showcasing the use of trendy and unconventional vocabulary associated with hipster culture.
   * @returns a random hipster paragraph
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.hipster.hipsterParagraph(13,13,17,"\u003cbr /\u003e"))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Offal forage pinterest direct trade pug skateboard food truck flannel cold-pressed church-key keffiyeh wolf pop-up jean shorts before they sold out hoodie roof. Portland intelligentsia gastropub tumblr try-hard offal pork belly jean shorts freegan umami marfa mumblecore food truck gluten-free stumptown keytar locavore. Organic forage post-ironic YOLO crucifix occupy deep v skateboard put a bird on it selvage cornhole 8-bit aesthetic squid tacos waistcoat forage. Food truck whatever YOLO sustainable normcore yr brunch keytar humblebrag pickled humblebrag pour-over drinking bicycle rights ethical pinterest crucifix. Cardigan paleo disrupt food truck hella Godard humblebrag keytar cornhole sriracha occupy twee bicycle rights kickstarter umami pabst wayfarers. Flannel pour-over truffaut cardigan salvia gastropub vinegar wayfarers schlitz loko meh pop-up iPhone stumptown cardigan mustache hashtag. Tofu tumblr green juice shoreditch skateboard tofu seitan tote bag readymade actually master gastropub banjo banjo artisan banh mi gastropub. Salvia tousled blog kale chips +1 taxidermy sustainable wolf mustache readymade microdosing kombucha hoodie ugh blue bottle goth humblebrag. Wayfarers truffaut bespoke irony vegan offal knausgaard kombucha Wes Anderson dreamcatcher readymade 8-bit pug shoreditch whatever bushwick letterpress. Knausgaard +1 occupy gastropub cronut disrupt VHS tousled plaid bushwick ramps biodiesel knausgaard venmo authentic neutra scenester. Tacos loko 90's austin gastropub deep v YOLO PBR&B hashtag polaroid mustache blue bottle occupy marfa messenger bag sustainable venmo. Photo booth cronut banjo portland paleo migas Wes Anderson etsy blog food truck keytar iPhone butcher fashion axe fashion axe pabst jean shorts. Street iPhone whatever selfies cred tattooed vice kogi Thundercats tumblr roof photo booth you probably haven't heard of them +1 shoreditch whatever VHS.<br />Marfa keffiyeh trust fund meh quinoa street loko trust fund bitters pitchfork literally pop-up swag crucifix mustache etsy chartreuse. Crucifix skateboard authentic pop-up vinyl truffaut crucifix aesthetic pour-over artisan occupy tote bag vice hoodie truffaut cold-pressed semiotics. Hella seitan umami stumptown waistcoat hashtag ramps shoreditch whatever artisan pug taxidermy cornhole Godard narwhal synth art party. Tacos letterpress tofu letterpress pork belly chicharrones irony occupy pug sartorial slow-carb carry pork belly authentic kale chips fanny pack shabby chic. Chicharrones shabby chic lumbersexual helvetica mumblecore loko cold-pressed fashion axe forage distillery fingerstache franzen wayfarers ethical street shoreditch lo-fi. Pickled goth hella pop-up wolf banjo chartreuse you probably haven't heard of them twee selfies street meggings locavore you probably haven't heard of them irony cronut drinking. Kickstarter kombucha semiotics hashtag typewriter cornhole flexitarian ugh selfies next level waistcoat bicycle rights you probably haven't heard of them beard offal keytar letterpress. Post-ironic occupy locavore bespoke ugh yr gastropub vice tattooed fingerstache organic wayfarers narwhal gentrify try-hard sustainable pork belly. Vinyl jean shorts raw denim vinegar iPhone try-hard distillery meh fingerstache tattooed five dollar toast chia gluten-free schlitz pitchfork aesthetic sustainable. Messenger bag selvage vinegar try-hard tumblr squid kickstarter crucifix brooklyn put a bird on it plaid flexitarian gastropub hashtag meggings dreamcatcher tilde. Poutine disrupt loko food truck sriracha stumptown 90's Wes Anderson keffiyeh swag photo booth trust fund master tattooed ramps actually pour-over. Scenester goth gluten-free carry listicle Godard salvia XOXO everyday tousled raw denim normcore irony iPhone dreamcatcher taxidermy drinking. Umami green juice food truck helvetica slow-carb cronut vinegar typewriter ethical mustache hoodie sustainable cleanse typewriter echo cronut organic.<br />Typewriter ennui pork belly street swag sriracha ramps tilde sustainable tousled pug hashtag typewriter hashtag dreamcatcher cray literally. Master listicle salvia wolf banjo flannel cornhole tote bag try-hard flexitarian seitan pabst normcore austin polaroid XOXO brooklyn. Slow-carb salvia put a bird on it cardigan hella pickled polaroid tilde pabst fixie neutra tofu 8-bit freegan distillery microdosing craft beer. Viral five dollar toast sustainable Wes Anderson green juice etsy +1 squid cray pork belly jean shorts distillery bicycle rights banjo humblebrag ugh raw denim. Pabst asymmetrical lomo lumbersexual 90's chartreuse messenger bag try-hard bicycle rights literally bespoke five dollar toast quinoa intelligentsia jean shorts lumbersexual whatever. Cardigan slow-carb celiac meh tattooed biodiesel organic carry cornhole ennui tumblr humblebrag YOLO beard 8-bit tilde bicycle rights. Blue bottle PBR&B cleanse Wes Anderson marfa fanny pack blue bottle church-key chartreuse portland shoreditch crucifix iPhone direct trade everyday cliche 8-bit. Butcher mixtape church-key migas readymade shabby chic tacos Thundercats 8-bit forage sustainable salvia heirloom williamsburg trust fund forage austin. Keffiyeh post-ironic occupy knausgaard kitsch chillwave cornhole meggings single-origin coffee cronut intelligentsia VHS occupy poutine PBR&B brunch knausgaard. Keytar DIY knausgaard salvia poutine cray blue bottle biodiesel umami trust fund slow-carb distillery celiac biodiesel dreamcatcher park photo booth. Kinfolk brunch hella chia hammock ugh +1 farm-to-table XOXO loko green juice meggings intelligentsia cornhole brooklyn loko vegan. Cliche ennui pork belly migas biodiesel truffaut irony small batch synth goth artisan post-ironic 3 wolf moon church-key tote bag bicycle rights PBR&B. Cold-pressed occupy put a bird on it brunch cronut farm-to-table lumbersexual carry 90's artisan flannel 8-bit williamsburg leggings viral mustache selvage.<br />Loko yr distillery offal truffaut pour-over +1 Yuccie mumblecore ugh scenester try-hard iPhone kombucha hoodie franzen irony. Sustainable 90's Yuccie retro squid authentic loko fixie polaroid Thundercats +1 kitsch paleo selfies tousled messenger bag slow-carb. Fanny pack selvage plaid photo booth asymmetrical stumptown polaroid echo squid artisan bushwick neutra knausgaard pour-over pour-over ugh meh. Wes Anderson portland carry selvage schlitz authentic cronut +1 kogi ennui vegan bicycle rights organic vice lumbersexual shabby chic meggings. Leggings literally fingerstache brooklyn bicycle rights keffiyeh ennui Yuccie pop-up hammock mustache kombucha banjo vice 90's Wes Anderson celiac. Put a bird on it fanny pack neutra keytar wayfarers meh cold-pressed flexitarian mlkshk keffiyeh XOXO Yuccie chambray raw denim tote bag skateboard normcore. Synth photo booth chillwave flannel before they sold out tacos typewriter distillery 90's biodiesel vinyl YOLO try-hard lomo put a bird on it pour-over chicharrones. Vice next level narwhal XOXO portland vinyl Godard sustainable marfa master mustache seitan trust fund hella sartorial try-hard blue bottle. Locavore literally irony polaroid tofu selfies VHS church-key Yuccie tousled street health +1 whatever blue bottle chambray narwhal. Aesthetic offal cronut try-hard letterpress tote bag slow-carb gastropub pinterest cliche hoodie craft beer green juice gentrify mumblecore iPhone butcher. Marfa mlkshk goth direct trade aesthetic kinfolk franzen Godard fashion axe heirloom bicycle rights tousled art party master selfies master truffaut. XOXO ugh occupy wolf loko celiac helvetica street fingerstache plaid lumbersexual typewriter park messenger bag fashion axe freegan neutra. Disrupt helvetica pinterest meggings before they sold out sriracha VHS listicle trust fund street echo truffaut brunch loko pop-up vegan single-origin coffee.<br />Meditation mlkshk trust fund swag roof asymmetrical venmo hella waistcoat hashtag brunch mixtape celiac chartreuse intelligentsia occupy cardigan. Blue bottle plaid cray pinterest 90's wayfarers meggings everyday DIY swag flannel distillery roof skateboard venmo truffaut craft beer. Flexitarian skateboard marfa lomo Yuccie franzen pabst portland pork belly pour-over bespoke cold-pressed everyday organic venmo 90's banjo. Normcore kombucha biodiesel pop-up kogi sriracha 8-bit distillery dreamcatcher iPhone tofu migas chillwave viral photo booth seitan cred. Jean shorts +1 raw denim williamsburg offal cray church-key listicle venmo direct trade Yuccie readymade polaroid shoreditch twee next level cred. Cardigan salvia meggings vice butcher authentic butcher pinterest photo booth try-hard loko bushwick tilde tousled lumbersexual gastropub occupy. Freegan irony microdosing poutine retro wayfarers goth intelligentsia artisan pabst hammock before they sold out bitters brunch try-hard tacos polaroid. Migas slow-carb art party hammock art party slow-carb celiac mlkshk shabby chic tacos chicharrones scenester lo-fi pickled actually disrupt vice. Cray taxidermy crucifix artisan meditation quinoa street loko austin everyday DIY waistcoat sustainable lo-fi organic forage pitchfork. Retro etsy you probably haven't heard of them synth pork belly pabst flannel distillery Godard knausgaard loko actually iPhone Godard scenester DIY offal. Health meh twee williamsburg you probably haven't heard of them organic listicle swag bicycle rights austin YOLO ethical mixtape cray sustainable austin neutra. Narwhal tote bag cred art party cliche cardigan leggings paleo hashtag fingerstache leggings carry ugh twee distillery mixtape mumblecore. Disrupt hoodie paleo selfies cliche ennui health truffaut single-origin coffee pabst franzen cold-pressed gluten-free banh mi small batch meh YOLO.<br />Health knausgaard vinegar intelligentsia art party venmo listicle heirloom post-ironic truffaut church-key knausgaard tousled chartreuse gentrify 90's beard. Drinking goth squid cray Wes Anderson kogi +1 polaroid umami humblebrag marfa marfa portland venmo lo-fi knausgaard microdosing. Mumblecore lumbersexual normcore banjo shabby chic umami Wes Anderson salvia pabst leggings locavore fixie ethical mixtape waistcoat trust fund art party. Church-key paleo mustache knausgaard flannel dreamcatcher forage humblebrag cardigan small batch truffaut viral freegan church-key austin tattooed kitsch. 8-bit brunch roof Godard Wes Anderson direct trade blue bottle cray lomo kogi kitsch Wes Anderson vinegar slow-carb sartorial bushwick vice. Bespoke twee before they sold out freegan drinking cred ugh umami photo booth intelligentsia truffaut beard leggings locavore asymmetrical pabst aesthetic. Pickled kinfolk helvetica 8-bit flexitarian VHS brooklyn art party wolf asymmetrical swag kitsch hoodie dreamcatcher post-ironic scenester butcher. Celiac portland food truck franzen celiac put a bird on it pour-over echo single-origin coffee ennui hashtag freegan readymade scenester master photo booth deep v. Narwhal lomo gastropub +1 tumblr semiotics schlitz bespoke salvia ethical post-ironic VHS green juice green juice pinterest schlitz cornhole. Fingerstache fanny pack distillery pickled 8-bit fanny pack pitchfork polaroid bushwick artisan Godard ugh irony meggings migas meditation crucifix. Hashtag cold-pressed you probably haven't heard of them asymmetrical five dollar toast messenger bag cray +1 lomo readymade shabby chic organic lomo retro flexitarian venmo heirloom. Photo booth hammock fashion axe slow-carb deep v cleanse hella vinyl organic Godard helvetica typewriter cold-pressed cray selvage readymade pour-over. Pork belly disrupt XOXO gentrify fanny pack pabst cliche brooklyn fashion axe pug whatever irony raw denim blue bottle schlitz etsy organic.<br />Forage seitan typewriter VHS kogi pickled umami neutra chicharrones banh mi pabst carry chillwave mlkshk shabby chic pour-over mustache. Quinoa wayfarers park vice iPhone authentic celiac literally lo-fi whatever seitan banjo taxidermy iPhone flannel mumblecore VHS. Pug twee slow-carb celiac chicharrones keffiyeh neutra roof skateboard biodiesel mlkshk pour-over schlitz before they sold out beard hella chillwave. Heirloom paleo flexitarian stumptown leggings mustache messenger bag everyday roof pickled selfies taxidermy direct trade asymmetrical you probably haven't heard of them green juice bushwick. Waistcoat chia lomo tofu carry DIY franzen iPhone viral humblebrag vinegar forage dreamcatcher street aesthetic narwhal ramps. Bitters neutra cardigan cardigan 90's taxidermy retro swag VHS everyday meditation portland scenester tattooed salvia goth small batch. Neutra migas intelligentsia cred craft beer intelligentsia five dollar toast irony locavore etsy pug scenester pickled slow-carb +1 pabst scenester. Farm-to-table chartreuse occupy swag semiotics farm-to-table cred etsy readymade vice mumblecore organic put a bird on it street next level brooklyn pork belly. Trust fund pour-over park before they sold out meditation art party narwhal pork belly bicycle rights swag trust fund Yuccie loko ramps green juice intelligentsia etsy. Mustache tumblr chillwave cornhole single-origin coffee meh umami schlitz microdosing selvage synth 8-bit carry fanny pack VHS tacos sartorial. Asymmetrical organic austin put a bird on it direct trade park flexitarian cred deep v echo tote bag ramps pitchfork kombucha mixtape stumptown intelligentsia. Skateboard paleo hammock offal direct trade asymmetrical Godard tilde cornhole brunch biodiesel hashtag venmo blog sustainable shoreditch street. Shoreditch migas helvetica cornhole hoodie heirloom hashtag fashion axe mixtape 3 wolf moon cliche microdosing crucifix vinegar roof pickled you probably haven't heard of them.<br />Cliche carry kickstarter hella VHS asymmetrical cray park +1 sustainable crucifix actually direct trade meditation vinyl trust fund shabby chic. Lo-fi crucifix pickled fanny pack synth heirloom meditation synth food truck selfies flexitarian cleanse pickled banjo beard selvage selvage. Fingerstache vinyl asymmetrical Wes Anderson craft beer hella Wes Anderson pug ramps offal freegan mustache cred hammock deep v gentrify knausgaard. Hella viral vinegar food truck green juice tote bag try-hard banh mi direct trade readymade gastropub semiotics raw denim banh mi truffaut vinegar butcher. Waistcoat helvetica freegan goth salvia pop-up pabst viral cliche put a bird on it yr venmo celiac pop-up selvage sartorial helvetica. Selvage sriracha microdosing you probably haven't heard of them readymade polaroid art party pug +1 everyday truffaut messenger bag meggings tote bag tousled fashion axe tilde. Gluten-free paleo asymmetrical dreamcatcher vegan 90's etsy tousled kogi 90's occupy brooklyn asymmetrical XOXO humblebrag ennui Wes Anderson. Asymmetrical austin mixtape austin butcher post-ironic trust fund knausgaard beard raw denim narwhal tacos paleo pabst franzen ugh kinfolk. Wes Anderson master swag chillwave beard pour-over tote bag vice etsy cronut migas umami microdosing fanny pack YOLO tilde meggings. Cronut seitan aesthetic kogi narwhal ennui yr put a bird on it sustainable mumblecore readymade ugh irony paleo +1 hella hella. Raw denim direct trade forage migas readymade kickstarter irony chartreuse intelligentsia pop-up +1 etsy fixie pitchfork pickled semiotics church-key. Fanny pack quinoa occupy bicycle rights meh mustache whatever fanny pack cold-pressed seitan bitters ethical seitan master kitsch bicycle rights cronut. Biodiesel Yuccie hoodie Wes Anderson flexitarian vinyl cliche gastropub occupy letterpress polaroid artisan mixtape everyday semiotics umami church-key.<br />Waistcoat craft beer single-origin coffee forage freegan vinegar ethical portland brunch try-hard farm-to-table venmo semiotics banh mi hashtag brunch mustache. Trust fund cornhole carry portland brunch Wes Anderson tacos trust fund messenger bag beard sartorial VHS PBR&B swag tilde keffiyeh meh. Five dollar toast twee listicle quinoa umami quinoa kale chips cardigan loko XOXO vice ennui wayfarers pop-up locavore keffiyeh narwhal. Lo-fi tumblr meggings farm-to-table semiotics knausgaard skateboard art party seitan celiac austin cardigan YOLO gluten-free tousled banh mi irony. Normcore truffaut chambray locavore gentrify meh cred vice art party leggings blog gentrify heirloom chicharrones vinegar tacos trust fund. Vice DIY skateboard tattooed offal meditation occupy ramps wayfarers fanny pack farm-to-table craft beer sartorial fanny pack humblebrag meggings XOXO. Tote bag gastropub cardigan kickstarter DIY franzen pour-over vinegar street ennui gastropub neutra retro lomo banjo hashtag bespoke. Fanny pack flexitarian swag bespoke biodiesel pug lumbersexual food truck Wes Anderson farm-to-table keffiyeh blog cardigan jean shorts beard artisan meditation. Everyday shoreditch flexitarian master pour-over cornhole vinyl viral butcher bushwick hoodie pug kickstarter brooklyn marfa cold-pressed tousled. Umami roof master bitters brooklyn tattooed organic williamsburg irony narwhal literally pinterest jean shorts intelligentsia taxidermy brooklyn tumblr. DIY neutra umami pug brooklyn heirloom art party chambray leggings fashion axe disrupt YOLO selvage taxidermy gastropub venmo cold-pressed. Asymmetrical carry austin stumptown cardigan banjo kitsch 3 wolf moon chicharrones DIY kogi gastropub crucifix truffaut 8-bit flannel sriracha. Tilde scenester goth taxidermy kale chips shoreditch food truck venmo gluten-free +1 pop-up seitan echo salvia church-key lomo waistcoat.<br />Thundercats pabst listicle chartreuse tilde irony umami carry banjo organic pop-up fashion axe roof scenester intelligentsia cardigan carry. Marfa schlitz photo booth retro shabby chic PBR&B cold-pressed cred pop-up truffaut yr swag kombucha you probably haven't heard of them DIY health venmo. Organic williamsburg literally viral mumblecore farm-to-table church-key leggings hella photo booth viral knausgaard organic kombucha paleo venmo before they sold out. Plaid blog park XOXO deep v vegan distillery irony slow-carb blue bottle scenester iPhone tumblr listicle selfies mlkshk drinking. Lo-fi pug kogi leggings williamsburg distillery YOLO farm-to-table selvage street vinegar whatever VHS you probably haven't heard of them master helvetica viral. Pour-over everyday blue bottle cold-pressed green juice kinfolk sustainable art party synth shoreditch +1 asymmetrical mixtape mixtape kogi cardigan fanny pack. Meggings scenester butcher fanny pack pinterest humblebrag locavore chillwave tousled pitchfork migas listicle flannel loko shoreditch authentic goth. Kinfolk celiac skateboard franzen bicycle rights readymade helvetica selvage chillwave distillery pickled franzen pitchfork taxidermy cold-pressed whatever pug. Sustainable you probably haven't heard of them neutra occupy pop-up health twee lumbersexual umami leggings vegan scenester listicle listicle celiac franzen ennui. Crucifix synth narwhal mustache next level poutine brooklyn cred cliche tacos food truck tumblr wayfarers mixtape health skateboard health. Flexitarian listicle aesthetic pork belly blue bottle williamsburg kale chips taxidermy synth try-hard echo neutra waistcoat loko cliche portland blue bottle. Gluten-free kogi 8-bit ethical wolf VHS shoreditch forage chartreuse mlkshk bitters single-origin coffee hoodie schlitz meditation 3 wolf moon blog. Typewriter roof umami meditation fashion axe plaid cornhole cardigan gastropub mumblecore kale chips pabst irony cornhole street master craft beer.<br />Mlkshk ugh tumblr knausgaard YOLO drinking pabst selfies marfa polaroid farm-to-table kinfolk artisan freegan disrupt tousled butcher. Messenger bag truffaut pour-over umami 90's cleanse meh vegan helvetica cleanse readymade chicharrones locavore quinoa narwhal banh mi YOLO. Crucifix put a bird on it Yuccie hella vinyl synth knausgaard gluten-free chambray freegan normcore scenester vinegar lumbersexual vinyl next level street. Paleo organic pork belly hashtag shoreditch blog austin heirloom offal put a bird on it readymade dreamcatcher cleanse blog yr before they sold out asymmetrical. Hashtag meggings banjo tote bag PBR&B mustache etsy microdosing trust fund jean shorts beard tilde vinegar humblebrag ennui meggings fixie. Quinoa pug pork belly keffiyeh irony blue bottle typewriter photo booth banh mi hoodie pickled beard bushwick slow-carb kogi meggings literally. Normcore YOLO etsy pop-up kickstarter hashtag cardigan quinoa yr lo-fi craft beer pinterest pop-up wayfarers selvage blog shoreditch. Seitan pug hella biodiesel synth mixtape everyday wayfarers hella chicharrones banjo craft beer direct trade direct trade tilde intelligentsia loko. Skateboard twee gentrify you probably haven't heard of them fingerstache single-origin coffee meditation trust fund occupy vice waistcoat wolf whatever viral synth asymmetrical poutine. Squid vice intelligentsia tote bag roof quinoa butcher flannel listicle helvetica bespoke retro tacos mustache green juice echo occupy. Deep v before they sold out tote bag bicycle rights 90's slow-carb schlitz actually 90's gentrify letterpress shabby chic shabby chic iPhone lo-fi trust fund cleanse. Typewriter fixie try-hard meggings health flannel cliche kale chips 90's butcher tousled crucifix slow-carb blog actually wolf dreamcatcher. Flexitarian shabby chic asymmetrical synth Yuccie blue bottle 3 wolf moon pour-over etsy fingerstache vice tattooed celiac +1 normcore gastropub keytar.<br />+1 cred selvage cornhole taxidermy biodiesel marfa cronut brunch art party selfies helvetica before they sold out Yuccie tote bag synth you probably haven't heard of them. Pug humblebrag marfa ethical twee drinking messenger bag direct trade chillwave kale chips freegan flexitarian waistcoat brooklyn intelligentsia hoodie waistcoat. Wayfarers sartorial before they sold out kickstarter irony kogi messenger bag chia iPhone flexitarian stumptown tumblr hammock bicycle rights marfa skateboard brunch. Lomo ethical +1 kombucha vegan pour-over taxidermy small batch 8-bit disrupt normcore knausgaard twee locavore flexitarian hoodie art party. Five dollar toast offal mustache typewriter vice iPhone synth etsy vinegar cred next level aesthetic farm-to-table sustainable before they sold out cray truffaut. Street helvetica fixie synth vinegar poutine pabst twee lumbersexual intelligentsia roof food truck chia tilde jean shorts synth carry. Pabst gastropub swag pork belly direct trade paleo mustache flannel hella migas ramps semiotics brooklyn chia ennui next level Yuccie. Shoreditch synth pabst tattooed williamsburg church-key Godard skateboard chillwave trust fund street carry chicharrones viral Yuccie tacos hella. Biodiesel twee synth shabby chic microdosing jean shorts sustainable umami meggings pitchfork keytar fashion axe flexitarian celiac paleo banjo chia. Viral semiotics roof green juice pork belly single-origin coffee paleo artisan cold-pressed fashion axe wolf small batch craft beer cornhole church-key squid irony. Biodiesel polaroid jean shorts 8-bit hashtag craft beer sustainable PBR&B retro church-key everyday fashion axe seitan actually actually brooklyn chillwave. Aesthetic yr bitters blog offal cred next level chartreuse sartorial organic synth kale chips wayfarers pabst actually mustache tofu. Viral migas polaroid iPhone meditation street schlitz etsy fanny pack brooklyn viral vice chia pitchfork messenger bag master chartreuse.<br />Flexitarian trust fund flannel chillwave cardigan pickled cray biodiesel single-origin coffee gastropub authentic pop-up church-key echo celiac meh YOLO. Knausgaard crucifix iPhone hoodie hella knausgaard paleo cray roof messenger bag cliche yr cronut ramps wayfarers meggings artisan. Banh mi tumblr slow-carb next level PBR&B selfies chartreuse quinoa brunch trust fund etsy PBR&B truffaut shabby chic Yuccie whatever distillery. Small batch hella kale chips master ramps organic 8-bit raw denim knausgaard chartreuse banh mi meditation meh occupy mustache gastropub williamsburg. PBR&B sriracha skateboard art party bushwick ugh bitters actually vegan selvage photo booth vinyl sartorial hoodie flexitarian ennui keffiyeh. Fanny pack neutra drinking flannel hammock selfies food truck slow-carb slow-carb artisan loko kinfolk pickled health franzen art party tilde. Bitters swag cronut slow-carb meditation stumptown vinegar chillwave helvetica bicycle rights literally flexitarian lomo franzen skateboard master roof. Cliche vegan schlitz artisan brooklyn heirloom pabst drinking slow-carb tilde chambray master helvetica irony fingerstache semiotics hoodie. Hella Thundercats post-ironic pinterest mixtape irony messenger bag intelligentsia franzen meh fanny pack neutra deep v deep v asymmetrical synth actually. Health messenger bag umami whatever marfa try-hard waistcoat leggings offal bushwick beard chillwave letterpress helvetica kombucha pug heirloom. Fingerstache asymmetrical kitsch ethical ennui green juice waistcoat church-key cleanse butcher viral chia ethical bushwick kale chips listicle salvia. Portland five dollar toast disrupt asymmetrical neutra green juice waistcoat 3 wolf moon polaroid actually fixie cornhole banjo lo-fi distillery disrupt loko. Sriracha tofu try-hard green juice waistcoat selvage cold-pressed next level selfies raw denim quinoa distillery freegan chicharrones butcher skateboard pickled."
   * ```
   */
  hipsterParagraph(paragraphcount: number, sentencecount: number, wordcount: number, paragraphseparator: string): string;

  /**
   * Sentence showcasing the use of trendy and unconventional vocabulary associated with hipster culture.
   * @returns a random hipster sentence
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.hipster.hipsterSentence(13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Offal forage pinterest direct trade pug skateboard food truck flannel cold-pressed church-key keffiyeh wolf pop-up."
   * ```
   */
  hipsterSentence(wordcount: number): string;

  /**
   * Trendy and unconventional vocabulary used by hipsters to express unique cultural preferences.
   * @returns a random hipster word
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.hipster.hipsterWord())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "offal"
   * ```
   */
  hipsterWord(): string;
}

/**
 * Generator to generate internet related entries.
 */
export declare interface Internet {
  /**
   * The specific identification string sent by the Google Chrome web browser when making requests on the internet.
   * @returns a random chrome user agent
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.internet.chromeUserAgent())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Mozilla/5.0 (X11; Linux i686) AppleWebKit/5340 (KHTML, like Gecko) Chrome/40.0.816.0 Mobile Safari/5340"
   * ```
   */
  chromeUserAgent(): string;

  /**
   * Human-readable web address used to identify websites on the internet.
   * @returns a random domain name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.internet.domainName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "internalenhance.org"
   * ```
   */
  domainName(): string;

  /**
   * The part of a domain name that comes after the last dot, indicating its type or purpose.
   * @returns a random domain suffix
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.internet.domainSuffix())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "info"
   * ```
   */
  domainSuffix(): string;

  /**
   * The specific identification string sent by the Firefox web browser when making requests on the internet.
   * @returns a random firefox user agent
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.internet.firefoxUserAgent())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_9_1 rv:5.0) Gecko/1979-07-30 Firefox/37.0"
   * ```
   */
  firefoxUserAgent(): string;

  /**
   * Verb used in HTTP requests to specify the desired action to be performed on a resource.
   * @returns a random http method
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.internet.httpMethod())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "HEAD"
   * ```
   */
  httpMethod(): string;

  /**
   * Random http status code.
   * @returns a random http status code
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.internet.httpStatusCode())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 400
   * ```
   */
  httpStatusCode(): number;

  /**
   * Three-digit number returned by a web server to indicate the outcome of an HTTP request.
   * @returns a random http status code simple
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.internet.httpStatusCodeSimple())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 200
   * ```
   */
  httpStatusCodeSimple(): number;

  /**
   * Number indicating the version of the HTTP protocol used for communication between a client and a server.
   * @returns a random http version
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.internet.httpVersion())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "HTTP/1.0"
   * ```
   */
  httpVersion(): string;

  /**
   * Web address pointing to an image file that can be accessed and displayed online.
   * @returns a random image url
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.internet.imageUrl(13,13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "https://picsum.photos/13/13"
   * ```
   */
  imageUrl(width: number, height: number): string;

  /**
   * Attribute used to define the name of an input element in web forms.
   * @returns a random input name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.internet.inputName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "last_name"
   * ```
   */
  inputName(): string;

  /**
   * Numerical label assigned to devices on a network for identification and communication.
   * @returns a random ipv4 address
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.internet.ipv4Address())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "234.106.177.171"
   * ```
   */
  ipv4Address(): string;

  /**
   * Numerical label assigned to devices on a network, providing a larger address space than IPv4 for internet communication.
   * @returns a random ipv6 address
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.internet.ipv6Address())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "3aea:ef6a:38b1:7cab:7f0:946c:a3a9:cb90"
   * ```
   */
  ipv6Address(): string;

  /**
   * Classification used in logging to indicate the severity or priority of a log entry.
   * @returns a random log level
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.internet.logLevel())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "error"
   * ```
   */
  logLevel(): string;

  /**
   * Unique identifier assigned to network interfaces, often used in Ethernet networks.
   * @returns a random mac address
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.internet.macAddress())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "87:2d:cd:bc:0d:f3"
   * ```
   */
  macAddress(): string;

  /**
   * The specific identification string sent by the Opera web browser when making requests on the internet.
   * @returns a random opera user agent
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.internet.operaUserAgent())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Opera/10.45 (X11; Linux i686; en-US) Presto/2.13.288 Version/13.00"
   * ```
   */
  operaUserAgent(): string;

  /**
   * Secret word or phrase used to authenticate access to a system or account.
   * @returns a random password
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.internet.password(true,false,true,true,false,13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "-8r34!z294x7h"
   * ```
   */
  password(lower: boolean, upper: boolean, numeric: boolean, special: boolean, space: boolean, length: number): string;

  /**
   * The specific identification string sent by the Safari web browser when making requests on the internet.
   * @returns a random safari user agent
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.internet.safariUserAgent())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Mozilla/5.0 (iPhone; CPU iPhone OS 7_3_2 like Mac OS X; en-US) AppleWebKit/534.34.8 (KHTML, like Gecko) Version/3.0.5 Mobile/8B114 Safari/6534.34.8"
   * ```
   */
  safariUserAgent(): string;

  /**
   * Web address that specifies the location of a resource on the internet.
   * @returns a random url
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.internet.url())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "http://www.forwardtransition.biz/enhance/benchmark"
   * ```
   */
  url(): string;

  /**
   * String sent by a web browser to identify itself when requesting web content.
   * @returns a random user agent
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.internet.userAgent())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Mozilla/5.0 (X11; Linux i686) AppleWebKit/5311 (KHTML, like Gecko) Chrome/37.0.834.0 Mobile Safari/5311"
   * ```
   */
  userAgent(): string;

  /**
   * Unique identifier assigned to a user for accessing an account or system.
   * @returns a random username
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.internet.username())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Abshire5538"
   * ```
   */
  username(): string;
}

/**
 * Generator to generate language related entries.
 */
export declare interface Language {
  /**
   * System of communication using symbols, words, and grammar to convey meaning between individuals.
   * @returns a random language
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.language.language())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Esperanto"
   * ```
   */
  language(): string;

  /**
   * Shortened form of a language's name.
   * @returns a random language abbreviation
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.language.languageAbbreviation())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "eo"
   * ```
   */
  languageAbbreviation(): string;

  /**
   * Set of guidelines and standards for identifying and representing languages in computing and internet protocols.
   * @returns a random language bcp
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.language.languageBcp())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "he-IL"
   * ```
   */
  languageBcp(): string;

  /**
   * Formal system of instructions used to create software and perform computational tasks.
   * @returns a random programming language
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.language.programmingLanguage())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Ceylon"
   * ```
   */
  programmingLanguage(): string;
}

/**
 * Generator to generate minecraft related entries.
 */
export declare interface Minecraft {
  /**
   * Non-hostile creatures in Minecraft, often used for resources and farming.
   * @returns a random minecraft animal
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.minecraft.minecraftAnimal())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "chicken"
   * ```
   */
  minecraftAnimal(): string;

  /**
   * Component of an armor set in Minecraft, such as a helmet, chestplate, leggings, or boots.
   * @returns a random minecraft armor part
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.minecraft.minecraftArmorPart())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "leggings"
   * ```
   */
  minecraftArmorPart(): string;

  /**
   * Classification system for armor sets in Minecraft, indicating their effectiveness and protection level.
   * @returns a random minecraft armor tier
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.minecraft.minecraftArmorTier())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "leather"
   * ```
   */
  minecraftArmorTier(): string;

  /**
   * Distinctive environmental regions in the game, characterized by unique terrain, vegetation, and weather.
   * @returns a random minecraft biome
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.minecraft.minecraftBiome())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "plain"
   * ```
   */
  minecraftBiome(): string;

  /**
   * Items used to change the color of various in-game objects.
   * @returns a random minecraft dye
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.minecraft.minecraftDye())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "purple"
   * ```
   */
  minecraftDye(): string;

  /**
   * Consumable items in Minecraft that provide nourishment to the player character.
   * @returns a random minecraft food
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.minecraft.minecraftFood())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "pufferfish"
   * ```
   */
  minecraftFood(): string;

  /**
   * Powerful hostile creature in the game, often found in challenging dungeons or structures.
   * @returns a random minecraft mob boss
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.minecraft.minecraftMobBoss())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "ender dragon"
   * ```
   */
  minecraftMobBoss(): string;

  /**
   * Aggressive creatures in the game that actively attack players when encountered.
   * @returns a random minecraft mob hostile
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.minecraft.minecraftMobHostile())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "blaze"
   * ```
   */
  minecraftMobHostile(): string;

  /**
   * Creature in the game that only becomes hostile if provoked, typically defending itself when attacked.
   * @returns a random minecraft mob neutral
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.minecraft.minecraftMobNeutral())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "dolphin"
   * ```
   */
  minecraftMobNeutral(): string;

  /**
   * Non-aggressive creatures in the game that do not attack players.
   * @returns a random minecraft mob passive
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.minecraft.minecraftMobPassive())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "axolotl"
   * ```
   */
  minecraftMobPassive(): string;

  /**
   * Naturally occurring minerals found in the game Minecraft, used for crafting purposes.
   * @returns a random minecraft ore
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.minecraft.minecraftOre())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "iron"
   * ```
   */
  minecraftOre(): string;

  /**
   * Items in Minecraft designed for specific tasks, including mining, digging, and building.
   * @returns a random minecraft tool
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.minecraft.minecraftTool())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "pickaxe"
   * ```
   */
  minecraftTool(): string;

  /**
   * The profession or occupation assigned to a villager character in the game.
   * @returns a random minecraft villager job
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.minecraft.minecraftVillagerJob())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "carpenter"
   * ```
   */
  minecraftVillagerJob(): string;

  /**
   * Measure of a villager's experience and proficiency in their assigned job or profession.
   * @returns a random minecraft villager level
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.minecraft.minecraftVillagerLevel())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "novice"
   * ```
   */
  minecraftVillagerLevel(): string;

  /**
   * Designated area or structure in Minecraft where villagers perform their job-related tasks and trading.
   * @returns a random minecraft villager station
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.minecraft.minecraftVillagerStation())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "lectern"
   * ```
   */
  minecraftVillagerStation(): string;

  /**
   * Tools and items used in Minecraft for combat and defeating hostile mobs.
   * @returns a random minecraft weapon
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.minecraft.minecraftWeapon())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "sword"
   * ```
   */
  minecraftWeapon(): string;

  /**
   * Atmospheric conditions in the game that include rain, thunderstorms, and clear skies, affecting gameplay and ambiance.
   * @returns a random minecraft weather
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.minecraft.minecraftWeather())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "clear"
   * ```
   */
  minecraftWeather(): string;

  /**
   * Natural resource in Minecraft, used for crafting various items and building structures.
   * @returns a random minecraft wood
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.minecraft.minecraftWood())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "oak"
   * ```
   */
  minecraftWood(): string;
}

/**
 * Generator to generate movie related entries.
 */
export declare interface Movie {
  /**
   * A story told through moving pictures and sound.
   * @returns a random movie
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.movie.movie())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {"Name":"Sherlock Jr.","Genre":"Music"}
   * ```
   */
  movie(): Record<string,string>;

  /**
   * Category that classifies movies based on common themes, styles, and storytelling approaches.
   * @returns a random movie genre
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.movie.movieGenre())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Film-Noir"
   * ```
   */
  movieGenre(): string;

  /**
   * Title or name of a specific film used for identification and reference.
   * @returns a random movie name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.movie.movieName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Sherlock Jr."
   * ```
   */
  movieName(): string;
}

/**
 * Generator to generate numbers.
 */
export declare interface Number {
  /**
   * Data type that represents one of two possible values, typically true or false.
   * @returns a random boolean
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.boolean())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * true
   * ```
   */
  boolean(): boolean;

  /**
   * Data type representing floating-point numbers with 32 bits of precision in computing.
   * @returns a random float32
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.float32())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 1.9168120387159532e+38
   * ```
   */
  float32(): number;

  /**
   * Float32 value between given range.
   * @returns a random float32 range
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.float32Range(13,13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 13
   * ```
   */
  float32Range(min: number, max: number): number;

  /**
   * Data type representing floating-point numbers with 64 bits of precision in computing.
   * @returns a random float64
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.float64())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 1.012641406418422e+308
   * ```
   */
  float64(): number;

  /**
   * Float64 value between given range.
   * @returns a random float64 range
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.float64Range(13,13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 13
   * ```
   */
  float64Range(min: number, max: number): number;

  /**
   * Hexadecimal representation of an 128-bit unsigned integer.
   * @returns a random hexuint128
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.hexUint128())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "0xaa1b0c903d687691402ee58a2330f9c5"
   * ```
   */
  hexUint128(): string;

  /**
   * Hexadecimal representation of an 16-bit unsigned integer.
   * @returns a random hexuint16
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.hexUint16())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "0xaa1b"
   * ```
   */
  hexUint16(): string;

  /**
   * Hexadecimal representation of an 256-bit unsigned integer.
   * @returns a random hexuint256
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.hexUint256())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "0xaa1b0c903d687691402ee58a2330f9c54b727953d2379f94d23ea4cdad195b6a"
   * ```
   */
  hexUint256(): string;

  /**
   * Hexadecimal representation of an 32-bit unsigned integer.
   * @returns a random hexuint32
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.hexUint32())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "0xaa1b0c90"
   * ```
   */
  hexUint32(): string;

  /**
   * Hexadecimal representation of an 64-bit unsigned integer.
   * @returns a random hexuint64
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.hexUint64())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "0xaa1b0c903d687691"
   * ```
   */
  hexUint64(): string;

  /**
   * Hexadecimal representation of an 8-bit unsigned integer.
   * @returns a random hexuint8
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.hexUint8())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "0xaa"
   * ```
   */
  hexUint8(): string;

  /**
   * Signed 16-bit integer, capable of representing values from 32,768 to 32,767.
   * @returns a random int16
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.int16())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * -4595
   * ```
   */
  int16(): number;

  /**
   * Signed 32-bit integer, capable of representing values from -2,147,483,648 to 2,147,483,647.
   * @returns a random int32
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.int32())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * -15831539
   * ```
   */
  int32(): number;

  /**
   * Signed 64-bit integer, capable of representing values from -9,223,372,036,854,775,808 to -9,223,372,036,854,775,807.
   * @returns a random int64
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.int64())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 5195529898953699000
   * ```
   */
  int64(): number;

  /**
   * Signed 8-bit integer, capable of representing values from -128 to 127.
   * @returns a random int8
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.int8())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * -115
   * ```
   */
  int8(): number;

  /**
   * Integer value between given range.
   * @returns a random intrange
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.intRange(13,13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 13
   * ```
   */
  intRange(min: number, max: number): number;

  /**
   * Mathematical concept used for counting, measuring, and expressing quantities or values.
   * @returns a random number
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.number(13,13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 13
   * ```
   */
  number(min: number, max: number): number;

  /**
   * Randomly selected value from a slice of int.
   * @returns a random random int
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.randomInt([14,8,13]))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 14
   * ```
   */
  randomInt(ints: number[]): number;

  /**
   * Randomly selected value from a slice of uint.
   * @returns a random random uint
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.randomUint([14,8,13]))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 14
   * ```
   */
  randomUint(uints: number[]): number;

  /**
   * Shuffles an array of ints.
   * @returns a random shuffle ints
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.shuffleInts([14,8,13]))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * [8,13,14]
   * ```
   */
  shuffleInts(ints: number[]): number[];

  /**
   * Unsigned 16-bit integer, capable of representing values from 0 to 65,535.
   * @returns a random uint16
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.uint16())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 15082
   * ```
   */
  uint16(): number;

  /**
   * Unsigned 32-bit integer, capable of representing values from 0 to 4,294,967,295.
   * @returns a random uint32
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.uint32())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 2131652109
   * ```
   */
  uint32(): number;

  /**
   * Unsigned 64-bit integer, capable of representing values from 0 to 18,446,744,073,709,551,615.
   * @returns a random uint64
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.uint64())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 5195529898953699000
   * ```
   */
  uint64(): number;

  /**
   * Unsigned 8-bit integer, capable of representing values from 0 to 255.
   * @returns a random uint8
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.uint8())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 234
   * ```
   */
  uint8(): number;

  /**
   * Non-negative integer value between given range.
   * @returns a random uintrange
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.number.uintRange(13,13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 13
   * ```
   */
  uintRange(min: number, max: number): number;
}

/**
 * Generator to generate payment related entries.
 */
export declare interface Payment {
  /**
   * A bank account number used for Automated Clearing House transactions and electronic transfers.
   * @returns a random ach account number
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.payment.achAccountNumber())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "805388385166"
   * ```
   */
  achAccountNumber(): string;

  /**
   * Unique nine-digit code used in the U.S. for identifying the bank and processing electronic transactions.
   * @returns a random ach routing number
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.payment.achRoutingNumber())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "605388385"
   * ```
   */
  achRoutingNumber(): string;

  /**
   * Cryptographic identifier used to receive, store, and send Bitcoin cryptocurrency in a peer-to-peer network.
   * @returns a random bitcoin address
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.payment.bitcoinAddress())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "1t1xAUWhqY1QsZFAlYm6Z75zxerJ"
   * ```
   */
  bitcoinAddress(): string;

  /**
   * Secret, secure code that allows the owner to access and control their Bitcoin holdings.
   * @returns a random bitcoin private key
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.payment.bitcoinPrivateKey())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "5KgZY1TaSmxpQcUsBAkWXFnidi9UsGRsoQq3dWe4oZz5zrG9VVC"
   * ```
   */
  bitcoinPrivateKey(): string;

  /**
   * Plastic card allowing users to make purchases on credit, with payment due at a later date.
   * @returns a random credit card
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.payment.creditCard())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {"Type":"Mastercard","Number":"2713883851665706","Exp":"04/32","Cvv":"489"}
   * ```
   */
  creditCard(): Record<string,unknown>;

  /**
   * Three or four-digit security code on a credit card used for online and remote transactions.
   * @returns a random credit card cvv
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.payment.creditCardCVV())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "405"
   * ```
   */
  creditCardCVV(): string;

  /**
   * Date when a credit card becomes invalid and cannot be used for transactions.
   * @returns a random credit card exp
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.payment.creditCardExp())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "10/27"
   * ```
   */
  creditCardExp(): string;

  /**
   * Month of the date when a credit card becomes invalid and cannot be used for transactions.
   * @returns a random credit card exp month
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.payment.creditCardExpMonth())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "07"
   * ```
   */
  creditCardExpMonth(): string;

  /**
   * Year of the date when a credit card becomes invalid and cannot be used for transactions.
   * @returns a random credit card exp year
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.payment.creditCardExpYear())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "25"
   * ```
   */
  creditCardExpYear(): string;

  /**
   * Unique numerical identifier on a credit card used for making electronic payments and transactions.
   * @returns a random credit card number
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.payment.creditCardNumber(["none","how","these","keep","trip","congolese","choir","computer","still","far"],["unless","army","party","riches","theirs","instead","here","mine","whichever","that"],false))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "0"
   * ```
   */
  creditCardNumber(types: string[], bins: string[], gaps: boolean): string;

  /**
   * Unique numerical identifier on a credit card used for making electronic payments and transactions.
   * @returns a random credit card number formatted
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.payment.creditCardNumberFormatted())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "4111-1111-1111-1111"
   * ```
   */
  creditCardNumberFormatted(): string;

  /**
   * Classification of credit cards based on the issuing company.
   * @returns a random credit card type
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.payment.creditCardType())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Mastercard"
   * ```
   */
  creditCardType(): string;

  /**
   * Medium of exchange, often in the form of paper money or coins, used for trade and transactions.
   * @returns a random currency
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.payment.currency())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {"Short":"VEF","Long":"Venezuela Bolivar"}
   * ```
   */
  currency(): Record<string,string>;

  /**
   * Complete name of a specific currency used for official identification in financial transactions.
   * @returns a random currency long
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.payment.currencyLong())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Venezuela Bolivar"
   * ```
   */
  currencyLong(): string;

  /**
   * Short 3-letter word used to represent a specific currency.
   * @returns a random currency short
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.payment.currencyShort())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "VEF"
   * ```
   */
  currencyShort(): string;

  /**
   * The amount of money or value assigned to a product, service, or asset in a transaction.
   * @returns a random price
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.payment.price(13,13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 13
   * ```
   */
  price(min: number, max: number): number;
}

/**
 * Generator to generate people's personal information.
 */
export declare interface Person {
  /**
   * Electronic mail used for sending digital messages and communication over the internet.
   * @returns a random email
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.person.email())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "josiahthiel@luettgen.biz"
   * ```
   */
  email(): string;

  /**
   * The name given to a person at birth.
   * @returns a random first name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.person.firstName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Josiah"
   * ```
   */
  firstName(): string;

  /**
   * Classification based on social and cultural norms that identifies an individual.
   * @returns a random gender
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.person.gender())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "male"
   * ```
   */
  gender(): string;

  /**
   * An activity pursued for leisure and pleasure.
   * @returns a random hobby
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.person.hobby())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Candy making"
   * ```
   */
  hobby(): string;

  /**
   * The family name or surname of an individual.
   * @returns a random last name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.person.lastName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Abshire"
   * ```
   */
  lastName(): string;

  /**
   * Name between a person's first name and last name.
   * @returns a random middle name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.person.middleName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Sage"
   * ```
   */
  middleName(): string;

  /**
   * The given and family name of an individual.
   * @returns a random name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.person.name())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Josiah Thiel"
   * ```
   */
  name(): string;

  /**
   * A title or honorific added before a person's name.
   * @returns a random name prefix
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.person.namePrefix())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Mr."
   * ```
   */
  namePrefix(): string;

  /**
   * A title or designation added after a person's name.
   * @returns a random name suffix
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.person.nameSuffix())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Sr."
   * ```
   */
  nameSuffix(): string;

  /**
   * Personal data, like name and contact details, used for identification and communication.
   * @returns a random person
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.person.person())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {"FirstName":"Josiah","LastName":"Thiel","Gender":"male","SSN":"558821916","Image":"https://picsum.photos/367/273","Hobby":"Winemaking","Job":{"Company":"Headlight","Title":"Administrator","Descriptor":"Chief","Level":"Configuration"},"Address":{"Address":"6992 Inletstad, Las Vegas, Rhode Island 82271","Street":"6992 Inletstad","City":"Las Vegas","State":"Rhode Island","Zip":"82271","Country":"Sweden","Latitude":-75.921372,"Longitude":109.436476},"Contact":{"Phone":"4361943393","Email":"janisbarrows@hessel.net"},"CreditCard":{"Type":"Discover","Number":"4525298222125328","Exp":"01/29","Cvv":"282"}}
   * ```
   */
  person(): Record<string,unknown>;

  /**
   * Numerical sequence used to contact individuals via telephone or mobile devices.
   * @returns a random phone
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.person.phone())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "7053883851"
   * ```
   */
  phone(): string;

  /**
   * Formatted phone number of a person.
   * @returns a random phone formatted
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.person.phoneFormatted())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "1-053-883-8516"
   * ```
   */
  phoneFormatted(): string;

  /**
   * An institution for formal education and learning.
   * @returns a random school
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.person.school())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Valley View Private Middle School"
   * ```
   */
  school(): string;

  /**
   * Unique nine-digit identifier used for government and financial purposes in the United States.
   * @returns a random ssn
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.person.ssn())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "853698829"
   * ```
   */
  ssn(): string;

  /**
   * Randomly split people into teams.
   * @returns a random teams
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.person.teams(["none","how","these","keep","trip","congolese","choir","computer","still","far"],["unless","army","party","riches","theirs","instead","here","mine","whichever","that"]))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {"army":["congolese"],"theirs":["still"],"whichever":["keep"],"unless":["these"],"party":["far"],"riches":["choir"],"instead":["trip"],"here":["computer"],"mine":["how"],"that":["none"]}
   * ```
   */
  teams(people: string[], teams: string[]): Record<string, Array<string>>;
}

/**
 * Generator to generate product related entries.
 */
export declare interface Product {
  /**
   * An item created for sale or use.
   * @returns a random product
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.product.product())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {"Name":"Quartz Teal Scale","Description":"Bravo mirror hundreds his party nobody. Anything wit she from above Chinese those choir toilet as you of other enormously.","Categories":["mobile phones","food and groceries","furniture"],"Price":82.9,"Features":["durable"],"Color":"green","Material":"bronze","UPC":"084020104876"}
   * ```
   */
  product(): Record<string,unknown>;

  /**
   * Classification grouping similar products based on shared characteristics or functions.
   * @returns a random product category
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.product.productCategory())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "mobile phones"
   * ```
   */
  productCategory(): string;

  /**
   * Explanation detailing the features and characteristics of a product.
   * @returns a random product description
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.product.productDescription())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Up brace lung anyway then bravo mirror hundreds his party. Person anything wit she from above Chinese those choir toilet as you."
   * ```
   */
  productDescription(): string;

  /**
   * Specific characteristic of a product that distinguishes it from others products.
   * @returns a random product feature
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.product.productFeature())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "touchscreen"
   * ```
   */
  productFeature(): string;

  /**
   * The substance from which a product is made, influencing its appearance, durability, and properties.
   * @returns a random product material
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.product.productMaterial())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "alloy"
   * ```
   */
  productMaterial(): string;

  /**
   * Distinctive title or label assigned to a product for identification and marketing.
   * @returns a random product name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.product.productName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Stream Gold Robot"
   * ```
   */
  productName(): string;

  /**
   * Standardized barcode used for product identification and tracking in retail and commerce.
   * @returns a random product upc
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.product.productUpc())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "092964558555"
   * ```
   */
  productUpc(): string;
}

/**
 * Generator to generate strings.
 */
export declare interface String {
  /**
   * Numerical symbol used to represent numbers.
   * @returns a random digit
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.string.digit())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "0"
   * ```
   */
  digit(): string;

  /**
   * string of length N consisting of ASCII digits.
   * @returns a random digitn
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.string.digitN(13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "0053883851665"
   * ```
   */
  digitN(count: number): string;

  /**
   * Character or symbol from the American Standard Code for Information Interchange (ASCII) character set.
   * @returns a random letter
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.string.letter())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "W"
   * ```
   */
  letter(): string;

  /**
   * ASCII string with length N.
   * @returns a random lettern
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.string.letterN(13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "WCpXcQhgfZWYH"
   * ```
   */
  letterN(count: number): string;

  /**
   * Replace ? with random generated letters.
   * @returns a random lexify
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.string.lexify("none"))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "none"
   * ```
   */
  lexify(str: string): string;

  /**
   * Replace # with random numerical values.
   * @returns a random numerify
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.string.numerify("none"))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "none"
   * ```
   */
  numerify(str: string): string;

  /**
   * Return a random string from a string array.
   * @returns a random random string
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.string.randomString(["none","how","these","keep","trip","congolese","choir","computer","still","far"]))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "none"
   * ```
   */
  randomString(strs: string[]): string[];

  /**
   * Shuffle an array of strings.
   * @returns a random shuffle strings
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.string.shuffleStrings(["none","how","these","keep","trip","congolese","choir","computer","still","far"]))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * ["these","congolese","far","choir","still","trip","computer","how","keep","none"]
   * ```
   */
  shuffleStrings(strs: string[]): string[];

  /**
   * 128-bit identifier used to uniquely identify objects or entities in computer systems.
   * @returns a random uuid
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.string.uuid())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "ea6ab1ab-f06c-4990-835d-e628b7e659e1"
   * ```
   */
  uuid(): string;
}

/**
 * Generator to generate time and date.
 */
export declare interface Time {
  /**
   * Representation of a specific day, month, and year, often used for chronological reference.
   * @returns a random date
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.time.date("RFC3339"))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "1953-05-18T03:42:08Z"
   * ```
   */
  date(format: string): string;

  /**
   * Random date between two ranges.
   * @returns a random daterange
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.time.dateRange("1970-01-01","2024-03-13","yyyy-MM-dd"))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "1974-03-22"
   * ```
   */
  dateRange(startdate: string, enddate: string, format: string): string;

  /**
   * 24-hour period equivalent to one rotation of Earth on its axis.
   * @returns a random day
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.time.day())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 22
   * ```
   */
  day(): number;

  /**
   * Date that has occurred after the current moment in time.
   * @returns a random futuretime
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.time.futureTime())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "2024-03-14T03:32:19.302105549+01:00"
   * ```
   */
  futureTime(): string;

  /**
   * Unit of time equal to 60 minutes.
   * @returns a random hour
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.time.hour())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 21
   * ```
   */
  hour(): number;

  /**
   * Unit of time equal to 60 seconds.
   * @returns a random minute
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.time.minute())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 9
   * ```
   */
  minute(): number;

  /**
   * Division of the year, typically 30 or 31 days long.
   * @returns a random month
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.time.month())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 10
   * ```
   */
  month(): string;

  /**
   * String Representation of a month name.
   * @returns a random month string
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.time.monthString())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "October"
   * ```
   */
  monthString(): string;

  /**
   * Unit of time equal to One billionth (10^-9) of a second.
   * @returns a random nanosecond
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.time.nanosecond())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 953698829
   * ```
   */
  nanosecond(): number;

  /**
   * Date that has occurred before the current moment in time.
   * @returns a random pasttime
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.time.pastTime())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "2024-03-13T07:32:19.303043826+01:00"
   * ```
   */
  pastTime(): string;

  /**
   * Unit of time equal to 1/60th of a minute.
   * @returns a random second
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.time.second())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 9
   * ```
   */
  second(): number;

  /**
   * Region where the same standard time is used, based on longitudinal divisions of the Earth.
   * @returns a random timezone
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.time.timezone())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Tonga Standard Time"
   * ```
   */
  timezone(): string;

  /**
   * Abbreviated 3-letter word of a timezone.
   * @returns a random timezone abbreviation
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.time.timezoneAbbreviation())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "TST"
   * ```
   */
  timezoneAbbreviation(): string;

  /**
   * Full name of a timezone.
   * @returns a random timezone full
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.time.timezoneFull())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "(UTC+13:00) Nuku'alofa"
   * ```
   */
  timezoneFull(): string;

  /**
   * The difference in hours from Coordinated Universal Time (UTC) for a specific region.
   * @returns a random timezone offset
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.time.timezoneOffset())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 13
   * ```
   */
  timezoneOffset(): number;

  /**
   * Geographic area sharing the same standard time.
   * @returns a random timezone region
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.time.timezoneRegion())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Asia/Manila"
   * ```
   */
  timezoneRegion(): string;

  /**
   * Day of the week excluding the weekend.
   * @returns a random weekday
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.time.weekday())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Sunday"
   * ```
   */
  weekday(): string;

  /**
   * Period of 365 days, the time Earth takes to orbit the Sun.
   * @returns a random year
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.time.year())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 1979
   * ```
   */
  year(): number;
}

/**
 * Generator to generate words and sentences.
 */
export declare interface Word {
  /**
   * Verb Indicating a physical or mental action.
   * @returns a random action verb
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.actionVerb())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "smell"
   * ```
   */
  actionVerb(): string;

  /**
   * Word describing or modifying a noun.
   * @returns a random adjective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.adjective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "brave"
   * ```
   */
  adjective(): string;

  /**
   * Word that modifies verbs, adjectives, or other adverbs.
   * @returns a random adverb
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.adverb())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "quickly"
   * ```
   */
  adverb(): string;

  /**
   * Adverb that indicates the degree or intensity of an action or adjective.
   * @returns a random adverb degree
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.adverbDegree())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "pretty"
   * ```
   */
  adverbDegree(): string;

  /**
   * Adverb that specifies how often an action occurs with a clear frequency.
   * @returns a random adverb frequency definite
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.adverbFrequencyDefinite())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "annually"
   * ```
   */
  adverbFrequencyDefinite(): string;

  /**
   * Adverb that specifies how often an action occurs without specifying a particular frequency.
   * @returns a random adverb frequency indefinite
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.adverbFrequencyIndefinite())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "rarely"
   * ```
   */
  adverbFrequencyIndefinite(): string;

  /**
   * Adverb that describes how an action is performed.
   * @returns a random adverb manner
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.adverbManner())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "sleepily"
   * ```
   */
  adverbManner(): string;

  /**
   * Phrase that modifies a verb, adjective, or another adverb, providing additional information..
   * @returns a random adverb phrase
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.adverbPhrase())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "too cheerfully"
   * ```
   */
  adverbPhrase(): string;

  /**
   * Adverb that indicates the location or direction of an action.
   * @returns a random adverb place
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.adverbPlace())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "east"
   * ```
   */
  adverbPlace(): string;

  /**
   * Adverb that specifies the exact time an action occurs.
   * @returns a random adverb time definite
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.adverbTimeDefinite())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "now"
   * ```
   */
  adverbTimeDefinite(): string;

  /**
   * Adverb that gives a general or unspecified time frame.
   * @returns a random adverb time indefinite
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.adverbTimeIndefinite())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "late"
   * ```
   */
  adverbTimeIndefinite(): string;

  /**
   * Statement or remark expressing an opinion, observation, or reaction.
   * @returns a random comment
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.comment())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "wow"
   * ```
   */
  comment(): string;

  /**
   * Word used to connect words or sentences.
   * @returns a random connective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.connective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "for another"
   * ```
   */
  connective(): string;

  /**
   * Connective word used to indicate a cause-and-effect relationship between events or actions.
   * @returns a random connective casual
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.connectiveCasual())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "accordingly"
   * ```
   */
  connectiveCasual(): string;

  /**
   * Connective word used to indicate a comparison between two or more things.
   * @returns a random connective comparitive
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.connectiveComparitive())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "yet"
   * ```
   */
  connectiveComparitive(): string;

  /**
   * Connective word used to express dissatisfaction or complaints about a situation.
   * @returns a random connective complaint
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.connectiveComplaint())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "for example"
   * ```
   */
  connectiveComplaint(): string;

  /**
   * Connective word used to provide examples or illustrations of a concept or idea.
   * @returns a random connective examplify
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.connectiveExamplify())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "accordingly"
   * ```
   */
  connectiveExamplify(): string;

  /**
   * Connective word used to list or enumerate items or examples.
   * @returns a random connective listing
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.connectiveListing())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "for another"
   * ```
   */
  connectiveListing(): string;

  /**
   * Connective word used to indicate a temporal relationship between events or actions.
   * @returns a random connective time
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.connectiveTime())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "until then"
   * ```
   */
  connectiveTime(): string;

  /**
   * Adjective used to point out specific things.
   * @returns a random demonstrative adjective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.demonstrativeAdjective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "these"
   * ```
   */
  demonstrativeAdjective(): string;

  /**
   * Adjective that provides detailed characteristics about a noun.
   * @returns a random descriptive adjective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.descriptiveAdjective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "elated"
   * ```
   */
  descriptiveAdjective(): string;

  /**
   * Auxiliary verb that helps the main verb complete the sentence.
   * @returns a random helping verb
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.helpingVerb())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "are"
   * ```
   */
  helpingVerb(): string;

  /**
   * Adjective describing a non-specific noun.
   * @returns a random indefinite adjective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.indefiniteAdjective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "somebody"
   * ```
   */
  indefiniteAdjective(): string;

  /**
   * Word expressing emotion.
   * @returns a random interjection
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.interjection())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "wow"
   * ```
   */
  interjection(): string;

  /**
   * Adjective used to ask questions.
   * @returns a random interrogative adjective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.interrogativeAdjective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "what"
   * ```
   */
  interrogativeAdjective(): string;

  /**
   * Verb that does not require a direct object to complete its meaning.
   * @returns a random intransitive verb
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.intransitiveVerb())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "skip"
   * ```
   */
  intransitiveVerb(): string;

  /**
   * Verb that Connects the subject of a sentence to a subject complement.
   * @returns a random linking verb
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.linkingVerb())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "had"
   * ```
   */
  linkingVerb(): string;

  /**
   * Paragraph of the Lorem Ipsum placeholder text used in design and publishing.
   * @returns a random lorem ipsum paragraph
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.loremIpsumParagraph(13,13,17,"\u003cbr /\u003e"))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Accusamus et voluptatum voluptatem nisi nostrum atque molestias reprehenderit alias reiciendis ut eos ut ad ea magni. Recusandae id fuga ut rerum quia sit doloremque vero dolores temporibus non ipsum ipsam quis et fugiat. Necessitatibus voluptas et laborum et placeat eaque sit fuga ut dolore asperiores itaque nisi voluptas et autem. Quia doloremque laborum dolorem corporis excepturi dolor commodi dolorem totam inventore cum aut autem odit consequuntur temporibus. Maxime consequatur quo perferendis error alias minus reiciendis voluptates possimus voluptas aut possimus doloribus corporis commodi natus. Est adipisci doloremque ut quia impedit eius expedita adipisci sed facere velit odit ut tempore fuga veritatis. A debitis unde sunt non voluptatibus dolorum sapiente nemo ratione et voluptas tempore eum possimus culpa nobis. Officiis ut voluptatem voluptas aut culpa ullam numquam deleniti non tenetur accusamus ullam illum voluptatem beatae voluptas. Unde cupiditate incidunt ut id deserunt unde perspiciatis molestias incidunt fugit natus porro nemo odio dolorum voluptate. Voluptatum delectus eius non animi quia illo esse vel omnis aut dolorem nihil numquam labore porro non. In cupiditate eos ea numquam ipsum voluptatem ipsa ratione vitae voluptate consequatur fugiat sunt itaque ullam repellat. Officia nobis omnis soluta sed ut dolores quis ullam dolores delectus aperiam quaerat est ut aliquid mollitia. Repudiandae tempore ipsa eius qui magnam nisi cumque aut voluptas qui officia et aut voluptatibus vel eveniet.<br />Ut nesciunt sit non ducimus distinctio voluptatibus dolores blanditiis officia accusamus esse dolorem unde at error numquam. Eveniet aliquid laborum libero illo esse et distinctio est tempore omnis illum pariatur maiores consequuntur libero quia. Dignissimos nihil et sint et aliquid est omnis doloremque labore corrupti cumque consequatur vero quos sequi voluptates. Sapiente optio enim totam dolorum unde sint nesciunt eligendi quia sint ad officiis enim numquam cum totam. Nisi eum sit error repellat ut et odit repellendus est nemo assumenda officiis dolor enim et commodi. Error corrupti ut eligendi eum vitae necessitatibus dolorum tenetur id quidem omnis sint facere aspernatur omnis magni. Nihil vero architecto ratione rerum a tempore quasi sint eius error sed rerum saepe praesentium veritatis et. Voluptates iste praesentium tenetur omnis nisi dolor vel et dolore quisquam neque voluptate ullam amet consectetur voluptatem. Voluptates unde minus praesentium et ut rerum omnis officiis quidem illum eum et nihil nobis ullam aut. Enim beatae placeat facere maxime esse laboriosam consequatur voluptas quisquam voluptas suscipit est provident excepturi vero in. Quaerat alias facere aliquid ad aut voluptatum ipsam aspernatur cupiditate in commodi id magni nulla nostrum aut. Eveniet dolorem doloribus in aliquam dicta qui est et excepturi explicabo rem omnis nobis praesentium dolores voluptas. Quibusdam omnis ratione blanditiis dicta autem rerum quo eum assumenda voluptatem sed aut eaque ea et magni.<br />Minima nobis natus deleniti eos sint nesciunt fuga quisquam sed a vero quia aliquid praesentium in eaque. Id et molestiae voluptatem et et facere quae molestiae non voluptatum perferendis sit non sequi culpa iusto. Perferendis a quis enim officia dolorem necessitatibus vitae cum qui ipsa libero natus provident minima id facere. Voluptates blanditiis voluptate id consequatur omnis adipisci exercitationem occaecati cupiditate rerum velit autem autem voluptate non et. Nihil minima excepturi molestiae corrupti sapiente aut neque numquam nesciunt nesciunt laborum tenetur et libero rerum voluptatem. Non quo numquam porro aperiam impedit in est qui ut sint labore voluptate non sunt impedit optio. Exercitationem facilis sit saepe laudantium sint eligendi accusamus illum cupiditate voluptas velit ut sint consequatur facere a. Ut aut eaque qui excepturi sed aut minus voluptatem incidunt ut eos vero maiores molestias perspiciatis sit. Incidunt cupiditate atque libero in sit sunt ipsa aliquam laborum nihil consequatur eaque sit amet quia vel. Ratione dolores reprehenderit reprehenderit beatae saepe vel quas aliquid est omnis aliquid omnis tempora omnis debitis ut. Sint quisquam blanditiis distinctio voluptatem maiores ut tempore nihil officiis rerum eos rerum sit nulla neque incidunt. Amet possimus unde quia assumenda a nulla illo laborum veniam sapiente voluptatibus dolorem provident ad maxime sed. Corrupti repellendus quae impedit necessitatibus animi sit voluptatem est numquam aspernatur eveniet molestiae omnis officiis distinctio non.<br />Illo odio est et non atque repellendus laboriosam quos itaque corrupti non quia ratione quis impedit fugiat. Dignissimos modi nam officia eligendi eum voluptatem aspernatur dignissimos tempora non fugiat eligendi doloribus exercitationem inventore iure. Omnis vel exercitationem aperiam perspiciatis maxime quae et sed enim qui nisi ea iste corporis voluptate dolorem. Fugiat quia voluptate molestiae ipsum sapiente illum rem quo sed est quam suscipit cupiditate facere sed temporibus. Omnis earum nemo tenetur assumenda eaque enim sint aut sit nobis rem voluptate nihil a sint et. Aut omnis voluptatem rerum nisi non exercitationem in quod non non occaecati ipsam quisquam dolor nam velit. Quia minus dolores atque voluptas impedit et commodi consequatur quis amet aperiam sit officiis hic ipsum esse. Libero autem repudiandae provident sit et rem consectetur et minima sed officiis corporis eum et quia sit. Praesentium cumque qui vitae ipsa nulla natus iusto sint reprehenderit optio et cum sunt consequatur nesciunt laborum. Ad sit quasi voluptatem ullam laborum culpa aperiam voluptas laudantium eum eos a voluptas inventore odit cupiditate. Dolorum cupiditate voluptatem ut dolorem et deleniti est enim reiciendis laborum qui voluptatum nesciunt dicta adipisci esse. Culpa dolor culpa quia odio eum itaque sequi a voluptatem sunt velit explicabo sed voluptas rem consequatur. Qui est eos sed magnam in quo aliquid quo eum ex voluptatem totam quod mollitia corporis quia.<br />Eligendi dolorum ipsum dolorum non tenetur quae sed officia alias ad voluptatem ullam quidem ducimus similique minus. Modi facere ipsam reprehenderit rerum et est neque accusamus cupiditate adipisci accusantium sed doloribus itaque velit eveniet. Tempora aliquid unde est atque ea nulla laudantium illo alias similique consequatur ex ut impedit reprehenderit sed. Earum et enim consequatur perspiciatis necessitatibus eos aliquam ipsam voluptate voluptatibus laudantium delectus harum consectetur reprehenderit et. Dolorum alias sed debitis corporis molestias aut iusto ullam maxime nostrum consequuntur consectetur porro qui sit voluptatem. Nobis soluta facere consequatur et sequi et exercitationem at eligendi harum quo blanditiis harum sed deleniti qui. Id adipisci et temporibus hic quia beatae accusantium eum id ex totam ullam impedit soluta ut voluptas. Temporibus fugiat libero fugit velit nesciunt dolor unde hic tempore fugit molestiae culpa eum est est veniam. Reiciendis quia et quis consequatur alias dolor laudantium temporibus quod aut illum quas id quas perspiciatis odit. Inventore vitae vel maiores et iste ab repellendus iusto voluptates officiis nihil dolor ducimus illo autem aliquam. Deserunt eos iste quae non sint et ipsa ea exercitationem sed nobis vel iure laborum excepturi reprehenderit. Enim dignissimos porro reprehenderit sed hic laudantium porro aut consequuntur quia sequi necessitatibus omnis quo nemo eum. Perferendis est excepturi omnis quia quis deserunt vel accusamus ab quas natus commodi quo eos corrupti numquam.<br />Alias soluta accusantium sint ut voluptate ipsum ut excepturi pariatur in voluptatibus eveniet labore quis consequatur dolores. Aperiam ex quia omnis placeat veritatis id explicabo nam assumenda ea libero consequatur necessitatibus provident libero ipsam. Et mollitia cumque sapiente sed nam reiciendis cupiditate qui cupiditate consequatur et odit aut omnis est sunt. Ducimus qui aperiam voluptatem molestias reiciendis et quisquam hic asperiores enim harum quia perspiciatis dolorum laborum aut. Quaerat aut qui architecto non optio esse placeat soluta ab qui id quia eius ratione amet vel. Quia molestias error aliquid explicabo consequuntur dolor iure tempora non sed perspiciatis eos delectus iure nam voluptas. Magnam saepe repellat qui sed qui accusantium ut numquam cum est cumque molestiae earum cupiditate velit voluptatibus. Dolor omnis saepe assumenda qui autem adipisci rerum nihil omnis quia perspiciatis voluptates natus eaque quisquam in. Magnam recusandae ut et aperiam incidunt id omnis facilis magnam expedita beatae omnis fugit natus qui sunt. Dolore nulla perspiciatis vitae officiis iste quos qui unde quam id magni aut officiis sunt illo beatae. Id dolorum velit culpa totam voluptatem occaecati delectus reprehenderit modi blanditiis vitae voluptatum consectetur autem omnis et. Fuga aut et corporis rerum unde qui porro inventore quia voluptatem quia voluptates ab nisi nihil dicta. Molestiae cum quia eum et adipisci ipsa perferendis enim sunt unde aut quisquam harum perspiciatis sed illum.<br />Nesciunt velit velit voluptatem autem maiores adipisci ut quod fugiat adipisci molestiae et rerum assumenda aliquid ad. Qui odio enim eligendi aut deleniti inventore doloribus cum aut libero ad et magni quo maxime ea. Voluptatem rerum autem sed reprehenderit est nisi aut id magni neque iusto sit maxime autem sint rem. Dolores voluptates ut voluptatem soluta est repellat soluta maiores maxime nostrum nam in incidunt voluptates sit voluptatibus. Dolorem possimus consequatur consequatur ullam minima repellat assumenda rerum eum omnis incidunt similique aut et repellat occaecati. Maiores beatae minus sed molestiae et quia ipsa expedita voluptas molestiae recusandae laudantium sint quo laudantium fugit. Quia pariatur fugiat ut vel repellendus impedit voluptas id voluptatem nisi et numquam molestias culpa voluptas qui. Assumenda possimus alias ut doloribus aut ut dolor sunt facilis tempora omnis magnam enim et aut velit. Et nihil fuga et ex voluptatum suscipit dolorem sed voluptates ab cum voluptas nostrum omnis fugiat ut. Aut magni architecto ut quia et est iure velit facere impedit temporibus voluptatem placeat consequatur magni iusto. Iusto suscipit porro omnis omnis dolor totam exercitationem doloribus quia explicabo non assumenda omnis libero inventore et. Sint quaerat eligendi quo quis dicta cumque illum sed sed quis ducimus officia voluptate consectetur voluptatibus repellat. Quo sit eum consequuntur voluptate est placeat minus voluptates beatae quia et harum ratione blanditiis quis sunt.<br />Veniam at aliquam et nisi sit accusantium laborum ratione odit omnis nesciunt nobis neque eligendi et quasi. Ut a impedit sint enim vero qui quas dicta iste animi pariatur dolor autem adipisci est ex. Exercitationem reprehenderit fugiat rem quia tempore consequatur a sint perferendis autem suscipit odio quod et ad voluptatem. Dolorem eos dolores aut nihil enim eveniet id officia sed ad accusantium maxime veritatis ex eaque ipsa. Blanditiis voluptatem et beatae modi rerum similique exercitationem excepturi et a voluptatem ea nemo natus laboriosam tempore. Enim voluptas autem quaerat et distinctio modi recusandae accusantium molestiae exercitationem animi consequatur debitis nemo repellat ullam. Et recusandae praesentium quibusdam deserunt mollitia magnam qui adipisci illo cumque rerum ut earum molestiae molestiae nulla. Et odio sunt porro voluptatem mollitia doloribus a veritatis quidem ad minus recusandae rerum ad et dolores. Deserunt praesentium illo ipsam iste incidunt dolor molestiae sed dolor veniam quia aliquam rerum eum explicabo harum. Ad aut omnis laboriosam quis optio quaerat dolor repellat officia dolorum assumenda sit neque voluptas voluptas maxime. Quam ea architecto expedita molestiae repellendus voluptas ullam architecto fugit quia quae atque ad at incidunt alias. Deserunt est et aperiam sit quis consequatur voluptas soluta odio totam consectetur eligendi culpa reiciendis aut voluptas. Dolor est laborum alias nobis ut eos labore dicta dolorem qui sed non et placeat perferendis sit.<br />Error qui perspiciatis tenetur consequatur eius molestiae sunt assumenda asperiores molestiae non iure ut ab assumenda quas. Rerum velit dolor consequatur impedit architecto repudiandae iure et molestias occaecati ex expedita omnis dolor veritatis cupiditate. Deleniti eius et provident est ratione sequi in rerum ipsum nemo deleniti ex sit eius et assumenda. Fugiat autem esse dolor adipisci qui commodi consequatur esse labore eos assumenda quis deserunt libero ipsam id. Id velit dolores velit numquam temporibus quod et a vel quia suscipit architecto facere saepe ullam aut. Voluptatibus delectus aut tempore commodi dolore provident perspiciatis officiis eius quasi et delectus atque quae recusandae et. Assumenda illum non eaque commodi quisquam dolores aliquid eum dolor sed odio dignissimos quaerat impedit rem perferendis. Sit autem sunt saepe aperiam voluptatibus qui corporis dolores itaque est in est odio perferendis illum recusandae. Quo rerum quos praesentium ab cupiditate ut doloremque ut voluptas nobis illo non ducimus illo ipsa qui. Voluptas dolorem aut et delectus ut quis quia ducimus dolor et unde sunt eius accusamus est explicabo. Cum porro perferendis nihil in et quo ducimus molestiae voluptatem accusantium molestiae corrupti quia ut animi ipsa. Nam tempora exercitationem eum ut quasi et temporibus expedita eaque deserunt aut et voluptatem consequatur delectus odit. Itaque est eveniet provident laborum recusandae velit dolorem perspiciatis id dolorem qui ipsa qui consequatur qui totam.<br />Ullam delectus deserunt quasi explicabo ab quo laborum est et dolorum voluptas voluptate vel commodi animi nobis. Molestiae rem quam aut quas temporibus ipsa cupiditate quaerat excepturi nemo sit et dolorem nam occaecati maxime. Eum autem occaecati est itaque fuga veritatis qui quidem dolor eligendi recusandae totam atque voluptas tempora suscipit. Voluptas ut optio commodi perferendis ducimus iste vero ipsum vel quaerat enim tempore et nesciunt eos ea. Provident exercitationem architecto esse qui accusantium sapiente nobis corrupti laborum aliquam voluptatibus ut sit repellendus totam eos. Earum fugit nemo ut et et vitae mollitia tempore et dicta corporis quod pariatur iusto magni iusto. Voluptatem sunt et rem et minus similique tenetur qui distinctio recusandae perspiciatis nesciunt amet pariatur officia eligendi. Aliquam dolor quia in eum sunt magni nemo aut non quis magnam eum nam qui voluptas modi. Maiores a voluptatem dicta harum rerum corporis expedita ipsam voluptates laboriosam esse iure et ut labore vitae. Mollitia sed necessitatibus voluptate alias reprehenderit et temporibus excepturi optio nulla illum voluptatum reprehenderit minima dolores accusamus. Dolor laboriosam tempore molestiae quod ut dolorem doloribus voluptatem dolore voluptatum qui repellat corrupti natus modi natus. Cumque commodi voluptatem repudiandae ullam nisi ut qui voluptatem cupiditate eum corporis consectetur iste exercitationem ut dignissimos. Accusamus deleniti nostrum aut odit facilis pariatur odit tempora in dolorem vero eius qui maiores architecto aut.<br />Voluptas sapiente ullam recusandae suscipit at ut ducimus voluptates explicabo odit voluptas dolor iste nostrum ea asperiores. Fuga natus placeat iste esse est beatae cumque voluptas eligendi eveniet ipsa incidunt ipsum quae doloribus voluptas. Qui qui et non qui dignissimos voluptas accusamus id rem aut ut culpa fugit quia velit quia. Libero ut et aut nisi quasi porro autem nesciunt eum consequatur iusto et et et numquam aut. Iusto ut qui quam voluptatibus et qui iusto ratione sunt ipsam voluptate occaecati odit quos mollitia reiciendis. Provident ea rerum id provident consequuntur non in id quos sed ducimus libero cum vero omnis quia. Ut itaque aperiam et voluptas minima omnis ducimus sit alias qui enim asperiores rerum asperiores sed eos. Facilis ex magnam et sapiente asperiores eligendi sit dignissimos qui voluptatem omnis ad ea in dolores voluptatum. Voluptas cumque numquam ipsa facilis saepe libero culpa aliquam qui enim sequi vel dolorum est architecto neque. Est quaerat accusantium aperiam molestiae culpa est provident nostrum optio sint distinctio dolorem sint libero neque quia. Provident ut illum vitae pariatur ducimus commodi et excepturi distinctio sint quidem aut aut aliquam tenetur dolorum. Autem doloribus ut sunt alias earum nemo dignissimos nisi reprehenderit et et veritatis repudiandae architecto suscipit rerum. At labore et ea aliquid omnis eveniet aut debitis cupiditate veniam totam quam corporis nostrum sint fugiat.<br />Autem harum voluptatibus sunt laboriosam quas asperiores quis voluptatem est saepe debitis voluptas iste sequi explicabo voluptatem. Consequuntur impedit vel debitis rem dolorem consectetur sed occaecati aut ab inventore aut est culpa quia optio. Molestiae similique explicabo atque provident id odit possimus quae molestiae omnis repudiandae quod voluptatem beatae placeat animi. Porro et id aliquam nam ut vero facilis eos minima quia soluta architecto non officia in voluptas. Sequi eius suscipit in qui totam ut assumenda iusto expedita architecto omnis dignissimos sint dolor aliquam vel. Ut quidem nesciunt in rerum exercitationem provident dolores corrupti in aperiam corporis optio est non et aut. Doloribus voluptate fugit facilis molestiae nisi animi iusto laborum et vero aspernatur quibusdam omnis tempore placeat placeat. Pariatur quam nesciunt impedit ut fugiat deserunt cumque adipisci iste aperiam possimus non laudantium repellendus odit dolor. Dolor eaque dolorem repellat nihil rerum optio veritatis facere voluptate ipsam qui voluptas debitis rerum quas dignissimos. Enim provident officia sunt eos in ut aperiam ut quam assumenda est excepturi sit in facilis nulla. Deleniti fuga modi illo est ea error est vitae quia consequuntur labore quod adipisci doloribus ut aliquam. Illum temporibus officia quidem perferendis eos ab ullam nulla impedit dignissimos minus quod dicta ab autem velit. Consequatur et ullam tempore doloremque enim adipisci optio quia aut consequatur esse ad voluptate autem nihil ut.<br />Inventore aliquid saepe doloribus voluptas voluptas saepe minus dolores numquam sed eligendi dicta cupiditate aut nemo non. Sunt et voluptas tempore voluptatem exercitationem vel dolores debitis minus pariatur eligendi dolorem et fugit dolorum labore. Laboriosam quas architecto dicta modi est quam rerum quidem et distinctio dolorem porro quis consequatur sit qui. Velit quis ea aut ipsam odit nemo voluptas ex omnis ratione sit quia eaque quas omnis illum. Est ea sint modi et at sint similique nesciunt amet vitae amet praesentium debitis itaque sapiente nam. Fugiat ut enim nihil sit sint provident fugiat iusto aut esse nihil autem placeat at eos odit. Dolor harum optio eaque ut impedit saepe iure quos aut commodi suscipit consequatur at et aliquam quia. Eos et dolores quis id placeat id odit perferendis quae perferendis veritatis ullam provident voluptatum dicta ullam. Numquam debitis odio sit ut occaecati vitae dicta est qui delectus esse voluptas molestias praesentium quidem est. Autem laborum quibusdam exercitationem ipsa beatae sed sed est temporibus delectus ipsum vitae assumenda dolores eligendi tenetur. Libero eaque et consectetur quam odio voluptate qui sit temporibus doloremque quam in enim ea voluptas qui. Mollitia ut perferendis quia eos quaerat dignissimos facere suscipit id nesciunt qui suscipit accusantium aliquam cum sunt. Assumenda est mollitia odio animi voluptates libero iusto aut omnis reiciendis non praesentium natus ipsa occaecati numquam."
   * ```
   */
  loremIpsumParagraph(paragraphcount: number, sentencecount: number, wordcount: number, paragraphseparator: string): string;

  /**
   * Sentence of the Lorem Ipsum placeholder text used in design and publishing.
   * @returns a random lorem ipsum sentence
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.loremIpsumSentence(13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Accusamus et voluptatum voluptatem nisi nostrum atque molestias reprehenderit alias reiciendis ut eos."
   * ```
   */
  loremIpsumSentence(wordcount: number): string;

  /**
   * Word of the Lorem Ipsum placeholder text used in design and publishing.
   * @returns a random lorem ipsum word
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.loremIpsumWord())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "accusamus"
   * ```
   */
  loremIpsumWord(): string;

  /**
   * Person, place, thing, or idea, named or referred to in a sentence.
   * @returns a random noun
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.noun())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "hand"
   * ```
   */
  noun(): string;

  /**
   * Ideas, qualities, or states that cannot be perceived with the five senses.
   * @returns a random noun abstract
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.nounAbstract())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "philosophy"
   * ```
   */
  nounAbstract(): string;

  /**
   * Group of animals, like a 'pack' of wolves or a 'flock' of birds.
   * @returns a random noun collective animal
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.nounCollectiveAnimal())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "school"
   * ```
   */
  nounCollectiveAnimal(): string;

  /**
   * Group of people or things regarded as a unit.
   * @returns a random noun collective people
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.nounCollectivePeople())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "bevy"
   * ```
   */
  nounCollectivePeople(): string;

  /**
   * Group of objects or items, such as a 'bundle' of sticks or a 'cluster' of grapes.
   * @returns a random noun collective thing
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.nounCollectiveThing())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "wad"
   * ```
   */
  nounCollectiveThing(): string;

  /**
   * General name for people, places, or things, not specific or unique.
   * @returns a random noun common
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.nounCommon())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "company"
   * ```
   */
  nounCommon(): string;

  /**
   * Names for physical entities experienced through senses like sight, touch, smell, or taste.
   * @returns a random noun concrete
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.nounConcrete())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "train"
   * ```
   */
  nounConcrete(): string;

  /**
   * Items that can be counted individually.
   * @returns a random noun countable
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.nounCountable())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "weekend"
   * ```
   */
  nounCountable(): string;

  /**
   * Word that introduces a noun and identifies it as a noun.
   * @returns a random noun determiner
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.nounDeterminer())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "this"
   * ```
   */
  nounDeterminer(): string;

  /**
   * Phrase with a noun as its head, functions within sentence like a noun.
   * @returns a random noun phrase
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.nounPhrase())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "a brave fuel"
   * ```
   */
  nounPhrase(): string;

  /**
   * Specific name for a particular person, place, or organization.
   * @returns a random noun proper
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.nounProper())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Rowan Atkinson"
   * ```
   */
  nounProper(): string;

  /**
   * Items that can't be counted individually.
   * @returns a random noun uncountable
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.nounUncountable())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "butter"
   * ```
   */
  nounUncountable(): string;

  /**
   * Distinct section of writing covering a single theme, composed of multiple sentences.
   * @returns a random paragraph
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.paragraph(13,13,17,"\u003cbr /\u003e"))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Quickly up brace lung anyway then bravo mirror hundreds his party nobody person anything wit she from. Above Chinese those choir toilet as you of other enormously enough indeed your muster bevy snow grumpy. Idea whatever one Lilliputian hers towards hers knock party Beninese eventually beyond unexpectedly regularly badly dizzying next. Huh you literature kindness might band first where substantial you pleasure at i.e. whom his very when. All permission whose agree this live cane does these e.g. differs some other ball up where back. Shorts where you whomever us whomever daily hard awfully product whichever generously our to ourselves since frequently. Boxers Turkishish healthily alas secondly this most abroad week brush behalf your his of the us weakly. Ours wisp yourselves give bunch down account closely why lately as fortnightly that whom over clean those. Together an for so wow should it today these that rightfully plate perfectly with still sometimes highly. Fear e.g. bevy their though practically with point company inspect how someone each any class anybody slide. First way regularly whom Hindu softly obesity neither strange those luxury was yay as your just daily. To hourly earlier this yet moreover had day ourselves as example bless pretty whatever me ahead heap. Raise above whose outside everybody Turkishish than couple she could outside troupe only alternatively occasionally neither horror.<br />Her string innocence behind other your theirs lead of his firstly so whomever hers far on either. I.e. infrequently highly opposite for cackle those either they a next each over another which which cleverness. Stemmed in few before this ourselves between alive covey sheaf significant always jump he weekly everyone their. Ouch afterwards cost out part herself our the finally hastily all across their some someone closely pipe. Everyone range those in how fuel near ingeniously interrupt whose amused neither whereas your here talent switch. Patiently our neatly Iranian my in that i.e. himself could wow magic yellow anyone each those occasion. Conclude ship somebody off room am these a our a secondly lastly pray anyway wait these this. Of now from whenever stupidly heavy pod yearly us we before farm of eventually whoever could any. Of recline hourly without should phew since whom determination often which inside who improvised fatally hurt heavily. Does him on horror early along whomever rather you is freedom as case couple full patience daily. Whose ask learn you in is could these neither some you additionally those herself lean bale powerfully. Bahrainean herself honestly part his well because were eye itself under so which us Buddhist bread comb. This no sit out between sheaf why whoa busy where huh significant daily the seldom to close.<br />Ship as these i.e. down what me he child bevy your with though hers completely therefore both. Case rather between posse any danger there this Muscovite her onto how disturbed now other warmly envy. Ever they monthly nobody disregard but murder she troop firstly her myself several daily sing vilify that. Herself every child rather downstairs the oops had exaltation tweak so itself jump oops finally extremely lastly. Number outside usually behind nevertheless often empty nevertheless as instance generally float i.e. that the those egg. Positively besides that to whereas wade silly all enable through completely yesterday daily finally rather usually our. This himself country leap for into i.e. yours me end alas then for next must hers eventually. Yourselves which inquire of been everybody pack did yourselves enormously though destroy battery bevy tennis yours perfectly. Elephant close any to fiercely light elegance what i.e. hers myself here whoa party scheme wisp a. Hey daily timing slide out Amazonian till does who first its driver scream program was hourly pod. Down without upon which this would straightaway normally ourselves next our last any whatever down still bow. Party write which sore contradict under person car recline has disregard still hey whom its for every. Into any those data rarely to dig them next now back yikes as upon upon whoever another.<br />Cap should exaltation result embarrass trend wear tomorrow today did about no everything i.e. solemnly whatever without. Any that what from you cheese open to somebody a herself here Salvadorean congregation where least rarely. On to to well ball speed problem than far insufficient should everyone coffee whose lastly foot till. Width hmm regularly many accordingly should these suitcase what these whichever ours we one these straight life. Yay each it everyone suspiciously quarterly Kyrgyz somebody anyone in gas towards oops however happiness plenty yours. Of once nightly play Portuguese each snarl upon just himself since daily seriously riches over they child. Unusual meanwhile might our were wisdom weekly Christian over way whoever myself bowl why most neither anyway. It respect had beautifully Barbadian in totally staff that fact phew over earlier nevertheless heap its they. Cruel till that consequently many mustering instead today quarterly why another say with freeze talk first ever. Wit have till frequently under hence too of must who whom spread just remote but cook daily. Are loneliness hence several slowly company which him yay must how heat when none of himself suit. Extremely outrageous where several from still whom next however foolish religion climb provided ours bridge these is. Any preen out what quite advantage that muster everything dream including whose myself beyond Burkinese hourly yourselves.<br />Theirs from who gee in youth table you but oops party think their task too of should. Whose company Italian these eek daily hey your patrol Sri-Lankan camp weekly mine have those Guyanese later. Phew research therefore pack gladly these must little class terrible tweak are for without theirs this nobody. Who one shall nobody sheaf then daily whomever anyone whose straightaway whose yet before for long thing. Bathe secondly instance what aha you your meanwhile these why her someone normally can her line choir. Its gain exemplified have almost now to aha itself alive spite herself what bunch today lastly train. Care afterwards weekly on rise meanwhile themselves first quite lively monthly throw such anxiously courageously way words. Whose here whomever wisp it oops anybody party far group why had Portuguese set terribly sneeze each. A fall batch even would but tomorrow every is my where Burkinese weekly yikes therefore the mine. Upon at nightly utterly over why dream orchard a me previously without cruel next hedge something extremely. Yourselves nobody Tibetan whichever nevertheless rarely her that painfully thing trade out have why nervously religion kneel. Roll tomorrow what this cloud rarely myself this swim even specify place being book her write its. Whoa so lastly e.g. is those dynasty Sudanese delightful it shall her in appetite that elegance laughter.<br />Me huh Thatcherite from your we after splendid he those pain whom before confusing my next near. Student these roughly am awful troop peace quarterly quarterly select horror at yourselves but Darwinian it a. Bravo whose face here her consequently she hey delay address therefore your seldom that might where generally. Upon her both forest are practically brilliance besides it hers upon circumstances usually its fascinate desk regularly. Scream before inside ourselves straightaway gorgeous which any might generosity cry next this does there then black. Generally we mine before this upon hastily that fire publicity however finally outside whomever do enough reel. Ingeniously within this be nearly whereas in though hers conclude collection as was yet themselves depending to. Can that relent problem swiftly our there Iraqi whose yourself frail positively grease brother then hard yours. But we might hers thought nervous being hmm these your these can soup over offend farm were. Where helpless when toothbrush eventually Thai which regularly I many sometimes soon next therefore to by win. On the then throughout though of party several us that always part pronunciation example several fortnightly anybody. Dream mob accept unlock fuel example to extremely galaxy Slovak traffic he Russian team another die she. Who of beauty eager her lips on swim has guilt as for which in practically under theirs.<br />Angrily eventually where forgive this myself yourself been why nevertheless there under body water whose due as. Oops bevy husband idea fight inside theirs of week angrily wow width seriously according these horror it. Sheep growth lady earlier fascinate behind wait selfishly game those when bus away finally accident fondly out. Appetite in nothing smoothly pod regiment between e.g. nightly pod brace that of win should hey may. Cast anyone so even him sheaf of vision today whenever along sadly when gee they patrol any. You myself shout life every now ahead both those softly instance Polish will teach how there whichever. Group it regularly government part pollution milk alas friendship first nice whomever according constantly usually everything move. Child love hand for usually had myself yours harm width these who sit am smell eat next. Along had that with catalog whose sometimes between crew straightaway everybody in upon kindly our wiggle him. Oops ever at panic brain eek in candy cash all to shout gallop under soup others this. Box alternatively her protect herself to him equipment nightly forest yourself moreover crawl these as to with. Mine indoors where according whoever revolt ours one could Viennese archipelago is Kyrgyz fortnightly open crowd you. Of some weekly cackle door her it never what you of tonight wisp himself always nightly a.<br />Water ourselves to upon Afghan regularly yesterday has panther others those me been here any pause themselves. Out weary theirs themselves extremely themselves rather yesterday myself rarely then first e.g. ours you rarely absolutely. Quarterly what juice posse then what highly place but am couple without I occasionally win you monthly. Alternatively remain it gown it already yourselves gee where woman change there along certain an here for. Horde as lately ingeniously decidedly that it easily none it next those mortally before hedge frankly who. Sari quite Himalayan bouquet whoa clap selfish somewhat me life when together his energetic instead sew where. Its solitude group walk downstairs yours next close that brilliance where fiction from secondly finally busy weekly. Later troupe sternly early until tough due secondly importance this here hatred deeply quarterly e.g. lean have. Without mustering ourselves what fancy nothing I ours yay pod ourselves now Ecuadorian those heavy brilliance bathe. About woman retard how absolutely about man besides that despite might double them daily sharply whose gee. These exemplified of abroad these (space) down hers lot the which some others annoyance of ours provided. Fascinate quizzical host equally rush normally patiently awkwardly wad ourselves less some anything at in in any. Week few alternatively huh our due usually was any will batch secondly whom normally sedge reassure he.<br />Socks should shiny never play hand scold archipelago lastly everything should be disregard as normally of these. Brace outside shake this it grasp this but by anywhere project that its is now their oil. Secondly that ourselves cautiously therefore these never alas both monthly everybody pod selfishly had ourselves theirs that. This finally fear scarcely his outside each truthfully is of aha ever to nevertheless himself such are. What whereas when then it bag behind bikini straightaway tomorrow today a tomorrow enough Indonesian for next. Swimming but words usually flour finally fortnightly full grammar any all his yourself since has whose these. Then group Peruvian yet which about Turkmen ours of slavery say whom scream whirl a group though. Whatever whichever selfishly provided there foolishly Plutonian young shower quarterly yourselves enthusiastic place elegantly harm each yourselves. Were how might company their may totally where muster depending Malagasy herself innocence research us whoa muster. Her whose safely many where you consequently finally you in does whoever utterly in after these even. Bravely plant besides beneath frequently my to anyone hmm there panic anything weep any taste example whichever. Problem fleet anyone spoon sunglasses this sneeze would grow woman onto it park was moreover couple what. Eek nightly conclude this chest they hers in you be here electricity case she sometimes yay abroad.<br />From rudely however anything consequently how anger annually remove stand as solemnly almost I toothbrush should throw. First however yourself after belong might firstly finally off what for any then has whose she onto. Yellow been therefore upon honestly grapes fantastic idea nevertheless jewelry elegance ugly themselves hang me group bush. Down that group to vision hers it publicity loss then next they aloof naughty Afghan tomorrow that. Would heavy anyone his witty am aha that mine here bad you ourselves wrong crawl whole herself. I.e. to couch badly say these courageously in eye somebody the other you freedom dynasty insufficient nightly. Therefore one awkwardly basket move for whoever leap comb tonight nothing perfect block go it into but. Myself slippers even painfully indoors crawl constantly lastly tweak stay i.e. her whom what us how were. Yourselves huge whichever indeed up their horde year auspicious group somebody does child monthly tomorrow of something. Without board being battery double constantly enlist slavery few it ourselves year highlight for spin you must. Repeatedly hourly place motor by off inside there anybody Turkmen block dig till each now monthly cast. Tough may she abundant tonight yours taxi you shall patrol lastly no am over therefore towards those. Today there still yesterday plant usually sing ouch crew full kiss were throughout monthly frantically alas we.<br />Hmm road yay heat Belgian next cry move sit either tonight does collection now Icelandic table here. Soup never your air what besides summation frantically purse were does indoors daily one this quarterly regularly. Any outside hardly however knock enough frock define straightaway be other next yell horde so whichever crew. Ever bridge away only entertain on it troupe instead whale out than sparse since we occasion Canadian. Repeatedly software speed consequently stagger yourself many shower infrequently mouth number which you that previously which any. Previously cravat disregard eventually well secondly onto by had them band previously when genetics these of preen. Those them of it butter fact in his regularly across annually himself sail which smoke herself frankly. Where repelling delay hiccup army whenever time upon it intimidate hey of before successfully throughout from crack. Than yourselves tensely gee outstanding where battle yourself are shower on so bouquet grasp child peace here. Those brilliance his there he ever that upstairs group regularly it number were whoa nightly party dolphin. Smell does comb pose set her ours inside ride occasionally who must hedge firstly album therefore repel. Furthermore those thing lazy how without page its double of how us everybody half of been their. Would of quarterly still justice magazine gallop bathe indoors buy it hall mob besides those nearly my.<br />I faithful slavery those everyone next its ours of because first this anyone smoke did all has. At include one class government it under of may smell today by then toast additionally which whose. Where seldom someone being sigh respect including someone fragile assistance leap themselves whose moment dream all on. Scarcely numerous to conclude beneath tomorrow had itself himself ourselves lately above as as group straightaway pod. Down mine from nap frequently could his where me throw lastly confusion recline problem oops socks ski. Everyone today your contrast those several rather east but turn whose dishonesty these gown body may dream. Out accordingly usually hers slide inside its any you whole so whose album furniture yours to inside. Swing whoever fade staff library what myself practically hourly your down limp sedge himself in nightly today. How anyway that just credenza my kiss been company how some phew your monthly instance it game. Belief had leggings the place place tomorrow explode recently group that though moreover shall them hers my. Those indeed yet off why everyone whom college throw hey phew army Indian yet courageous her clump. Behind did another tomorrow according conclude door before bookcase cut due provided now a enormously either throughout. Convert army daily quarterly quarterly Hitlerian far team us me so Balinese few enough will moreover theirs.<br />Does dive chest elsewhere what her what that bevy wisp a some whomever spelling one from some. Me on string were that nobody move till relaxation clump been regularly you either ourselves several clothing. How there itchy including metal inadequately strongly bundle that to heap almost whose to though alone where. Stand Parisian his speed besides bowl violence yours maintain pharmacist in Plutonian include fortnightly this up yikes. Indeed Plutonian it what watch while class station limp yesterday solitude there which mine encouraging your you. These move yourselves peep host this the then energetic daily many violin one down that is i.e.. Being hatred accordingly this team that sister relieved where either stealthily journey collection those upon scream alas. Constantly you an point zebra lately her by for it collection behind eventually he alas mustering however. Whom quit mustering party room case these you those usually earlier that nightly muster pause example quarterly. Then there trip flock whale how sit whereas perfectly us lots in his been patience tomorrow Himalayan. Stack Swazi even moreover then over this how almost frankly daily had somewhat he lately homeless just. Somali whose finally that formerly murder there while though bunch for this punctually soap practically money lastly. After still over did auspicious nightly pair hungrily fascinate these which the those whose what hey you."
   * ```
   */
  paragraph(paragraphcount: number, sentencecount: number, wordcount: number, paragraphseparator: string): string;

  /**
   * A small group of words standing together.
   * @returns a random phrase
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.phrase())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "many thanks"
   * ```
   */
  phrase(): string;

  /**
   * Adjective indicating ownership or possession.
   * @returns a random possessive adjective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.possessiveAdjective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "his"
   * ```
   */
  possessiveAdjective(): string;

  /**
   * Words used to express the relationship of a noun or pronoun to other words in a sentence.
   * @returns a random preposition
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.preposition())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "out"
   * ```
   */
  preposition(): string;

  /**
   * Preposition that can be formed by combining two or more prepositions.
   * @returns a random preposition compound
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.prepositionCompound())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "apart from"
   * ```
   */
  prepositionCompound(): string;

  /**
   * Two-word combination preposition, indicating a complex relation.
   * @returns a random preposition double
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.prepositionDouble())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "outside of"
   * ```
   */
  prepositionDouble(): string;

  /**
   * Phrase starting with a preposition, showing relation between elements in a sentence..
   * @returns a random preposition phrase
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.prepositionPhrase())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "of a fuel"
   * ```
   */
  prepositionPhrase(): string;

  /**
   * Single-word preposition showing relationships between 2 parts of a sentence.
   * @returns a random preposition simple
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.prepositionSimple())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "of"
   * ```
   */
  prepositionSimple(): string;

  /**
   * Word used in place of a noun to avoid repetition.
   * @returns a random pronoun
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.pronoun())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "these"
   * ```
   */
  pronoun(): string;

  /**
   * Pronoun that points out specific people or things.
   * @returns a random pronoun demonstrative
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.pronounDemonstrative())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "these"
   * ```
   */
  pronounDemonstrative(): string;

  /**
   * Pronoun that does not refer to a specific person or thing.
   * @returns a random pronoun indefinite
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.pronounIndefinite())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "anyone"
   * ```
   */
  pronounIndefinite(): string;

  /**
   * Pronoun used to ask questions.
   * @returns a random pronoun interrogative
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.pronounInterrogative())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "who"
   * ```
   */
  pronounInterrogative(): string;

  /**
   * Pronoun used as the object of a verb or preposition.
   * @returns a random pronoun object
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.pronounObject())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "you"
   * ```
   */
  pronounObject(): string;

  /**
   * Pronoun referring to a specific persons or things.
   * @returns a random pronoun personal
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.pronounPersonal())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "you"
   * ```
   */
  pronounPersonal(): string;

  /**
   * Pronoun indicating ownership or belonging.
   * @returns a random pronoun possessive
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.pronounPossessive())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "mine"
   * ```
   */
  pronounPossessive(): string;

  /**
   * Pronoun referring back to the subject of the sentence.
   * @returns a random pronoun reflective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.pronounReflective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "herself"
   * ```
   */
  pronounReflective(): string;

  /**
   * Pronoun that introduces a clause, referring back to a noun or pronoun.
   * @returns a random pronoun relative
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.pronounRelative())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "that"
   * ```
   */
  pronounRelative(): string;

  /**
   * Adjective derived from a proper noun, often used to describe nationality or origin.
   * @returns a random proper adjective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.properAdjective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Confucian"
   * ```
   */
  properAdjective(): string;

  /**
   * Adjective that indicates the quantity or amount of something.
   * @returns a random quantitative adjective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.quantitativeAdjective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "several"
   * ```
   */
  quantitativeAdjective(): string;

  /**
   * Statement formulated to inquire or seek clarification.
   * @returns a random question
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.question())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Forage pinterest direct trade pug skateboard food truck flannel cold-pressed?"
   * ```
   */
  question(): string;

  /**
   * Direct repetition of someone else's words.
   * @returns a random quote
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.quote())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "\"Forage pinterest direct trade pug skateboard food truck flannel cold-pressed.\" - Lukas Ledner"
   * ```
   */
  quote(): string;

  /**
   * Set of words expressing a statement, question, exclamation, or command.
   * @returns a random sentence
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.sentence(13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Quickly up brace lung anyway then bravo mirror hundreds his party nobody person."
   * ```
   */
  sentence(wordcount: number): string;

  /**
   * Group of words that expresses a complete thought.
   * @returns a random simple sentence
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.simpleSentence())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "A brave fuel enormously beautifully stack easy day less badly in a bunch."
   * ```
   */
  simpleSentence(): string;

  /**
   * Verb that requires a direct object to complete its meaning.
   * @returns a random transitive verb
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.transitiveVerb())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "bother"
   * ```
   */
  transitiveVerb(): string;

  /**
   * Word expressing an action, event or state.
   * @returns a random verb
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.verb())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "dig"
   * ```
   */
  verb(): string;

  /**
   * Phrase that Consists of a verb and its modifiers, expressing an action or state.
   * @returns a random verb phrase
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.verbPhrase())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "cheerfully cry enormously beautifully with easy day less badly"
   * ```
   */
  verbPhrase(): string;

  /**
   * Basic unit of language representing a concept or thing, consisting of letters and having meaning.
   * @returns a random word
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.word.word())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "quickly"
   * ```
   */
  word(): string;
}

/**
 * Generator with all generator functions for convenient use.
 */
export declare interface Zen {
  /**
   * A bank account number used for Automated Clearing House transactions and electronic transfers.
   * @returns a random ach account number
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.achAccountNumber())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "805388385166"
   * ```
   */
  achAccountNumber(): string;

  /**
   * Unique nine-digit code used in the U.S. for identifying the bank and processing electronic transactions.
   * @returns a random ach routing number
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.achRoutingNumber())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "605388385"
   * ```
   */
  achRoutingNumber(): string;

  /**
   * Verb Indicating a physical or mental action.
   * @returns a random action verb
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.actionVerb())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "smell"
   * ```
   */
  actionVerb(): string;

  /**
   * Residential location including street, city, state, country and postal code.
   * @returns a random address
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.address())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {"Address":"53883 Villageborough, San Bernardino, Kentucky 56992","Street":"53883 Villageborough","City":"San Bernardino","State":"Kentucky","Zip":"56992","Country":"United States of America","Latitude":11.29359,"Longitude":-145.577493}
   * ```
   */
  address(): Record<string,unknown>;

  /**
   * Word describing or modifying a noun.
   * @returns a random adjective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.adjective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "brave"
   * ```
   */
  adjective(): string;

  /**
   * Word that modifies verbs, adjectives, or other adverbs.
   * @returns a random adverb
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.adverb())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "quickly"
   * ```
   */
  adverb(): string;

  /**
   * Adverb that indicates the degree or intensity of an action or adjective.
   * @returns a random adverb degree
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.adverbDegree())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "pretty"
   * ```
   */
  adverbDegree(): string;

  /**
   * Adverb that specifies how often an action occurs with a clear frequency.
   * @returns a random adverb frequency definite
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.adverbFrequencyDefinite())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "annually"
   * ```
   */
  adverbFrequencyDefinite(): string;

  /**
   * Adverb that specifies how often an action occurs without specifying a particular frequency.
   * @returns a random adverb frequency indefinite
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.adverbFrequencyIndefinite())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "rarely"
   * ```
   */
  adverbFrequencyIndefinite(): string;

  /**
   * Adverb that describes how an action is performed.
   * @returns a random adverb manner
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.adverbManner())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "sleepily"
   * ```
   */
  adverbManner(): string;

  /**
   * Phrase that modifies a verb, adjective, or another adverb, providing additional information..
   * @returns a random adverb phrase
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.adverbPhrase())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "too cheerfully"
   * ```
   */
  adverbPhrase(): string;

  /**
   * Adverb that indicates the location or direction of an action.
   * @returns a random adverb place
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.adverbPlace())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "east"
   * ```
   */
  adverbPlace(): string;

  /**
   * Adverb that specifies the exact time an action occurs.
   * @returns a random adverb time definite
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.adverbTimeDefinite())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "now"
   * ```
   */
  adverbTimeDefinite(): string;

  /**
   * Adverb that gives a general or unspecified time frame.
   * @returns a random adverb time indefinite
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.adverbTimeIndefinite())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "late"
   * ```
   */
  adverbTimeIndefinite(): string;

  /**
   * Living creature with the ability to move, eat, and interact with its environment.
   * @returns a random animal
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.animal())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "crow"
   * ```
   */
  animal(): string;

  /**
   * Type of animal, such as mammals, birds, reptiles, etc..
   * @returns a random animal type
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.animalType())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "amphibians"
   * ```
   */
  animalType(): string;

  /**
   * Person or group creating and developing an application.
   * @returns a random app author
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.appAuthor())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Wendell Luettgen"
   * ```
   */
  appAuthor(): string;

  /**
   * Software program designed for a specific purpose or task on a computer or mobile device.
   * @returns a random app name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.appName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Hillbe"
   * ```
   */
  appName(): string;

  /**
   * Particular release of an application in Semantic Versioning format.
   * @returns a random app version
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.appVersion())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "5.3.20"
   * ```
   */
  appVersion(): string;

  /**
   * Measures the alcohol content in beer.
   * @returns a random beer alcohol
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.beerAlcohol())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "6.5%"
   * ```
   */
  beerAlcohol(): string;

  /**
   * Scale indicating the concentration of extract in worts.
   * @returns a random beer blg
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.beerBlg())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "13.4°Blg"
   * ```
   */
  beerBlg(): string;

  /**
   * The flower used in brewing to add flavor, aroma, and bitterness to beer.
   * @returns a random beer hop
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.beerHop())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Nugget"
   * ```
   */
  beerHop(): string;

  /**
   * Scale measuring bitterness of beer from hops.
   * @returns a random beer ibu
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.beerIbu())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "80 IBU"
   * ```
   */
  beerIbu(): string;

  /**
   * Processed barley or other grains, provides sugars for fermentation and flavor to beer.
   * @returns a random beer malt
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.beerMalt())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Roasted barley"
   * ```
   */
  beerMalt(): string;

  /**
   * Specific brand or variety of beer.
   * @returns a random beer name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.beerName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "90 Minute IPA"
   * ```
   */
  beerName(): string;

  /**
   * Distinct characteristics and flavors of beer.
   * @returns a random beer style
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.beerStyle())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "English Brown Ale"
   * ```
   */
  beerStyle(): string;

  /**
   * Microorganism used in brewing to ferment sugars, producing alcohol and carbonation in beer.
   * @returns a random beer yeast
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.beerYeast())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "2035 - American Lager"
   * ```
   */
  beerYeast(): string;

  /**
   * Distinct species of birds.
   * @returns a random bird
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.bird())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "lovebird"
   * ```
   */
  bird(): string;

  /**
   * Cryptographic identifier used to receive, store, and send Bitcoin cryptocurrency in a peer-to-peer network.
   * @returns a random bitcoin address
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.bitcoinAddress())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "1t1xAUWhqY1QsZFAlYm6Z75zxerJ"
   * ```
   */
  bitcoinAddress(): string;

  /**
   * Secret, secure code that allows the owner to access and control their Bitcoin holdings.
   * @returns a random bitcoin private key
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.bitcoinPrivateKey())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "5KgZY1TaSmxpQcUsBAkWXFnidi9UsGRsoQq3dWe4oZz5zrG9VVC"
   * ```
   */
  bitcoinPrivateKey(): string;

  /**
   * Brief description or summary of a company's purpose, products, or services.
   * @returns a random blurb
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.blurb())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Pride"
   * ```
   */
  blurb(): string;

  /**
   * Written or printed work consisting of pages bound together, covering various subjects or stories.
   * @returns a random book
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.book())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {"Title":"The Brothers Karamazov","Author":"Albert Camus","Genre":"Urban"}
   * ```
   */
  book(): Record<string,string>;

  /**
   * The individual who wrote or created the content of a book.
   * @returns a random book author
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.bookAuthor())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Edgar Allan Poe"
   * ```
   */
  bookAuthor(): string;

  /**
   * Category or type of book defined by its content, style, or form.
   * @returns a random book genre
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.bookGenre())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Erotic"
   * ```
   */
  bookGenre(): string;

  /**
   * The specific name given to a book.
   * @returns a random book title
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.bookTitle())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "The Brothers Karamazov"
   * ```
   */
  bookTitle(): string;

  /**
   * Data type that represents one of two possible values, typically true or false.
   * @returns a random boolean
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.boolean())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * true
   * ```
   */
  boolean(): boolean;

  /**
   * First meal of the day, typically eaten in the morning.
   * @returns a random breakfast
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.breakfast())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Ham omelet deluxe"
   * ```
   */
  breakfast(): string;

  /**
   * Random bs company word.
   * @returns a random bs
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.bs())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "24-7"
   * ```
   */
  bs(): string;

  /**
   * Trendy or overused term often used in business to sound impressive.
   * @returns a random buzzword
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.buzzword())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Reverse-engineered"
   * ```
   */
  buzzword(): string;

  /**
   * Wheeled motor vehicle used for transportation.
   * @returns a random car
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.car())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {"Type":"Passenger car compact","Fuel":"CNG","Transmission":"Automatic","Brand":"Daewoo","Model":"Thunderbird","Year":1905}
   * ```
   */
  car(): Record<string,unknown>;

  /**
   * Type of energy source a car uses.
   * @returns a random car fuel type
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.carFuelType())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Ethanol"
   * ```
   */
  carFuelType(): string;

  /**
   * Company or brand that manufactures and designs cars.
   * @returns a random car maker
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.carMaker())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Lancia"
   * ```
   */
  carMaker(): string;

  /**
   * Specific design or version of a car produced by a manufacturer.
   * @returns a random car model
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.carModel())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Tucson 4wd"
   * ```
   */
  carModel(): string;

  /**
   * Mechanism a car uses to transmit power from the engine to the wheels.
   * @returns a random car transmission type
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.carTransmissionType())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Manual"
   * ```
   */
  carTransmissionType(): string;

  /**
   * Classification of cars based on size, use, or body style.
   * @returns a random car type
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.carType())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Passenger car compact"
   * ```
   */
  carType(): string;

  /**
   * Various breeds that define different cats.
   * @returns a random cat
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.cat())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Toyger"
   * ```
   */
  cat(): string;

  /**
   * Famous person known for acting in films, television, or theater.
   * @returns a random celebrity actor
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.celebrityActor())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Ben Affleck"
   * ```
   */
  celebrityActor(): string;

  /**
   * High-profile individual known for significant achievements in business or entrepreneurship.
   * @returns a random celebrity business
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.celebrityBusiness())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Larry Ellison"
   * ```
   */
  celebrityBusiness(): string;

  /**
   * Famous athlete known for achievements in a particular sport.
   * @returns a random celebrity sport
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.celebritySport())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Greg Lemond"
   * ```
   */
  celebritySport(): string;

  /**
   * The specific identification string sent by the Google Chrome web browser when making requests on the internet.
   * @returns a random chrome user agent
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.chromeUserAgent())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Mozilla/5.0 (X11; Linux i686) AppleWebKit/5340 (KHTML, like Gecko) Chrome/40.0.816.0 Mobile Safari/5340"
   * ```
   */
  chromeUserAgent(): string;

  /**
   * Part of a country with significant population, often a central hub for culture and commerce.
   * @returns a random city
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.city())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Hialeah"
   * ```
   */
  city(): string;

  /**
   * Hue seen by the eye, returns the name of the color like red or blue.
   * @returns a random color
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.color())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "MediumVioletRed"
   * ```
   */
  color(): string;

  /**
   * Statement or remark expressing an opinion, observation, or reaction.
   * @returns a random comment
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.comment())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "wow"
   * ```
   */
  comment(): string;

  /**
   * Designated official name of a business or organization.
   * @returns a random company
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.company())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Xatori"
   * ```
   */
  company(): string;

  /**
   * Suffix at the end of a company name, indicating business structure, like 'Inc.' or 'LLC'.
   * @returns a random company suffix
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.companySuffix())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "LLC"
   * ```
   */
  companySuffix(): string;

  /**
   * Word used to connect words or sentences.
   * @returns a random connective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.connective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "for another"
   * ```
   */
  connective(): string;

  /**
   * Connective word used to indicate a cause-and-effect relationship between events or actions.
   * @returns a random connective casual
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.connectiveCasual())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "accordingly"
   * ```
   */
  connectiveCasual(): string;

  /**
   * Connective word used to indicate a comparison between two or more things.
   * @returns a random connective comparitive
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.connectiveComparitive())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "yet"
   * ```
   */
  connectiveComparitive(): string;

  /**
   * Connective word used to express dissatisfaction or complaints about a situation.
   * @returns a random connective complaint
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.connectiveComplaint())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "for example"
   * ```
   */
  connectiveComplaint(): string;

  /**
   * Connective word used to provide examples or illustrations of a concept or idea.
   * @returns a random connective examplify
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.connectiveExamplify())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "accordingly"
   * ```
   */
  connectiveExamplify(): string;

  /**
   * Connective word used to list or enumerate items or examples.
   * @returns a random connective listing
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.connectiveListing())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "for another"
   * ```
   */
  connectiveListing(): string;

  /**
   * Connective word used to indicate a temporal relationship between events or actions.
   * @returns a random connective time
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.connectiveTime())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "until then"
   * ```
   */
  connectiveTime(): string;

  /**
   * Nation with its own government and defined territory.
   * @returns a random country
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.country())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Togo"
   * ```
   */
  country(): string;

  /**
   * Shortened 2-letter form of a country's name.
   * @returns a random country abbreviation
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.countryAbbreviation())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "TG"
   * ```
   */
  countryAbbreviation(): string;

  /**
   * Plastic card allowing users to make purchases on credit, with payment due at a later date.
   * @returns a random credit card
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.creditCard())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {"Type":"Mastercard","Number":"2713883851665706","Exp":"04/32","Cvv":"489"}
   * ```
   */
  creditCard(): Record<string,unknown>;

  /**
   * Three or four-digit security code on a credit card used for online and remote transactions.
   * @returns a random credit card cvv
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.creditCardCVV())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "405"
   * ```
   */
  creditCardCVV(): string;

  /**
   * Date when a credit card becomes invalid and cannot be used for transactions.
   * @returns a random credit card exp
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.creditCardExp())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "10/27"
   * ```
   */
  creditCardExp(): string;

  /**
   * Month of the date when a credit card becomes invalid and cannot be used for transactions.
   * @returns a random credit card exp month
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.creditCardExpMonth())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "07"
   * ```
   */
  creditCardExpMonth(): string;

  /**
   * Year of the date when a credit card becomes invalid and cannot be used for transactions.
   * @returns a random credit card exp year
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.creditCardExpYear())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "25"
   * ```
   */
  creditCardExpYear(): string;

  /**
   * Unique numerical identifier on a credit card used for making electronic payments and transactions.
   * @returns a random credit card number
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.creditCardNumber(["none","how","these","keep","trip","congolese","choir","computer","still","far"],["unless","army","party","riches","theirs","instead","here","mine","whichever","that"],false))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "0"
   * ```
   */
  creditCardNumber(types: string[], bins: string[], gaps: boolean): string;

  /**
   * Unique numerical identifier on a credit card used for making electronic payments and transactions.
   * @returns a random credit card number formatted
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.creditCardNumberFormatted())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "4111-1111-1111-1111"
   * ```
   */
  creditCardNumberFormatted(): string;

  /**
   * Classification of credit cards based on the issuing company.
   * @returns a random credit card type
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.creditCardType())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Mastercard"
   * ```
   */
  creditCardType(): string;

  /**
   * Medium of exchange, often in the form of paper money or coins, used for trade and transactions.
   * @returns a random currency
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.currency())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {"Short":"VEF","Long":"Venezuela Bolivar"}
   * ```
   */
  currency(): Record<string,string>;

  /**
   * Complete name of a specific currency used for official identification in financial transactions.
   * @returns a random currency long
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.currencyLong())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Venezuela Bolivar"
   * ```
   */
  currencyLong(): string;

  /**
   * Short 3-letter word used to represent a specific currency.
   * @returns a random currency short
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.currencyShort())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "VEF"
   * ```
   */
  currencyShort(): string;

  /**
   * Unique identifier for securities, especially bonds, in the United States and Canada.
   * @returns a random cusip
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.cusip())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "S4BL2MVY6"
   * ```
   */
  cusip(): string;

  /**
   * A problem or issue encountered while accessing or managing a database.
   * @returns a random database error
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.databaseError())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {}
   * ```
   */
  databaseError(): string;

  /**
   * Representation of a specific day, month, and year, often used for chronological reference.
   * @returns a random date
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.date("RFC3339"))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "1939-12-01T03:42:03Z"
   * ```
   */
  date(format: string): string;

  /**
   * Random date between two ranges.
   * @returns a random daterange
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.dateRange("1970-01-01","2024-03-13","yyyy-MM-dd"))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "2005-03-22"
   * ```
   */
  dateRange(startdate: string, enddate: string, format: string): string;

  /**
   * 24-hour period equivalent to one rotation of Earth on its axis.
   * @returns a random day
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.day())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 22
   * ```
   */
  day(): number;

  /**
   * Adjective used to point out specific things.
   * @returns a random demonstrative adjective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.demonstrativeAdjective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "these"
   * ```
   */
  demonstrativeAdjective(): string;

  /**
   * Adjective that provides detailed characteristics about a noun.
   * @returns a random descriptive adjective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.descriptiveAdjective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "elated"
   * ```
   */
  descriptiveAdjective(): string;

  /**
   * Sweet treat often enjoyed after a meal.
   * @returns a random dessert
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.dessert())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Lindas bloodshot eyeballs"
   * ```
   */
  dessert(): string;

  /**
   * Small, cube-shaped objects used in games of chance for random outcomes.
   * @returns a random dice
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.dice(13,[5,4,13]))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * [5,3,6,2,5,1,1,4,1,1,1,3,1]
   * ```
   */
  dice(numdice: number, sides: number[]): number[];

  /**
   * Numerical symbol used to represent numbers.
   * @returns a random digit
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.digit())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "0"
   * ```
   */
  digit(): string;

  /**
   * string of length N consisting of ASCII digits.
   * @returns a random digitn
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.digitN(13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "0053883851665"
   * ```
   */
  digitN(count: number): string;

  /**
   * Evening meal, typically the day's main and most substantial meal.
   * @returns a random dinner
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.dinner())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Asian broccoli salad"
   * ```
   */
  dinner(): string;

  /**
   * Various breeds that define different dogs.
   * @returns a random dog
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.dog())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Staffordshire Bullterrier"
   * ```
   */
  dog(): string;

  /**
   * Human-readable web address used to identify websites on the internet.
   * @returns a random domain name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.domainName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "internalenhance.org"
   * ```
   */
  domainName(): string;

  /**
   * The part of a domain name that comes after the last dot, indicating its type or purpose.
   * @returns a random domain suffix
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.domainSuffix())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "info"
   * ```
   */
  domainSuffix(): string;

  /**
   * Liquid consumed for hydration, pleasure, or nutritional benefits.
   * @returns a random drink
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.drink())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Water"
   * ```
   */
  drink(): string;

  /**
   * Electronic mail used for sending digital messages and communication over the internet.
   * @returns a random email
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.email())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "josiahthiel@luettgen.biz"
   * ```
   */
  email(): string;

  /**
   * Digital symbol expressing feelings or ideas in text messages and online chats.
   * @returns a random emoji
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.emoji())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "🐮"
   * ```
   */
  emoji(): string;

  /**
   * Alternative name or keyword used to represent a specific emoji in text or code.
   * @returns a random emoji alias
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.emojiAlias())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "slovakia"
   * ```
   */
  emojiAlias(): string;

  /**
   * Group or classification of emojis based on their common theme or use, like 'smileys' or 'animals'.
   * @returns a random emoji category
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.emojiCategory())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Smileys & Emotion"
   * ```
   */
  emojiCategory(): string;

  /**
   * Brief explanation of the meaning or emotion conveyed by an emoji.
   * @returns a random emoji description
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.emojiDescription())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "disguised face"
   * ```
   */
  emojiDescription(): string;

  /**
   * Label or keyword associated with an emoji to categorize or search for it easily.
   * @returns a random emoji tag
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.emojiTag())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "lick"
   * ```
   */
  emojiTag(): string;

  /**
   * Message displayed by a computer or software when a problem or mistake is encountered.
   * @returns a random error
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.error())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {}
   * ```
   */
  error(): string;

  /**
   * Various categories conveying details about encountered errors.
   * @returns a random error object word
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.errorObjectWord())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {}
   * ```
   */
  errorObjectWord(): string;

  /**
   * Animal name commonly found on a farm.
   * @returns a random farm animal
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.farmAnimal())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Cow"
   * ```
   */
  farmAnimal(): string;

  /**
   * Suffix appended to a filename indicating its format or type.
   * @returns a random file extension
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.fileExtension())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "max"
   * ```
   */
  fileExtension(): string;

  /**
   * Defines file format and nature for browsers and email clients using standardized identifiers.
   * @returns a random file mime type
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.fileMimeType())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "text/html"
   * ```
   */
  fileMimeType(): string;

  /**
   * The specific identification string sent by the Firefox web browser when making requests on the internet.
   * @returns a random firefox user agent
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.firefoxUserAgent())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_9_1 rv:5.0) Gecko/1979-07-30 Firefox/37.0"
   * ```
   */
  firefoxUserAgent(): string;

  /**
   * The name given to a person at birth.
   * @returns a random first name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.firstName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Josiah"
   * ```
   */
  firstName(): string;

  /**
   * Data type representing floating-point numbers with 32 bits of precision in computing.
   * @returns a random float32
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.float32())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 1.9168120387159532e+38
   * ```
   */
  float32(): number;

  /**
   * Float32 value between given range.
   * @returns a random float32 range
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.float32Range(13,13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 13
   * ```
   */
  float32Range(min: number, max: number): number;

  /**
   * Data type representing floating-point numbers with 64 bits of precision in computing.
   * @returns a random float64
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.float64())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 1.012641406418422e+308
   * ```
   */
  float64(): number;

  /**
   * Float64 value between given range.
   * @returns a random float64 range
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.float64Range(13,13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 13
   * ```
   */
  float64Range(min: number, max: number): number;

  /**
   * Edible plant part, typically sweet, enjoyed as a natural snack or dessert.
   * @returns a random fruit
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.fruit())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Avocado"
   * ```
   */
  fruit(): string;

  /**
   * Date that has occurred after the current moment in time.
   * @returns a random futuretime
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.futureTime())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "2024-03-14T03:32:19.316905081+01:00"
   * ```
   */
  futureTime(): string;

  /**
   * Communication failure in the high-performance, open-source universal RPC framework.
   * @returns a random grpc error
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.gRPCError())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {}
   * ```
   */
  gRPCError(): string;

  /**
   * User-selected online username or alias used for identification in games.
   * @returns a random gamertag
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.gamertag())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "BraveArmadillo"
   * ```
   */
  gamertag(): string;

  /**
   * Classification based on social and cultural norms that identifies an individual.
   * @returns a random gender
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.gender())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "male"
   * ```
   */
  gender(): string;

  /**
   * Abbreviations and acronyms commonly used in the hacking and cybersecurity community.
   * @returns a random hacker abbreviation
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.hackerAbbreviation())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "GB"
   * ```
   */
  hackerAbbreviation(): string;

  /**
   * Adjectives describing terms often associated with hackers and cybersecurity experts.
   * @returns a random hacker adjective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.hackerAdjective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "auxiliary"
   * ```
   */
  hackerAdjective(): string;

  /**
   * Noun representing an element, tool, or concept within the realm of hacking and cybersecurity.
   * @returns a random hacker noun
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.hackerNoun())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "application"
   * ```
   */
  hackerNoun(): string;

  /**
   * Informal jargon and slang used in the hacking and cybersecurity community.
   * @returns a random hacker phrase
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.hackerPhrase())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Try to transpile the EXE sensor, maybe it will deconstruct the wireless interface!"
   * ```
   */
  hackerPhrase(): string;

  /**
   * Verbs associated with actions and activities in the field of hacking and cybersecurity.
   * @returns a random hacker verb
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.hackerVerb())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "read"
   * ```
   */
  hackerVerb(): string;

  /**
   * Verb describing actions and activities related to hacking, often involving computer systems and security.
   * @returns a random hackering verb
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.hackeringVerb())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "quantifying"
   * ```
   */
  hackeringVerb(): string;

  /**
   * Auxiliary verb that helps the main verb complete the sentence.
   * @returns a random helping verb
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.helpingVerb())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "are"
   * ```
   */
  helpingVerb(): string;

  /**
   * Six-digit code representing a color in the color model.
   * @returns a random hex color
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.hexColor())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "#bd38ac"
   * ```
   */
  hexColor(): string;

  /**
   * Hexadecimal representation of an 128-bit unsigned integer.
   * @returns a random hexuint128
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.hexUint128())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "0xaa1b0c903d687691402ee58a2330f9c5"
   * ```
   */
  hexUint128(): string;

  /**
   * Hexadecimal representation of an 16-bit unsigned integer.
   * @returns a random hexuint16
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.hexUint16())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "0xaa1b"
   * ```
   */
  hexUint16(): string;

  /**
   * Hexadecimal representation of an 256-bit unsigned integer.
   * @returns a random hexuint256
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.hexUint256())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "0xaa1b0c903d687691402ee58a2330f9c54b727953d2379f94d23ea4cdad195b6a"
   * ```
   */
  hexUint256(): string;

  /**
   * Hexadecimal representation of an 32-bit unsigned integer.
   * @returns a random hexuint32
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.hexUint32())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "0xaa1b0c90"
   * ```
   */
  hexUint32(): string;

  /**
   * Hexadecimal representation of an 64-bit unsigned integer.
   * @returns a random hexuint64
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.hexUint64())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "0xaa1b0c903d687691"
   * ```
   */
  hexUint64(): string;

  /**
   * Hexadecimal representation of an 8-bit unsigned integer.
   * @returns a random hexuint8
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.hexUint8())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "0xaa"
   * ```
   */
  hexUint8(): string;

  /**
   * Paragraph showcasing the use of trendy and unconventional vocabulary associated with hipster culture.
   * @returns a random hipster paragraph
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.hipsterParagraph(13,13,17,"\u003cbr /\u003e"))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Offal forage pinterest direct trade pug skateboard food truck flannel cold-pressed church-key keffiyeh wolf pop-up jean shorts before they sold out hoodie roof. Portland intelligentsia gastropub tumblr try-hard offal pork belly jean shorts freegan umami marfa mumblecore food truck gluten-free stumptown keytar locavore. Organic forage post-ironic YOLO crucifix occupy deep v skateboard put a bird on it selvage cornhole 8-bit aesthetic squid tacos waistcoat forage. Food truck whatever YOLO sustainable normcore yr brunch keytar humblebrag pickled humblebrag pour-over drinking bicycle rights ethical pinterest crucifix. Cardigan paleo disrupt food truck hella Godard humblebrag keytar cornhole sriracha occupy twee bicycle rights kickstarter umami pabst wayfarers. Flannel pour-over truffaut cardigan salvia gastropub vinegar wayfarers schlitz loko meh pop-up iPhone stumptown cardigan mustache hashtag. Tofu tumblr green juice shoreditch skateboard tofu seitan tote bag readymade actually master gastropub banjo banjo artisan banh mi gastropub. Salvia tousled blog kale chips +1 taxidermy sustainable wolf mustache readymade microdosing kombucha hoodie ugh blue bottle goth humblebrag. Wayfarers truffaut bespoke irony vegan offal knausgaard kombucha Wes Anderson dreamcatcher readymade 8-bit pug shoreditch whatever bushwick letterpress. Knausgaard +1 occupy gastropub cronut disrupt VHS tousled plaid bushwick ramps biodiesel knausgaard venmo authentic neutra scenester. Tacos loko 90's austin gastropub deep v YOLO PBR&B hashtag polaroid mustache blue bottle occupy marfa messenger bag sustainable venmo. Photo booth cronut banjo portland paleo migas Wes Anderson etsy blog food truck keytar iPhone butcher fashion axe fashion axe pabst jean shorts. Street iPhone whatever selfies cred tattooed vice kogi Thundercats tumblr roof photo booth you probably haven't heard of them +1 shoreditch whatever VHS.<br />Marfa keffiyeh trust fund meh quinoa street loko trust fund bitters pitchfork literally pop-up swag crucifix mustache etsy chartreuse. Crucifix skateboard authentic pop-up vinyl truffaut crucifix aesthetic pour-over artisan occupy tote bag vice hoodie truffaut cold-pressed semiotics. Hella seitan umami stumptown waistcoat hashtag ramps shoreditch whatever artisan pug taxidermy cornhole Godard narwhal synth art party. Tacos letterpress tofu letterpress pork belly chicharrones irony occupy pug sartorial slow-carb carry pork belly authentic kale chips fanny pack shabby chic. Chicharrones shabby chic lumbersexual helvetica mumblecore loko cold-pressed fashion axe forage distillery fingerstache franzen wayfarers ethical street shoreditch lo-fi. Pickled goth hella pop-up wolf banjo chartreuse you probably haven't heard of them twee selfies street meggings locavore you probably haven't heard of them irony cronut drinking. Kickstarter kombucha semiotics hashtag typewriter cornhole flexitarian ugh selfies next level waistcoat bicycle rights you probably haven't heard of them beard offal keytar letterpress. Post-ironic occupy locavore bespoke ugh yr gastropub vice tattooed fingerstache organic wayfarers narwhal gentrify try-hard sustainable pork belly. Vinyl jean shorts raw denim vinegar iPhone try-hard distillery meh fingerstache tattooed five dollar toast chia gluten-free schlitz pitchfork aesthetic sustainable. Messenger bag selvage vinegar try-hard tumblr squid kickstarter crucifix brooklyn put a bird on it plaid flexitarian gastropub hashtag meggings dreamcatcher tilde. Poutine disrupt loko food truck sriracha stumptown 90's Wes Anderson keffiyeh swag photo booth trust fund master tattooed ramps actually pour-over. Scenester goth gluten-free carry listicle Godard salvia XOXO everyday tousled raw denim normcore irony iPhone dreamcatcher taxidermy drinking. Umami green juice food truck helvetica slow-carb cronut vinegar typewriter ethical mustache hoodie sustainable cleanse typewriter echo cronut organic.<br />Typewriter ennui pork belly street swag sriracha ramps tilde sustainable tousled pug hashtag typewriter hashtag dreamcatcher cray literally. Master listicle salvia wolf banjo flannel cornhole tote bag try-hard flexitarian seitan pabst normcore austin polaroid XOXO brooklyn. Slow-carb salvia put a bird on it cardigan hella pickled polaroid tilde pabst fixie neutra tofu 8-bit freegan distillery microdosing craft beer. Viral five dollar toast sustainable Wes Anderson green juice etsy +1 squid cray pork belly jean shorts distillery bicycle rights banjo humblebrag ugh raw denim. Pabst asymmetrical lomo lumbersexual 90's chartreuse messenger bag try-hard bicycle rights literally bespoke five dollar toast quinoa intelligentsia jean shorts lumbersexual whatever. Cardigan slow-carb celiac meh tattooed biodiesel organic carry cornhole ennui tumblr humblebrag YOLO beard 8-bit tilde bicycle rights. Blue bottle PBR&B cleanse Wes Anderson marfa fanny pack blue bottle church-key chartreuse portland shoreditch crucifix iPhone direct trade everyday cliche 8-bit. Butcher mixtape church-key migas readymade shabby chic tacos Thundercats 8-bit forage sustainable salvia heirloom williamsburg trust fund forage austin. Keffiyeh post-ironic occupy knausgaard kitsch chillwave cornhole meggings single-origin coffee cronut intelligentsia VHS occupy poutine PBR&B brunch knausgaard. Keytar DIY knausgaard salvia poutine cray blue bottle biodiesel umami trust fund slow-carb distillery celiac biodiesel dreamcatcher park photo booth. Kinfolk brunch hella chia hammock ugh +1 farm-to-table XOXO loko green juice meggings intelligentsia cornhole brooklyn loko vegan. Cliche ennui pork belly migas biodiesel truffaut irony small batch synth goth artisan post-ironic 3 wolf moon church-key tote bag bicycle rights PBR&B. Cold-pressed occupy put a bird on it brunch cronut farm-to-table lumbersexual carry 90's artisan flannel 8-bit williamsburg leggings viral mustache selvage.<br />Loko yr distillery offal truffaut pour-over +1 Yuccie mumblecore ugh scenester try-hard iPhone kombucha hoodie franzen irony. Sustainable 90's Yuccie retro squid authentic loko fixie polaroid Thundercats +1 kitsch paleo selfies tousled messenger bag slow-carb. Fanny pack selvage plaid photo booth asymmetrical stumptown polaroid echo squid artisan bushwick neutra knausgaard pour-over pour-over ugh meh. Wes Anderson portland carry selvage schlitz authentic cronut +1 kogi ennui vegan bicycle rights organic vice lumbersexual shabby chic meggings. Leggings literally fingerstache brooklyn bicycle rights keffiyeh ennui Yuccie pop-up hammock mustache kombucha banjo vice 90's Wes Anderson celiac. Put a bird on it fanny pack neutra keytar wayfarers meh cold-pressed flexitarian mlkshk keffiyeh XOXO Yuccie chambray raw denim tote bag skateboard normcore. Synth photo booth chillwave flannel before they sold out tacos typewriter distillery 90's biodiesel vinyl YOLO try-hard lomo put a bird on it pour-over chicharrones. Vice next level narwhal XOXO portland vinyl Godard sustainable marfa master mustache seitan trust fund hella sartorial try-hard blue bottle. Locavore literally irony polaroid tofu selfies VHS church-key Yuccie tousled street health +1 whatever blue bottle chambray narwhal. Aesthetic offal cronut try-hard letterpress tote bag slow-carb gastropub pinterest cliche hoodie craft beer green juice gentrify mumblecore iPhone butcher. Marfa mlkshk goth direct trade aesthetic kinfolk franzen Godard fashion axe heirloom bicycle rights tousled art party master selfies master truffaut. XOXO ugh occupy wolf loko celiac helvetica street fingerstache plaid lumbersexual typewriter park messenger bag fashion axe freegan neutra. Disrupt helvetica pinterest meggings before they sold out sriracha VHS listicle trust fund street echo truffaut brunch loko pop-up vegan single-origin coffee.<br />Meditation mlkshk trust fund swag roof asymmetrical venmo hella waistcoat hashtag brunch mixtape celiac chartreuse intelligentsia occupy cardigan. Blue bottle plaid cray pinterest 90's wayfarers meggings everyday DIY swag flannel distillery roof skateboard venmo truffaut craft beer. Flexitarian skateboard marfa lomo Yuccie franzen pabst portland pork belly pour-over bespoke cold-pressed everyday organic venmo 90's banjo. Normcore kombucha biodiesel pop-up kogi sriracha 8-bit distillery dreamcatcher iPhone tofu migas chillwave viral photo booth seitan cred. Jean shorts +1 raw denim williamsburg offal cray church-key listicle venmo direct trade Yuccie readymade polaroid shoreditch twee next level cred. Cardigan salvia meggings vice butcher authentic butcher pinterest photo booth try-hard loko bushwick tilde tousled lumbersexual gastropub occupy. Freegan irony microdosing poutine retro wayfarers goth intelligentsia artisan pabst hammock before they sold out bitters brunch try-hard tacos polaroid. Migas slow-carb art party hammock art party slow-carb celiac mlkshk shabby chic tacos chicharrones scenester lo-fi pickled actually disrupt vice. Cray taxidermy crucifix artisan meditation quinoa street loko austin everyday DIY waistcoat sustainable lo-fi organic forage pitchfork. Retro etsy you probably haven't heard of them synth pork belly pabst flannel distillery Godard knausgaard loko actually iPhone Godard scenester DIY offal. Health meh twee williamsburg you probably haven't heard of them organic listicle swag bicycle rights austin YOLO ethical mixtape cray sustainable austin neutra. Narwhal tote bag cred art party cliche cardigan leggings paleo hashtag fingerstache leggings carry ugh twee distillery mixtape mumblecore. Disrupt hoodie paleo selfies cliche ennui health truffaut single-origin coffee pabst franzen cold-pressed gluten-free banh mi small batch meh YOLO.<br />Health knausgaard vinegar intelligentsia art party venmo listicle heirloom post-ironic truffaut church-key knausgaard tousled chartreuse gentrify 90's beard. Drinking goth squid cray Wes Anderson kogi +1 polaroid umami humblebrag marfa marfa portland venmo lo-fi knausgaard microdosing. Mumblecore lumbersexual normcore banjo shabby chic umami Wes Anderson salvia pabst leggings locavore fixie ethical mixtape waistcoat trust fund art party. Church-key paleo mustache knausgaard flannel dreamcatcher forage humblebrag cardigan small batch truffaut viral freegan church-key austin tattooed kitsch. 8-bit brunch roof Godard Wes Anderson direct trade blue bottle cray lomo kogi kitsch Wes Anderson vinegar slow-carb sartorial bushwick vice. Bespoke twee before they sold out freegan drinking cred ugh umami photo booth intelligentsia truffaut beard leggings locavore asymmetrical pabst aesthetic. Pickled kinfolk helvetica 8-bit flexitarian VHS brooklyn art party wolf asymmetrical swag kitsch hoodie dreamcatcher post-ironic scenester butcher. Celiac portland food truck franzen celiac put a bird on it pour-over echo single-origin coffee ennui hashtag freegan readymade scenester master photo booth deep v. Narwhal lomo gastropub +1 tumblr semiotics schlitz bespoke salvia ethical post-ironic VHS green juice green juice pinterest schlitz cornhole. Fingerstache fanny pack distillery pickled 8-bit fanny pack pitchfork polaroid bushwick artisan Godard ugh irony meggings migas meditation crucifix. Hashtag cold-pressed you probably haven't heard of them asymmetrical five dollar toast messenger bag cray +1 lomo readymade shabby chic organic lomo retro flexitarian venmo heirloom. Photo booth hammock fashion axe slow-carb deep v cleanse hella vinyl organic Godard helvetica typewriter cold-pressed cray selvage readymade pour-over. Pork belly disrupt XOXO gentrify fanny pack pabst cliche brooklyn fashion axe pug whatever irony raw denim blue bottle schlitz etsy organic.<br />Forage seitan typewriter VHS kogi pickled umami neutra chicharrones banh mi pabst carry chillwave mlkshk shabby chic pour-over mustache. Quinoa wayfarers park vice iPhone authentic celiac literally lo-fi whatever seitan banjo taxidermy iPhone flannel mumblecore VHS. Pug twee slow-carb celiac chicharrones keffiyeh neutra roof skateboard biodiesel mlkshk pour-over schlitz before they sold out beard hella chillwave. Heirloom paleo flexitarian stumptown leggings mustache messenger bag everyday roof pickled selfies taxidermy direct trade asymmetrical you probably haven't heard of them green juice bushwick. Waistcoat chia lomo tofu carry DIY franzen iPhone viral humblebrag vinegar forage dreamcatcher street aesthetic narwhal ramps. Bitters neutra cardigan cardigan 90's taxidermy retro swag VHS everyday meditation portland scenester tattooed salvia goth small batch. Neutra migas intelligentsia cred craft beer intelligentsia five dollar toast irony locavore etsy pug scenester pickled slow-carb +1 pabst scenester. Farm-to-table chartreuse occupy swag semiotics farm-to-table cred etsy readymade vice mumblecore organic put a bird on it street next level brooklyn pork belly. Trust fund pour-over park before they sold out meditation art party narwhal pork belly bicycle rights swag trust fund Yuccie loko ramps green juice intelligentsia etsy. Mustache tumblr chillwave cornhole single-origin coffee meh umami schlitz microdosing selvage synth 8-bit carry fanny pack VHS tacos sartorial. Asymmetrical organic austin put a bird on it direct trade park flexitarian cred deep v echo tote bag ramps pitchfork kombucha mixtape stumptown intelligentsia. Skateboard paleo hammock offal direct trade asymmetrical Godard tilde cornhole brunch biodiesel hashtag venmo blog sustainable shoreditch street. Shoreditch migas helvetica cornhole hoodie heirloom hashtag fashion axe mixtape 3 wolf moon cliche microdosing crucifix vinegar roof pickled you probably haven't heard of them.<br />Cliche carry kickstarter hella VHS asymmetrical cray park +1 sustainable crucifix actually direct trade meditation vinyl trust fund shabby chic. Lo-fi crucifix pickled fanny pack synth heirloom meditation synth food truck selfies flexitarian cleanse pickled banjo beard selvage selvage. Fingerstache vinyl asymmetrical Wes Anderson craft beer hella Wes Anderson pug ramps offal freegan mustache cred hammock deep v gentrify knausgaard. Hella viral vinegar food truck green juice tote bag try-hard banh mi direct trade readymade gastropub semiotics raw denim banh mi truffaut vinegar butcher. Waistcoat helvetica freegan goth salvia pop-up pabst viral cliche put a bird on it yr venmo celiac pop-up selvage sartorial helvetica. Selvage sriracha microdosing you probably haven't heard of them readymade polaroid art party pug +1 everyday truffaut messenger bag meggings tote bag tousled fashion axe tilde. Gluten-free paleo asymmetrical dreamcatcher vegan 90's etsy tousled kogi 90's occupy brooklyn asymmetrical XOXO humblebrag ennui Wes Anderson. Asymmetrical austin mixtape austin butcher post-ironic trust fund knausgaard beard raw denim narwhal tacos paleo pabst franzen ugh kinfolk. Wes Anderson master swag chillwave beard pour-over tote bag vice etsy cronut migas umami microdosing fanny pack YOLO tilde meggings. Cronut seitan aesthetic kogi narwhal ennui yr put a bird on it sustainable mumblecore readymade ugh irony paleo +1 hella hella. Raw denim direct trade forage migas readymade kickstarter irony chartreuse intelligentsia pop-up +1 etsy fixie pitchfork pickled semiotics church-key. Fanny pack quinoa occupy bicycle rights meh mustache whatever fanny pack cold-pressed seitan bitters ethical seitan master kitsch bicycle rights cronut. Biodiesel Yuccie hoodie Wes Anderson flexitarian vinyl cliche gastropub occupy letterpress polaroid artisan mixtape everyday semiotics umami church-key.<br />Waistcoat craft beer single-origin coffee forage freegan vinegar ethical portland brunch try-hard farm-to-table venmo semiotics banh mi hashtag brunch mustache. Trust fund cornhole carry portland brunch Wes Anderson tacos trust fund messenger bag beard sartorial VHS PBR&B swag tilde keffiyeh meh. Five dollar toast twee listicle quinoa umami quinoa kale chips cardigan loko XOXO vice ennui wayfarers pop-up locavore keffiyeh narwhal. Lo-fi tumblr meggings farm-to-table semiotics knausgaard skateboard art party seitan celiac austin cardigan YOLO gluten-free tousled banh mi irony. Normcore truffaut chambray locavore gentrify meh cred vice art party leggings blog gentrify heirloom chicharrones vinegar tacos trust fund. Vice DIY skateboard tattooed offal meditation occupy ramps wayfarers fanny pack farm-to-table craft beer sartorial fanny pack humblebrag meggings XOXO. Tote bag gastropub cardigan kickstarter DIY franzen pour-over vinegar street ennui gastropub neutra retro lomo banjo hashtag bespoke. Fanny pack flexitarian swag bespoke biodiesel pug lumbersexual food truck Wes Anderson farm-to-table keffiyeh blog cardigan jean shorts beard artisan meditation. Everyday shoreditch flexitarian master pour-over cornhole vinyl viral butcher bushwick hoodie pug kickstarter brooklyn marfa cold-pressed tousled. Umami roof master bitters brooklyn tattooed organic williamsburg irony narwhal literally pinterest jean shorts intelligentsia taxidermy brooklyn tumblr. DIY neutra umami pug brooklyn heirloom art party chambray leggings fashion axe disrupt YOLO selvage taxidermy gastropub venmo cold-pressed. Asymmetrical carry austin stumptown cardigan banjo kitsch 3 wolf moon chicharrones DIY kogi gastropub crucifix truffaut 8-bit flannel sriracha. Tilde scenester goth taxidermy kale chips shoreditch food truck venmo gluten-free +1 pop-up seitan echo salvia church-key lomo waistcoat.<br />Thundercats pabst listicle chartreuse tilde irony umami carry banjo organic pop-up fashion axe roof scenester intelligentsia cardigan carry. Marfa schlitz photo booth retro shabby chic PBR&B cold-pressed cred pop-up truffaut yr swag kombucha you probably haven't heard of them DIY health venmo. Organic williamsburg literally viral mumblecore farm-to-table church-key leggings hella photo booth viral knausgaard organic kombucha paleo venmo before they sold out. Plaid blog park XOXO deep v vegan distillery irony slow-carb blue bottle scenester iPhone tumblr listicle selfies mlkshk drinking. Lo-fi pug kogi leggings williamsburg distillery YOLO farm-to-table selvage street vinegar whatever VHS you probably haven't heard of them master helvetica viral. Pour-over everyday blue bottle cold-pressed green juice kinfolk sustainable art party synth shoreditch +1 asymmetrical mixtape mixtape kogi cardigan fanny pack. Meggings scenester butcher fanny pack pinterest humblebrag locavore chillwave tousled pitchfork migas listicle flannel loko shoreditch authentic goth. Kinfolk celiac skateboard franzen bicycle rights readymade helvetica selvage chillwave distillery pickled franzen pitchfork taxidermy cold-pressed whatever pug. Sustainable you probably haven't heard of them neutra occupy pop-up health twee lumbersexual umami leggings vegan scenester listicle listicle celiac franzen ennui. Crucifix synth narwhal mustache next level poutine brooklyn cred cliche tacos food truck tumblr wayfarers mixtape health skateboard health. Flexitarian listicle aesthetic pork belly blue bottle williamsburg kale chips taxidermy synth try-hard echo neutra waistcoat loko cliche portland blue bottle. Gluten-free kogi 8-bit ethical wolf VHS shoreditch forage chartreuse mlkshk bitters single-origin coffee hoodie schlitz meditation 3 wolf moon blog. Typewriter roof umami meditation fashion axe plaid cornhole cardigan gastropub mumblecore kale chips pabst irony cornhole street master craft beer.<br />Mlkshk ugh tumblr knausgaard YOLO drinking pabst selfies marfa polaroid farm-to-table kinfolk artisan freegan disrupt tousled butcher. Messenger bag truffaut pour-over umami 90's cleanse meh vegan helvetica cleanse readymade chicharrones locavore quinoa narwhal banh mi YOLO. Crucifix put a bird on it Yuccie hella vinyl synth knausgaard gluten-free chambray freegan normcore scenester vinegar lumbersexual vinyl next level street. Paleo organic pork belly hashtag shoreditch blog austin heirloom offal put a bird on it readymade dreamcatcher cleanse blog yr before they sold out asymmetrical. Hashtag meggings banjo tote bag PBR&B mustache etsy microdosing trust fund jean shorts beard tilde vinegar humblebrag ennui meggings fixie. Quinoa pug pork belly keffiyeh irony blue bottle typewriter photo booth banh mi hoodie pickled beard bushwick slow-carb kogi meggings literally. Normcore YOLO etsy pop-up kickstarter hashtag cardigan quinoa yr lo-fi craft beer pinterest pop-up wayfarers selvage blog shoreditch. Seitan pug hella biodiesel synth mixtape everyday wayfarers hella chicharrones banjo craft beer direct trade direct trade tilde intelligentsia loko. Skateboard twee gentrify you probably haven't heard of them fingerstache single-origin coffee meditation trust fund occupy vice waistcoat wolf whatever viral synth asymmetrical poutine. Squid vice intelligentsia tote bag roof quinoa butcher flannel listicle helvetica bespoke retro tacos mustache green juice echo occupy. Deep v before they sold out tote bag bicycle rights 90's slow-carb schlitz actually 90's gentrify letterpress shabby chic shabby chic iPhone lo-fi trust fund cleanse. Typewriter fixie try-hard meggings health flannel cliche kale chips 90's butcher tousled crucifix slow-carb blog actually wolf dreamcatcher. Flexitarian shabby chic asymmetrical synth Yuccie blue bottle 3 wolf moon pour-over etsy fingerstache vice tattooed celiac +1 normcore gastropub keytar.<br />+1 cred selvage cornhole taxidermy biodiesel marfa cronut brunch art party selfies helvetica before they sold out Yuccie tote bag synth you probably haven't heard of them. Pug humblebrag marfa ethical twee drinking messenger bag direct trade chillwave kale chips freegan flexitarian waistcoat brooklyn intelligentsia hoodie waistcoat. Wayfarers sartorial before they sold out kickstarter irony kogi messenger bag chia iPhone flexitarian stumptown tumblr hammock bicycle rights marfa skateboard brunch. Lomo ethical +1 kombucha vegan pour-over taxidermy small batch 8-bit disrupt normcore knausgaard twee locavore flexitarian hoodie art party. Five dollar toast offal mustache typewriter vice iPhone synth etsy vinegar cred next level aesthetic farm-to-table sustainable before they sold out cray truffaut. Street helvetica fixie synth vinegar poutine pabst twee lumbersexual intelligentsia roof food truck chia tilde jean shorts synth carry. Pabst gastropub swag pork belly direct trade paleo mustache flannel hella migas ramps semiotics brooklyn chia ennui next level Yuccie. Shoreditch synth pabst tattooed williamsburg church-key Godard skateboard chillwave trust fund street carry chicharrones viral Yuccie tacos hella. Biodiesel twee synth shabby chic microdosing jean shorts sustainable umami meggings pitchfork keytar fashion axe flexitarian celiac paleo banjo chia. Viral semiotics roof green juice pork belly single-origin coffee paleo artisan cold-pressed fashion axe wolf small batch craft beer cornhole church-key squid irony. Biodiesel polaroid jean shorts 8-bit hashtag craft beer sustainable PBR&B retro church-key everyday fashion axe seitan actually actually brooklyn chillwave. Aesthetic yr bitters blog offal cred next level chartreuse sartorial organic synth kale chips wayfarers pabst actually mustache tofu. Viral migas polaroid iPhone meditation street schlitz etsy fanny pack brooklyn viral vice chia pitchfork messenger bag master chartreuse.<br />Flexitarian trust fund flannel chillwave cardigan pickled cray biodiesel single-origin coffee gastropub authentic pop-up church-key echo celiac meh YOLO. Knausgaard crucifix iPhone hoodie hella knausgaard paleo cray roof messenger bag cliche yr cronut ramps wayfarers meggings artisan. Banh mi tumblr slow-carb next level PBR&B selfies chartreuse quinoa brunch trust fund etsy PBR&B truffaut shabby chic Yuccie whatever distillery. Small batch hella kale chips master ramps organic 8-bit raw denim knausgaard chartreuse banh mi meditation meh occupy mustache gastropub williamsburg. PBR&B sriracha skateboard art party bushwick ugh bitters actually vegan selvage photo booth vinyl sartorial hoodie flexitarian ennui keffiyeh. Fanny pack neutra drinking flannel hammock selfies food truck slow-carb slow-carb artisan loko kinfolk pickled health franzen art party tilde. Bitters swag cronut slow-carb meditation stumptown vinegar chillwave helvetica bicycle rights literally flexitarian lomo franzen skateboard master roof. Cliche vegan schlitz artisan brooklyn heirloom pabst drinking slow-carb tilde chambray master helvetica irony fingerstache semiotics hoodie. Hella Thundercats post-ironic pinterest mixtape irony messenger bag intelligentsia franzen meh fanny pack neutra deep v deep v asymmetrical synth actually. Health messenger bag umami whatever marfa try-hard waistcoat leggings offal bushwick beard chillwave letterpress helvetica kombucha pug heirloom. Fingerstache asymmetrical kitsch ethical ennui green juice waistcoat church-key cleanse butcher viral chia ethical bushwick kale chips listicle salvia. Portland five dollar toast disrupt asymmetrical neutra green juice waistcoat 3 wolf moon polaroid actually fixie cornhole banjo lo-fi distillery disrupt loko. Sriracha tofu try-hard green juice waistcoat selvage cold-pressed next level selfies raw denim quinoa distillery freegan chicharrones butcher skateboard pickled."
   * ```
   */
  hipsterParagraph(paragraphcount: number, sentencecount: number, wordcount: number, paragraphseparator: string): string;

  /**
   * Sentence showcasing the use of trendy and unconventional vocabulary associated with hipster culture.
   * @returns a random hipster sentence
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.hipsterSentence(13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Offal forage pinterest direct trade pug skateboard food truck flannel cold-pressed church-key keffiyeh wolf pop-up."
   * ```
   */
  hipsterSentence(wordcount: number): string;

  /**
   * Trendy and unconventional vocabulary used by hipsters to express unique cultural preferences.
   * @returns a random hipster word
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.hipsterWord())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "offal"
   * ```
   */
  hipsterWord(): string;

  /**
   * An activity pursued for leisure and pleasure.
   * @returns a random hobby
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.hobby())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Candy making"
   * ```
   */
  hobby(): string;

  /**
   * Unit of time equal to 60 minutes.
   * @returns a random hour
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.hour())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 21
   * ```
   */
  hour(): number;

  /**
   * Failure or issue occurring within a client software that sends requests to web servers.
   * @returns a random http client error
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.httpClientError())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {}
   * ```
   */
  httpClientError(): string;

  /**
   * A problem with a web http request.
   * @returns a random http error
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.httpError())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {}
   * ```
   */
  httpError(): string;

  /**
   * Verb used in HTTP requests to specify the desired action to be performed on a resource.
   * @returns a random http method
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.httpMethod())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "HEAD"
   * ```
   */
  httpMethod(): string;

  /**
   * Failure or issue occurring within a server software that recieves requests from clients.
   * @returns a random http server error
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.httpServerError())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {}
   * ```
   */
  httpServerError(): string;

  /**
   * Random http status code.
   * @returns a random http status code
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.httpStatusCode())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 400
   * ```
   */
  httpStatusCode(): number;

  /**
   * Three-digit number returned by a web server to indicate the outcome of an HTTP request.
   * @returns a random http status code simple
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.httpStatusCodeSimple())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 200
   * ```
   */
  httpStatusCodeSimple(): number;

  /**
   * Number indicating the version of the HTTP protocol used for communication between a client and a server.
   * @returns a random http version
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.httpVersion())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "HTTP/1.0"
   * ```
   */
  httpVersion(): string;

  /**
   * Web address pointing to an image file that can be accessed and displayed online.
   * @returns a random image url
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.imageUrl(13,13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "https://picsum.photos/13/13"
   * ```
   */
  imageUrl(width: number, height: number): string;

  /**
   * Adjective describing a non-specific noun.
   * @returns a random indefinite adjective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.indefiniteAdjective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "somebody"
   * ```
   */
  indefiniteAdjective(): string;

  /**
   * Attribute used to define the name of an input element in web forms.
   * @returns a random input name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.inputName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "last_name"
   * ```
   */
  inputName(): string;

  /**
   * Signed 16-bit integer, capable of representing values from 32,768 to 32,767.
   * @returns a random int16
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.int16())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * -4595
   * ```
   */
  int16(): number;

  /**
   * Signed 32-bit integer, capable of representing values from -2,147,483,648 to 2,147,483,647.
   * @returns a random int32
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.int32())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * -15831539
   * ```
   */
  int32(): number;

  /**
   * Signed 64-bit integer, capable of representing values from -9,223,372,036,854,775,808 to -9,223,372,036,854,775,807.
   * @returns a random int64
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.int64())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 5195529898953699000
   * ```
   */
  int64(): number;

  /**
   * Signed 8-bit integer, capable of representing values from -128 to 127.
   * @returns a random int8
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.int8())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * -115
   * ```
   */
  int8(): number;

  /**
   * Integer value between given range.
   * @returns a random intrange
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.intRange(13,13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 13
   * ```
   */
  intRange(min: number, max: number): number;

  /**
   * Word expressing emotion.
   * @returns a random interjection
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.interjection())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "wow"
   * ```
   */
  interjection(): string;

  /**
   * Adjective used to ask questions.
   * @returns a random interrogative adjective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.interrogativeAdjective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "what"
   * ```
   */
  interrogativeAdjective(): string;

  /**
   * Verb that does not require a direct object to complete its meaning.
   * @returns a random intransitive verb
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.intransitiveVerb())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "skip"
   * ```
   */
  intransitiveVerb(): string;

  /**
   * Numerical label assigned to devices on a network for identification and communication.
   * @returns a random ipv4 address
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.ipv4Address())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "234.106.177.171"
   * ```
   */
  ipv4Address(): string;

  /**
   * Numerical label assigned to devices on a network, providing a larger address space than IPv4 for internet communication.
   * @returns a random ipv6 address
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.ipv6Address())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "3aea:ef6a:38b1:7cab:7f0:946c:a3a9:cb90"
   * ```
   */
  ipv6Address(): string;

  /**
   * International standard code for uniquely identifying securities worldwide.
   * @returns a random isin
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.isin())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "HKS4BL2MVY62"
   * ```
   */
  isin(): string;

  /**
   * Position or role in employment, involving specific tasks and responsibilities.
   * @returns a random job
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.job())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {"Company":"Xatori","Title":"Representative","Descriptor":"Future","Level":"Tactics"}
   * ```
   */
  job(): Record<string,string>;

  /**
   * Word used to describe the duties, requirements, and nature of a job.
   * @returns a random job descriptor
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.jobDescriptor())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Internal"
   * ```
   */
  jobDescriptor(): string;

  /**
   * Random job level.
   * @returns a random job level
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.jobLevel())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Identity"
   * ```
   */
  jobLevel(): string;

  /**
   * Specific title for a position or role within a company or organization.
   * @returns a random job title
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.jobTitle())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Representative"
   * ```
   */
  jobTitle(): string;

  /**
   * System of communication using symbols, words, and grammar to convey meaning between individuals.
   * @returns a random language
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.language())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Esperanto"
   * ```
   */
  language(): string;

  /**
   * Shortened form of a language's name.
   * @returns a random language abbreviation
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.languageAbbreviation())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "eo"
   * ```
   */
  languageAbbreviation(): string;

  /**
   * Set of guidelines and standards for identifying and representing languages in computing and internet protocols.
   * @returns a random language bcp
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.languageBcp())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "he-IL"
   * ```
   */
  languageBcp(): string;

  /**
   * The family name or surname of an individual.
   * @returns a random last name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.lastName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Abshire"
   * ```
   */
  lastName(): string;

  /**
   * Geographic coordinate specifying north-south position on Earth's surface.
   * @returns a random latitude
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.latitude())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 11.394086
   * ```
   */
  latitude(): number;

  /**
   * Latitude number between the given range (default min=0, max=90).
   * @returns a random latitude range
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.latitudeRange(13,13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 13
   * ```
   */
  latitudeRange(min: number, max: number): number;

  /**
   * Character or symbol from the American Standard Code for Information Interchange (ASCII) character set.
   * @returns a random letter
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.letter())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "W"
   * ```
   */
  letter(): string;

  /**
   * ASCII string with length N.
   * @returns a random lettern
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.letterN(13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "WCpXcQhgfZWYH"
   * ```
   */
  letterN(count: number): string;

  /**
   * Replace ? with random generated letters.
   * @returns a random lexify
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.lexify("none"))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "none"
   * ```
   */
  lexify(str: string): string;

  /**
   * Verb that Connects the subject of a sentence to a subject complement.
   * @returns a random linking verb
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.linkingVerb())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "had"
   * ```
   */
  linkingVerb(): string;

  /**
   * Classification used in logging to indicate the severity or priority of a log entry.
   * @returns a random log level
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.logLevel())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "error"
   * ```
   */
  logLevel(): string;

  /**
   * Geographic coordinate indicating east-west position on Earth's surface.
   * @returns a random longitude
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.longitude())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 22.788172
   * ```
   */
  longitude(): number;

  /**
   * Longitude number between the given range (default min=0, max=180).
   * @returns a random longitude range
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.longitudeRange(13,13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 13
   * ```
   */
  longitudeRange(min: number, max: number): number;

  /**
   * Paragraph of the Lorem Ipsum placeholder text used in design and publishing.
   * @returns a random lorem ipsum paragraph
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.loremIpsumParagraph(13,13,17,"\u003cbr /\u003e"))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Accusamus et voluptatum voluptatem nisi nostrum atque molestias reprehenderit alias reiciendis ut eos ut ad ea magni. Recusandae id fuga ut rerum quia sit doloremque vero dolores temporibus non ipsum ipsam quis et fugiat. Necessitatibus voluptas et laborum et placeat eaque sit fuga ut dolore asperiores itaque nisi voluptas et autem. Quia doloremque laborum dolorem corporis excepturi dolor commodi dolorem totam inventore cum aut autem odit consequuntur temporibus. Maxime consequatur quo perferendis error alias minus reiciendis voluptates possimus voluptas aut possimus doloribus corporis commodi natus. Est adipisci doloremque ut quia impedit eius expedita adipisci sed facere velit odit ut tempore fuga veritatis. A debitis unde sunt non voluptatibus dolorum sapiente nemo ratione et voluptas tempore eum possimus culpa nobis. Officiis ut voluptatem voluptas aut culpa ullam numquam deleniti non tenetur accusamus ullam illum voluptatem beatae voluptas. Unde cupiditate incidunt ut id deserunt unde perspiciatis molestias incidunt fugit natus porro nemo odio dolorum voluptate. Voluptatum delectus eius non animi quia illo esse vel omnis aut dolorem nihil numquam labore porro non. In cupiditate eos ea numquam ipsum voluptatem ipsa ratione vitae voluptate consequatur fugiat sunt itaque ullam repellat. Officia nobis omnis soluta sed ut dolores quis ullam dolores delectus aperiam quaerat est ut aliquid mollitia. Repudiandae tempore ipsa eius qui magnam nisi cumque aut voluptas qui officia et aut voluptatibus vel eveniet.<br />Ut nesciunt sit non ducimus distinctio voluptatibus dolores blanditiis officia accusamus esse dolorem unde at error numquam. Eveniet aliquid laborum libero illo esse et distinctio est tempore omnis illum pariatur maiores consequuntur libero quia. Dignissimos nihil et sint et aliquid est omnis doloremque labore corrupti cumque consequatur vero quos sequi voluptates. Sapiente optio enim totam dolorum unde sint nesciunt eligendi quia sint ad officiis enim numquam cum totam. Nisi eum sit error repellat ut et odit repellendus est nemo assumenda officiis dolor enim et commodi. Error corrupti ut eligendi eum vitae necessitatibus dolorum tenetur id quidem omnis sint facere aspernatur omnis magni. Nihil vero architecto ratione rerum a tempore quasi sint eius error sed rerum saepe praesentium veritatis et. Voluptates iste praesentium tenetur omnis nisi dolor vel et dolore quisquam neque voluptate ullam amet consectetur voluptatem. Voluptates unde minus praesentium et ut rerum omnis officiis quidem illum eum et nihil nobis ullam aut. Enim beatae placeat facere maxime esse laboriosam consequatur voluptas quisquam voluptas suscipit est provident excepturi vero in. Quaerat alias facere aliquid ad aut voluptatum ipsam aspernatur cupiditate in commodi id magni nulla nostrum aut. Eveniet dolorem doloribus in aliquam dicta qui est et excepturi explicabo rem omnis nobis praesentium dolores voluptas. Quibusdam omnis ratione blanditiis dicta autem rerum quo eum assumenda voluptatem sed aut eaque ea et magni.<br />Minima nobis natus deleniti eos sint nesciunt fuga quisquam sed a vero quia aliquid praesentium in eaque. Id et molestiae voluptatem et et facere quae molestiae non voluptatum perferendis sit non sequi culpa iusto. Perferendis a quis enim officia dolorem necessitatibus vitae cum qui ipsa libero natus provident minima id facere. Voluptates blanditiis voluptate id consequatur omnis adipisci exercitationem occaecati cupiditate rerum velit autem autem voluptate non et. Nihil minima excepturi molestiae corrupti sapiente aut neque numquam nesciunt nesciunt laborum tenetur et libero rerum voluptatem. Non quo numquam porro aperiam impedit in est qui ut sint labore voluptate non sunt impedit optio. Exercitationem facilis sit saepe laudantium sint eligendi accusamus illum cupiditate voluptas velit ut sint consequatur facere a. Ut aut eaque qui excepturi sed aut minus voluptatem incidunt ut eos vero maiores molestias perspiciatis sit. Incidunt cupiditate atque libero in sit sunt ipsa aliquam laborum nihil consequatur eaque sit amet quia vel. Ratione dolores reprehenderit reprehenderit beatae saepe vel quas aliquid est omnis aliquid omnis tempora omnis debitis ut. Sint quisquam blanditiis distinctio voluptatem maiores ut tempore nihil officiis rerum eos rerum sit nulla neque incidunt. Amet possimus unde quia assumenda a nulla illo laborum veniam sapiente voluptatibus dolorem provident ad maxime sed. Corrupti repellendus quae impedit necessitatibus animi sit voluptatem est numquam aspernatur eveniet molestiae omnis officiis distinctio non.<br />Illo odio est et non atque repellendus laboriosam quos itaque corrupti non quia ratione quis impedit fugiat. Dignissimos modi nam officia eligendi eum voluptatem aspernatur dignissimos tempora non fugiat eligendi doloribus exercitationem inventore iure. Omnis vel exercitationem aperiam perspiciatis maxime quae et sed enim qui nisi ea iste corporis voluptate dolorem. Fugiat quia voluptate molestiae ipsum sapiente illum rem quo sed est quam suscipit cupiditate facere sed temporibus. Omnis earum nemo tenetur assumenda eaque enim sint aut sit nobis rem voluptate nihil a sint et. Aut omnis voluptatem rerum nisi non exercitationem in quod non non occaecati ipsam quisquam dolor nam velit. Quia minus dolores atque voluptas impedit et commodi consequatur quis amet aperiam sit officiis hic ipsum esse. Libero autem repudiandae provident sit et rem consectetur et minima sed officiis corporis eum et quia sit. Praesentium cumque qui vitae ipsa nulla natus iusto sint reprehenderit optio et cum sunt consequatur nesciunt laborum. Ad sit quasi voluptatem ullam laborum culpa aperiam voluptas laudantium eum eos a voluptas inventore odit cupiditate. Dolorum cupiditate voluptatem ut dolorem et deleniti est enim reiciendis laborum qui voluptatum nesciunt dicta adipisci esse. Culpa dolor culpa quia odio eum itaque sequi a voluptatem sunt velit explicabo sed voluptas rem consequatur. Qui est eos sed magnam in quo aliquid quo eum ex voluptatem totam quod mollitia corporis quia.<br />Eligendi dolorum ipsum dolorum non tenetur quae sed officia alias ad voluptatem ullam quidem ducimus similique minus. Modi facere ipsam reprehenderit rerum et est neque accusamus cupiditate adipisci accusantium sed doloribus itaque velit eveniet. Tempora aliquid unde est atque ea nulla laudantium illo alias similique consequatur ex ut impedit reprehenderit sed. Earum et enim consequatur perspiciatis necessitatibus eos aliquam ipsam voluptate voluptatibus laudantium delectus harum consectetur reprehenderit et. Dolorum alias sed debitis corporis molestias aut iusto ullam maxime nostrum consequuntur consectetur porro qui sit voluptatem. Nobis soluta facere consequatur et sequi et exercitationem at eligendi harum quo blanditiis harum sed deleniti qui. Id adipisci et temporibus hic quia beatae accusantium eum id ex totam ullam impedit soluta ut voluptas. Temporibus fugiat libero fugit velit nesciunt dolor unde hic tempore fugit molestiae culpa eum est est veniam. Reiciendis quia et quis consequatur alias dolor laudantium temporibus quod aut illum quas id quas perspiciatis odit. Inventore vitae vel maiores et iste ab repellendus iusto voluptates officiis nihil dolor ducimus illo autem aliquam. Deserunt eos iste quae non sint et ipsa ea exercitationem sed nobis vel iure laborum excepturi reprehenderit. Enim dignissimos porro reprehenderit sed hic laudantium porro aut consequuntur quia sequi necessitatibus omnis quo nemo eum. Perferendis est excepturi omnis quia quis deserunt vel accusamus ab quas natus commodi quo eos corrupti numquam.<br />Alias soluta accusantium sint ut voluptate ipsum ut excepturi pariatur in voluptatibus eveniet labore quis consequatur dolores. Aperiam ex quia omnis placeat veritatis id explicabo nam assumenda ea libero consequatur necessitatibus provident libero ipsam. Et mollitia cumque sapiente sed nam reiciendis cupiditate qui cupiditate consequatur et odit aut omnis est sunt. Ducimus qui aperiam voluptatem molestias reiciendis et quisquam hic asperiores enim harum quia perspiciatis dolorum laborum aut. Quaerat aut qui architecto non optio esse placeat soluta ab qui id quia eius ratione amet vel. Quia molestias error aliquid explicabo consequuntur dolor iure tempora non sed perspiciatis eos delectus iure nam voluptas. Magnam saepe repellat qui sed qui accusantium ut numquam cum est cumque molestiae earum cupiditate velit voluptatibus. Dolor omnis saepe assumenda qui autem adipisci rerum nihil omnis quia perspiciatis voluptates natus eaque quisquam in. Magnam recusandae ut et aperiam incidunt id omnis facilis magnam expedita beatae omnis fugit natus qui sunt. Dolore nulla perspiciatis vitae officiis iste quos qui unde quam id magni aut officiis sunt illo beatae. Id dolorum velit culpa totam voluptatem occaecati delectus reprehenderit modi blanditiis vitae voluptatum consectetur autem omnis et. Fuga aut et corporis rerum unde qui porro inventore quia voluptatem quia voluptates ab nisi nihil dicta. Molestiae cum quia eum et adipisci ipsa perferendis enim sunt unde aut quisquam harum perspiciatis sed illum.<br />Nesciunt velit velit voluptatem autem maiores adipisci ut quod fugiat adipisci molestiae et rerum assumenda aliquid ad. Qui odio enim eligendi aut deleniti inventore doloribus cum aut libero ad et magni quo maxime ea. Voluptatem rerum autem sed reprehenderit est nisi aut id magni neque iusto sit maxime autem sint rem. Dolores voluptates ut voluptatem soluta est repellat soluta maiores maxime nostrum nam in incidunt voluptates sit voluptatibus. Dolorem possimus consequatur consequatur ullam minima repellat assumenda rerum eum omnis incidunt similique aut et repellat occaecati. Maiores beatae minus sed molestiae et quia ipsa expedita voluptas molestiae recusandae laudantium sint quo laudantium fugit. Quia pariatur fugiat ut vel repellendus impedit voluptas id voluptatem nisi et numquam molestias culpa voluptas qui. Assumenda possimus alias ut doloribus aut ut dolor sunt facilis tempora omnis magnam enim et aut velit. Et nihil fuga et ex voluptatum suscipit dolorem sed voluptates ab cum voluptas nostrum omnis fugiat ut. Aut magni architecto ut quia et est iure velit facere impedit temporibus voluptatem placeat consequatur magni iusto. Iusto suscipit porro omnis omnis dolor totam exercitationem doloribus quia explicabo non assumenda omnis libero inventore et. Sint quaerat eligendi quo quis dicta cumque illum sed sed quis ducimus officia voluptate consectetur voluptatibus repellat. Quo sit eum consequuntur voluptate est placeat minus voluptates beatae quia et harum ratione blanditiis quis sunt.<br />Veniam at aliquam et nisi sit accusantium laborum ratione odit omnis nesciunt nobis neque eligendi et quasi. Ut a impedit sint enim vero qui quas dicta iste animi pariatur dolor autem adipisci est ex. Exercitationem reprehenderit fugiat rem quia tempore consequatur a sint perferendis autem suscipit odio quod et ad voluptatem. Dolorem eos dolores aut nihil enim eveniet id officia sed ad accusantium maxime veritatis ex eaque ipsa. Blanditiis voluptatem et beatae modi rerum similique exercitationem excepturi et a voluptatem ea nemo natus laboriosam tempore. Enim voluptas autem quaerat et distinctio modi recusandae accusantium molestiae exercitationem animi consequatur debitis nemo repellat ullam. Et recusandae praesentium quibusdam deserunt mollitia magnam qui adipisci illo cumque rerum ut earum molestiae molestiae nulla. Et odio sunt porro voluptatem mollitia doloribus a veritatis quidem ad minus recusandae rerum ad et dolores. Deserunt praesentium illo ipsam iste incidunt dolor molestiae sed dolor veniam quia aliquam rerum eum explicabo harum. Ad aut omnis laboriosam quis optio quaerat dolor repellat officia dolorum assumenda sit neque voluptas voluptas maxime. Quam ea architecto expedita molestiae repellendus voluptas ullam architecto fugit quia quae atque ad at incidunt alias. Deserunt est et aperiam sit quis consequatur voluptas soluta odio totam consectetur eligendi culpa reiciendis aut voluptas. Dolor est laborum alias nobis ut eos labore dicta dolorem qui sed non et placeat perferendis sit.<br />Error qui perspiciatis tenetur consequatur eius molestiae sunt assumenda asperiores molestiae non iure ut ab assumenda quas. Rerum velit dolor consequatur impedit architecto repudiandae iure et molestias occaecati ex expedita omnis dolor veritatis cupiditate. Deleniti eius et provident est ratione sequi in rerum ipsum nemo deleniti ex sit eius et assumenda. Fugiat autem esse dolor adipisci qui commodi consequatur esse labore eos assumenda quis deserunt libero ipsam id. Id velit dolores velit numquam temporibus quod et a vel quia suscipit architecto facere saepe ullam aut. Voluptatibus delectus aut tempore commodi dolore provident perspiciatis officiis eius quasi et delectus atque quae recusandae et. Assumenda illum non eaque commodi quisquam dolores aliquid eum dolor sed odio dignissimos quaerat impedit rem perferendis. Sit autem sunt saepe aperiam voluptatibus qui corporis dolores itaque est in est odio perferendis illum recusandae. Quo rerum quos praesentium ab cupiditate ut doloremque ut voluptas nobis illo non ducimus illo ipsa qui. Voluptas dolorem aut et delectus ut quis quia ducimus dolor et unde sunt eius accusamus est explicabo. Cum porro perferendis nihil in et quo ducimus molestiae voluptatem accusantium molestiae corrupti quia ut animi ipsa. Nam tempora exercitationem eum ut quasi et temporibus expedita eaque deserunt aut et voluptatem consequatur delectus odit. Itaque est eveniet provident laborum recusandae velit dolorem perspiciatis id dolorem qui ipsa qui consequatur qui totam.<br />Ullam delectus deserunt quasi explicabo ab quo laborum est et dolorum voluptas voluptate vel commodi animi nobis. Molestiae rem quam aut quas temporibus ipsa cupiditate quaerat excepturi nemo sit et dolorem nam occaecati maxime. Eum autem occaecati est itaque fuga veritatis qui quidem dolor eligendi recusandae totam atque voluptas tempora suscipit. Voluptas ut optio commodi perferendis ducimus iste vero ipsum vel quaerat enim tempore et nesciunt eos ea. Provident exercitationem architecto esse qui accusantium sapiente nobis corrupti laborum aliquam voluptatibus ut sit repellendus totam eos. Earum fugit nemo ut et et vitae mollitia tempore et dicta corporis quod pariatur iusto magni iusto. Voluptatem sunt et rem et minus similique tenetur qui distinctio recusandae perspiciatis nesciunt amet pariatur officia eligendi. Aliquam dolor quia in eum sunt magni nemo aut non quis magnam eum nam qui voluptas modi. Maiores a voluptatem dicta harum rerum corporis expedita ipsam voluptates laboriosam esse iure et ut labore vitae. Mollitia sed necessitatibus voluptate alias reprehenderit et temporibus excepturi optio nulla illum voluptatum reprehenderit minima dolores accusamus. Dolor laboriosam tempore molestiae quod ut dolorem doloribus voluptatem dolore voluptatum qui repellat corrupti natus modi natus. Cumque commodi voluptatem repudiandae ullam nisi ut qui voluptatem cupiditate eum corporis consectetur iste exercitationem ut dignissimos. Accusamus deleniti nostrum aut odit facilis pariatur odit tempora in dolorem vero eius qui maiores architecto aut.<br />Voluptas sapiente ullam recusandae suscipit at ut ducimus voluptates explicabo odit voluptas dolor iste nostrum ea asperiores. Fuga natus placeat iste esse est beatae cumque voluptas eligendi eveniet ipsa incidunt ipsum quae doloribus voluptas. Qui qui et non qui dignissimos voluptas accusamus id rem aut ut culpa fugit quia velit quia. Libero ut et aut nisi quasi porro autem nesciunt eum consequatur iusto et et et numquam aut. Iusto ut qui quam voluptatibus et qui iusto ratione sunt ipsam voluptate occaecati odit quos mollitia reiciendis. Provident ea rerum id provident consequuntur non in id quos sed ducimus libero cum vero omnis quia. Ut itaque aperiam et voluptas minima omnis ducimus sit alias qui enim asperiores rerum asperiores sed eos. Facilis ex magnam et sapiente asperiores eligendi sit dignissimos qui voluptatem omnis ad ea in dolores voluptatum. Voluptas cumque numquam ipsa facilis saepe libero culpa aliquam qui enim sequi vel dolorum est architecto neque. Est quaerat accusantium aperiam molestiae culpa est provident nostrum optio sint distinctio dolorem sint libero neque quia. Provident ut illum vitae pariatur ducimus commodi et excepturi distinctio sint quidem aut aut aliquam tenetur dolorum. Autem doloribus ut sunt alias earum nemo dignissimos nisi reprehenderit et et veritatis repudiandae architecto suscipit rerum. At labore et ea aliquid omnis eveniet aut debitis cupiditate veniam totam quam corporis nostrum sint fugiat.<br />Autem harum voluptatibus sunt laboriosam quas asperiores quis voluptatem est saepe debitis voluptas iste sequi explicabo voluptatem. Consequuntur impedit vel debitis rem dolorem consectetur sed occaecati aut ab inventore aut est culpa quia optio. Molestiae similique explicabo atque provident id odit possimus quae molestiae omnis repudiandae quod voluptatem beatae placeat animi. Porro et id aliquam nam ut vero facilis eos minima quia soluta architecto non officia in voluptas. Sequi eius suscipit in qui totam ut assumenda iusto expedita architecto omnis dignissimos sint dolor aliquam vel. Ut quidem nesciunt in rerum exercitationem provident dolores corrupti in aperiam corporis optio est non et aut. Doloribus voluptate fugit facilis molestiae nisi animi iusto laborum et vero aspernatur quibusdam omnis tempore placeat placeat. Pariatur quam nesciunt impedit ut fugiat deserunt cumque adipisci iste aperiam possimus non laudantium repellendus odit dolor. Dolor eaque dolorem repellat nihil rerum optio veritatis facere voluptate ipsam qui voluptas debitis rerum quas dignissimos. Enim provident officia sunt eos in ut aperiam ut quam assumenda est excepturi sit in facilis nulla. Deleniti fuga modi illo est ea error est vitae quia consequuntur labore quod adipisci doloribus ut aliquam. Illum temporibus officia quidem perferendis eos ab ullam nulla impedit dignissimos minus quod dicta ab autem velit. Consequatur et ullam tempore doloremque enim adipisci optio quia aut consequatur esse ad voluptate autem nihil ut.<br />Inventore aliquid saepe doloribus voluptas voluptas saepe minus dolores numquam sed eligendi dicta cupiditate aut nemo non. Sunt et voluptas tempore voluptatem exercitationem vel dolores debitis minus pariatur eligendi dolorem et fugit dolorum labore. Laboriosam quas architecto dicta modi est quam rerum quidem et distinctio dolorem porro quis consequatur sit qui. Velit quis ea aut ipsam odit nemo voluptas ex omnis ratione sit quia eaque quas omnis illum. Est ea sint modi et at sint similique nesciunt amet vitae amet praesentium debitis itaque sapiente nam. Fugiat ut enim nihil sit sint provident fugiat iusto aut esse nihil autem placeat at eos odit. Dolor harum optio eaque ut impedit saepe iure quos aut commodi suscipit consequatur at et aliquam quia. Eos et dolores quis id placeat id odit perferendis quae perferendis veritatis ullam provident voluptatum dicta ullam. Numquam debitis odio sit ut occaecati vitae dicta est qui delectus esse voluptas molestias praesentium quidem est. Autem laborum quibusdam exercitationem ipsa beatae sed sed est temporibus delectus ipsum vitae assumenda dolores eligendi tenetur. Libero eaque et consectetur quam odio voluptate qui sit temporibus doloremque quam in enim ea voluptas qui. Mollitia ut perferendis quia eos quaerat dignissimos facere suscipit id nesciunt qui suscipit accusantium aliquam cum sunt. Assumenda est mollitia odio animi voluptates libero iusto aut omnis reiciendis non praesentium natus ipsa occaecati numquam."
   * ```
   */
  loremIpsumParagraph(paragraphcount: number, sentencecount: number, wordcount: number, paragraphseparator: string): string;

  /**
   * Sentence of the Lorem Ipsum placeholder text used in design and publishing.
   * @returns a random lorem ipsum sentence
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.loremIpsumSentence(13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Accusamus et voluptatum voluptatem nisi nostrum atque molestias reprehenderit alias reiciendis ut eos."
   * ```
   */
  loremIpsumSentence(wordcount: number): string;

  /**
   * Word of the Lorem Ipsum placeholder text used in design and publishing.
   * @returns a random lorem ipsum word
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.loremIpsumWord())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "accusamus"
   * ```
   */
  loremIpsumWord(): string;

  /**
   * Midday meal, often lighter than dinner, eaten around noon.
   * @returns a random lunch
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.lunch())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Tortellini skewers"
   * ```
   */
  lunch(): string;

  /**
   * Unique identifier assigned to network interfaces, often used in Ethernet networks.
   * @returns a random mac address
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.macAddress())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "87:2d:cd:bc:0d:f3"
   * ```
   */
  macAddress(): string;

  /**
   * Name between a person's first name and last name.
   * @returns a random middle name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.middleName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Sage"
   * ```
   */
  middleName(): string;

  /**
   * Non-hostile creatures in Minecraft, often used for resources and farming.
   * @returns a random minecraft animal
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.minecraftAnimal())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "chicken"
   * ```
   */
  minecraftAnimal(): string;

  /**
   * Component of an armor set in Minecraft, such as a helmet, chestplate, leggings, or boots.
   * @returns a random minecraft armor part
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.minecraftArmorPart())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "leggings"
   * ```
   */
  minecraftArmorPart(): string;

  /**
   * Classification system for armor sets in Minecraft, indicating their effectiveness and protection level.
   * @returns a random minecraft armor tier
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.minecraftArmorTier())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "leather"
   * ```
   */
  minecraftArmorTier(): string;

  /**
   * Distinctive environmental regions in the game, characterized by unique terrain, vegetation, and weather.
   * @returns a random minecraft biome
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.minecraftBiome())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "plain"
   * ```
   */
  minecraftBiome(): string;

  /**
   * Items used to change the color of various in-game objects.
   * @returns a random minecraft dye
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.minecraftDye())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "purple"
   * ```
   */
  minecraftDye(): string;

  /**
   * Consumable items in Minecraft that provide nourishment to the player character.
   * @returns a random minecraft food
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.minecraftFood())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "pufferfish"
   * ```
   */
  minecraftFood(): string;

  /**
   * Powerful hostile creature in the game, often found in challenging dungeons or structures.
   * @returns a random minecraft mob boss
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.minecraftMobBoss())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "ender dragon"
   * ```
   */
  minecraftMobBoss(): string;

  /**
   * Aggressive creatures in the game that actively attack players when encountered.
   * @returns a random minecraft mob hostile
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.minecraftMobHostile())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "blaze"
   * ```
   */
  minecraftMobHostile(): string;

  /**
   * Creature in the game that only becomes hostile if provoked, typically defending itself when attacked.
   * @returns a random minecraft mob neutral
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.minecraftMobNeutral())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "dolphin"
   * ```
   */
  minecraftMobNeutral(): string;

  /**
   * Non-aggressive creatures in the game that do not attack players.
   * @returns a random minecraft mob passive
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.minecraftMobPassive())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "axolotl"
   * ```
   */
  minecraftMobPassive(): string;

  /**
   * Naturally occurring minerals found in the game Minecraft, used for crafting purposes.
   * @returns a random minecraft ore
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.minecraftOre())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "iron"
   * ```
   */
  minecraftOre(): string;

  /**
   * Items in Minecraft designed for specific tasks, including mining, digging, and building.
   * @returns a random minecraft tool
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.minecraftTool())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "pickaxe"
   * ```
   */
  minecraftTool(): string;

  /**
   * The profession or occupation assigned to a villager character in the game.
   * @returns a random minecraft villager job
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.minecraftVillagerJob())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "carpenter"
   * ```
   */
  minecraftVillagerJob(): string;

  /**
   * Measure of a villager's experience and proficiency in their assigned job or profession.
   * @returns a random minecraft villager level
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.minecraftVillagerLevel())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "novice"
   * ```
   */
  minecraftVillagerLevel(): string;

  /**
   * Designated area or structure in Minecraft where villagers perform their job-related tasks and trading.
   * @returns a random minecraft villager station
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.minecraftVillagerStation())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "lectern"
   * ```
   */
  minecraftVillagerStation(): string;

  /**
   * Tools and items used in Minecraft for combat and defeating hostile mobs.
   * @returns a random minecraft weapon
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.minecraftWeapon())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "sword"
   * ```
   */
  minecraftWeapon(): string;

  /**
   * Atmospheric conditions in the game that include rain, thunderstorms, and clear skies, affecting gameplay and ambiance.
   * @returns a random minecraft weather
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.minecraftWeather())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "clear"
   * ```
   */
  minecraftWeather(): string;

  /**
   * Natural resource in Minecraft, used for crafting various items and building structures.
   * @returns a random minecraft wood
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.minecraftWood())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "oak"
   * ```
   */
  minecraftWood(): string;

  /**
   * Unit of time equal to 60 seconds.
   * @returns a random minute
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.minute())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 9
   * ```
   */
  minute(): number;

  /**
   * Division of the year, typically 30 or 31 days long.
   * @returns a random month
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.month())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 10
   * ```
   */
  month(): string;

  /**
   * String Representation of a month name.
   * @returns a random month string
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.monthString())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "October"
   * ```
   */
  monthString(): string;

  /**
   * A story told through moving pictures and sound.
   * @returns a random movie
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.movie())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {"Name":"Sherlock Jr.","Genre":"Music"}
   * ```
   */
  movie(): Record<string,string>;

  /**
   * Category that classifies movies based on common themes, styles, and storytelling approaches.
   * @returns a random movie genre
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.movieGenre())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Film-Noir"
   * ```
   */
  movieGenre(): string;

  /**
   * Title or name of a specific film used for identification and reference.
   * @returns a random movie name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.movieName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Sherlock Jr."
   * ```
   */
  movieName(): string;

  /**
   * The given and family name of an individual.
   * @returns a random name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.name())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Josiah Thiel"
   * ```
   */
  name(): string;

  /**
   * A title or honorific added before a person's name.
   * @returns a random name prefix
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.namePrefix())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Mr."
   * ```
   */
  namePrefix(): string;

  /**
   * A title or designation added after a person's name.
   * @returns a random name suffix
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.nameSuffix())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Sr."
   * ```
   */
  nameSuffix(): string;

  /**
   * Unit of time equal to One billionth (10^-9) of a second.
   * @returns a random nanosecond
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.nanosecond())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 953698829
   * ```
   */
  nanosecond(): number;

  /**
   * Attractive and appealing combinations of colors, returns an list of color hex codes.
   * @returns a random nice colors
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.niceColors())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "MediumVioletRed"
   * ```
   */
  niceColors(): string[];

  /**
   * Person, place, thing, or idea, named or referred to in a sentence.
   * @returns a random noun
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.noun())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "hand"
   * ```
   */
  noun(): string;

  /**
   * Ideas, qualities, or states that cannot be perceived with the five senses.
   * @returns a random noun abstract
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.nounAbstract())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "philosophy"
   * ```
   */
  nounAbstract(): string;

  /**
   * Group of animals, like a 'pack' of wolves or a 'flock' of birds.
   * @returns a random noun collective animal
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.nounCollectiveAnimal())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "school"
   * ```
   */
  nounCollectiveAnimal(): string;

  /**
   * Group of people or things regarded as a unit.
   * @returns a random noun collective people
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.nounCollectivePeople())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "bevy"
   * ```
   */
  nounCollectivePeople(): string;

  /**
   * Group of objects or items, such as a 'bundle' of sticks or a 'cluster' of grapes.
   * @returns a random noun collective thing
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.nounCollectiveThing())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "wad"
   * ```
   */
  nounCollectiveThing(): string;

  /**
   * General name for people, places, or things, not specific or unique.
   * @returns a random noun common
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.nounCommon())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "company"
   * ```
   */
  nounCommon(): string;

  /**
   * Names for physical entities experienced through senses like sight, touch, smell, or taste.
   * @returns a random noun concrete
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.nounConcrete())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "train"
   * ```
   */
  nounConcrete(): string;

  /**
   * Items that can be counted individually.
   * @returns a random noun countable
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.nounCountable())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "weekend"
   * ```
   */
  nounCountable(): string;

  /**
   * Word that introduces a noun and identifies it as a noun.
   * @returns a random noun determiner
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.nounDeterminer())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "this"
   * ```
   */
  nounDeterminer(): string;

  /**
   * Phrase with a noun as its head, functions within sentence like a noun.
   * @returns a random noun phrase
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.nounPhrase())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "a brave fuel"
   * ```
   */
  nounPhrase(): string;

  /**
   * Specific name for a particular person, place, or organization.
   * @returns a random noun proper
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.nounProper())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Rowan Atkinson"
   * ```
   */
  nounProper(): string;

  /**
   * Items that can't be counted individually.
   * @returns a random noun uncountable
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.nounUncountable())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "butter"
   * ```
   */
  nounUncountable(): string;

  /**
   * Mathematical concept used for counting, measuring, and expressing quantities or values.
   * @returns a random number
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.number(13,13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 13
   * ```
   */
  number(min: number, max: number): number;

  /**
   * Replace # with random numerical values.
   * @returns a random numerify
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.numerify("none"))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "none"
   * ```
   */
  numerify(str: string): string;

  /**
   * The specific identification string sent by the Opera web browser when making requests on the internet.
   * @returns a random opera user agent
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.operaUserAgent())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Opera/10.45 (X11; Linux i686; en-US) Presto/2.13.288 Version/13.00"
   * ```
   */
  operaUserAgent(): string;

  /**
   * Distinct section of writing covering a single theme, composed of multiple sentences.
   * @returns a random paragraph
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.paragraph(13,13,17,"\u003cbr /\u003e"))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Quickly up brace lung anyway then bravo mirror hundreds his party nobody person anything wit she from. Above Chinese those choir toilet as you of other enormously enough indeed your muster bevy snow grumpy. Idea whatever one Lilliputian hers towards hers knock party Beninese eventually beyond unexpectedly regularly badly dizzying next. Huh you literature kindness might band first where substantial you pleasure at i.e. whom his very when. All permission whose agree this live cane does these e.g. differs some other ball up where back. Shorts where you whomever us whomever daily hard awfully product whichever generously our to ourselves since frequently. Boxers Turkishish healthily alas secondly this most abroad week brush behalf your his of the us weakly. Ours wisp yourselves give bunch down account closely why lately as fortnightly that whom over clean those. Together an for so wow should it today these that rightfully plate perfectly with still sometimes highly. Fear e.g. bevy their though practically with point company inspect how someone each any class anybody slide. First way regularly whom Hindu softly obesity neither strange those luxury was yay as your just daily. To hourly earlier this yet moreover had day ourselves as example bless pretty whatever me ahead heap. Raise above whose outside everybody Turkishish than couple she could outside troupe only alternatively occasionally neither horror.<br />Her string innocence behind other your theirs lead of his firstly so whomever hers far on either. I.e. infrequently highly opposite for cackle those either they a next each over another which which cleverness. Stemmed in few before this ourselves between alive covey sheaf significant always jump he weekly everyone their. Ouch afterwards cost out part herself our the finally hastily all across their some someone closely pipe. Everyone range those in how fuel near ingeniously interrupt whose amused neither whereas your here talent switch. Patiently our neatly Iranian my in that i.e. himself could wow magic yellow anyone each those occasion. Conclude ship somebody off room am these a our a secondly lastly pray anyway wait these this. Of now from whenever stupidly heavy pod yearly us we before farm of eventually whoever could any. Of recline hourly without should phew since whom determination often which inside who improvised fatally hurt heavily. Does him on horror early along whomever rather you is freedom as case couple full patience daily. Whose ask learn you in is could these neither some you additionally those herself lean bale powerfully. Bahrainean herself honestly part his well because were eye itself under so which us Buddhist bread comb. This no sit out between sheaf why whoa busy where huh significant daily the seldom to close.<br />Ship as these i.e. down what me he child bevy your with though hers completely therefore both. Case rather between posse any danger there this Muscovite her onto how disturbed now other warmly envy. Ever they monthly nobody disregard but murder she troop firstly her myself several daily sing vilify that. Herself every child rather downstairs the oops had exaltation tweak so itself jump oops finally extremely lastly. Number outside usually behind nevertheless often empty nevertheless as instance generally float i.e. that the those egg. Positively besides that to whereas wade silly all enable through completely yesterday daily finally rather usually our. This himself country leap for into i.e. yours me end alas then for next must hers eventually. Yourselves which inquire of been everybody pack did yourselves enormously though destroy battery bevy tennis yours perfectly. Elephant close any to fiercely light elegance what i.e. hers myself here whoa party scheme wisp a. Hey daily timing slide out Amazonian till does who first its driver scream program was hourly pod. Down without upon which this would straightaway normally ourselves next our last any whatever down still bow. Party write which sore contradict under person car recline has disregard still hey whom its for every. Into any those data rarely to dig them next now back yikes as upon upon whoever another.<br />Cap should exaltation result embarrass trend wear tomorrow today did about no everything i.e. solemnly whatever without. Any that what from you cheese open to somebody a herself here Salvadorean congregation where least rarely. On to to well ball speed problem than far insufficient should everyone coffee whose lastly foot till. Width hmm regularly many accordingly should these suitcase what these whichever ours we one these straight life. Yay each it everyone suspiciously quarterly Kyrgyz somebody anyone in gas towards oops however happiness plenty yours. Of once nightly play Portuguese each snarl upon just himself since daily seriously riches over they child. Unusual meanwhile might our were wisdom weekly Christian over way whoever myself bowl why most neither anyway. It respect had beautifully Barbadian in totally staff that fact phew over earlier nevertheless heap its they. Cruel till that consequently many mustering instead today quarterly why another say with freeze talk first ever. Wit have till frequently under hence too of must who whom spread just remote but cook daily. Are loneliness hence several slowly company which him yay must how heat when none of himself suit. Extremely outrageous where several from still whom next however foolish religion climb provided ours bridge these is. Any preen out what quite advantage that muster everything dream including whose myself beyond Burkinese hourly yourselves.<br />Theirs from who gee in youth table you but oops party think their task too of should. Whose company Italian these eek daily hey your patrol Sri-Lankan camp weekly mine have those Guyanese later. Phew research therefore pack gladly these must little class terrible tweak are for without theirs this nobody. Who one shall nobody sheaf then daily whomever anyone whose straightaway whose yet before for long thing. Bathe secondly instance what aha you your meanwhile these why her someone normally can her line choir. Its gain exemplified have almost now to aha itself alive spite herself what bunch today lastly train. Care afterwards weekly on rise meanwhile themselves first quite lively monthly throw such anxiously courageously way words. Whose here whomever wisp it oops anybody party far group why had Portuguese set terribly sneeze each. A fall batch even would but tomorrow every is my where Burkinese weekly yikes therefore the mine. Upon at nightly utterly over why dream orchard a me previously without cruel next hedge something extremely. Yourselves nobody Tibetan whichever nevertheless rarely her that painfully thing trade out have why nervously religion kneel. Roll tomorrow what this cloud rarely myself this swim even specify place being book her write its. Whoa so lastly e.g. is those dynasty Sudanese delightful it shall her in appetite that elegance laughter.<br />Me huh Thatcherite from your we after splendid he those pain whom before confusing my next near. Student these roughly am awful troop peace quarterly quarterly select horror at yourselves but Darwinian it a. Bravo whose face here her consequently she hey delay address therefore your seldom that might where generally. Upon her both forest are practically brilliance besides it hers upon circumstances usually its fascinate desk regularly. Scream before inside ourselves straightaway gorgeous which any might generosity cry next this does there then black. Generally we mine before this upon hastily that fire publicity however finally outside whomever do enough reel. Ingeniously within this be nearly whereas in though hers conclude collection as was yet themselves depending to. Can that relent problem swiftly our there Iraqi whose yourself frail positively grease brother then hard yours. But we might hers thought nervous being hmm these your these can soup over offend farm were. Where helpless when toothbrush eventually Thai which regularly I many sometimes soon next therefore to by win. On the then throughout though of party several us that always part pronunciation example several fortnightly anybody. Dream mob accept unlock fuel example to extremely galaxy Slovak traffic he Russian team another die she. Who of beauty eager her lips on swim has guilt as for which in practically under theirs.<br />Angrily eventually where forgive this myself yourself been why nevertheless there under body water whose due as. Oops bevy husband idea fight inside theirs of week angrily wow width seriously according these horror it. Sheep growth lady earlier fascinate behind wait selfishly game those when bus away finally accident fondly out. Appetite in nothing smoothly pod regiment between e.g. nightly pod brace that of win should hey may. Cast anyone so even him sheaf of vision today whenever along sadly when gee they patrol any. You myself shout life every now ahead both those softly instance Polish will teach how there whichever. Group it regularly government part pollution milk alas friendship first nice whomever according constantly usually everything move. Child love hand for usually had myself yours harm width these who sit am smell eat next. Along had that with catalog whose sometimes between crew straightaway everybody in upon kindly our wiggle him. Oops ever at panic brain eek in candy cash all to shout gallop under soup others this. Box alternatively her protect herself to him equipment nightly forest yourself moreover crawl these as to with. Mine indoors where according whoever revolt ours one could Viennese archipelago is Kyrgyz fortnightly open crowd you. Of some weekly cackle door her it never what you of tonight wisp himself always nightly a.<br />Water ourselves to upon Afghan regularly yesterday has panther others those me been here any pause themselves. Out weary theirs themselves extremely themselves rather yesterday myself rarely then first e.g. ours you rarely absolutely. Quarterly what juice posse then what highly place but am couple without I occasionally win you monthly. Alternatively remain it gown it already yourselves gee where woman change there along certain an here for. Horde as lately ingeniously decidedly that it easily none it next those mortally before hedge frankly who. Sari quite Himalayan bouquet whoa clap selfish somewhat me life when together his energetic instead sew where. Its solitude group walk downstairs yours next close that brilliance where fiction from secondly finally busy weekly. Later troupe sternly early until tough due secondly importance this here hatred deeply quarterly e.g. lean have. Without mustering ourselves what fancy nothing I ours yay pod ourselves now Ecuadorian those heavy brilliance bathe. About woman retard how absolutely about man besides that despite might double them daily sharply whose gee. These exemplified of abroad these (space) down hers lot the which some others annoyance of ours provided. Fascinate quizzical host equally rush normally patiently awkwardly wad ourselves less some anything at in in any. Week few alternatively huh our due usually was any will batch secondly whom normally sedge reassure he.<br />Socks should shiny never play hand scold archipelago lastly everything should be disregard as normally of these. Brace outside shake this it grasp this but by anywhere project that its is now their oil. Secondly that ourselves cautiously therefore these never alas both monthly everybody pod selfishly had ourselves theirs that. This finally fear scarcely his outside each truthfully is of aha ever to nevertheless himself such are. What whereas when then it bag behind bikini straightaway tomorrow today a tomorrow enough Indonesian for next. Swimming but words usually flour finally fortnightly full grammar any all his yourself since has whose these. Then group Peruvian yet which about Turkmen ours of slavery say whom scream whirl a group though. Whatever whichever selfishly provided there foolishly Plutonian young shower quarterly yourselves enthusiastic place elegantly harm each yourselves. Were how might company their may totally where muster depending Malagasy herself innocence research us whoa muster. Her whose safely many where you consequently finally you in does whoever utterly in after these even. Bravely plant besides beneath frequently my to anyone hmm there panic anything weep any taste example whichever. Problem fleet anyone spoon sunglasses this sneeze would grow woman onto it park was moreover couple what. Eek nightly conclude this chest they hers in you be here electricity case she sometimes yay abroad.<br />From rudely however anything consequently how anger annually remove stand as solemnly almost I toothbrush should throw. First however yourself after belong might firstly finally off what for any then has whose she onto. Yellow been therefore upon honestly grapes fantastic idea nevertheless jewelry elegance ugly themselves hang me group bush. Down that group to vision hers it publicity loss then next they aloof naughty Afghan tomorrow that. Would heavy anyone his witty am aha that mine here bad you ourselves wrong crawl whole herself. I.e. to couch badly say these courageously in eye somebody the other you freedom dynasty insufficient nightly. Therefore one awkwardly basket move for whoever leap comb tonight nothing perfect block go it into but. Myself slippers even painfully indoors crawl constantly lastly tweak stay i.e. her whom what us how were. Yourselves huge whichever indeed up their horde year auspicious group somebody does child monthly tomorrow of something. Without board being battery double constantly enlist slavery few it ourselves year highlight for spin you must. Repeatedly hourly place motor by off inside there anybody Turkmen block dig till each now monthly cast. Tough may she abundant tonight yours taxi you shall patrol lastly no am over therefore towards those. Today there still yesterday plant usually sing ouch crew full kiss were throughout monthly frantically alas we.<br />Hmm road yay heat Belgian next cry move sit either tonight does collection now Icelandic table here. Soup never your air what besides summation frantically purse were does indoors daily one this quarterly regularly. Any outside hardly however knock enough frock define straightaway be other next yell horde so whichever crew. Ever bridge away only entertain on it troupe instead whale out than sparse since we occasion Canadian. Repeatedly software speed consequently stagger yourself many shower infrequently mouth number which you that previously which any. Previously cravat disregard eventually well secondly onto by had them band previously when genetics these of preen. Those them of it butter fact in his regularly across annually himself sail which smoke herself frankly. Where repelling delay hiccup army whenever time upon it intimidate hey of before successfully throughout from crack. Than yourselves tensely gee outstanding where battle yourself are shower on so bouquet grasp child peace here. Those brilliance his there he ever that upstairs group regularly it number were whoa nightly party dolphin. Smell does comb pose set her ours inside ride occasionally who must hedge firstly album therefore repel. Furthermore those thing lazy how without page its double of how us everybody half of been their. Would of quarterly still justice magazine gallop bathe indoors buy it hall mob besides those nearly my.<br />I faithful slavery those everyone next its ours of because first this anyone smoke did all has. At include one class government it under of may smell today by then toast additionally which whose. Where seldom someone being sigh respect including someone fragile assistance leap themselves whose moment dream all on. Scarcely numerous to conclude beneath tomorrow had itself himself ourselves lately above as as group straightaway pod. Down mine from nap frequently could his where me throw lastly confusion recline problem oops socks ski. Everyone today your contrast those several rather east but turn whose dishonesty these gown body may dream. Out accordingly usually hers slide inside its any you whole so whose album furniture yours to inside. Swing whoever fade staff library what myself practically hourly your down limp sedge himself in nightly today. How anyway that just credenza my kiss been company how some phew your monthly instance it game. Belief had leggings the place place tomorrow explode recently group that though moreover shall them hers my. Those indeed yet off why everyone whom college throw hey phew army Indian yet courageous her clump. Behind did another tomorrow according conclude door before bookcase cut due provided now a enormously either throughout. Convert army daily quarterly quarterly Hitlerian far team us me so Balinese few enough will moreover theirs.<br />Does dive chest elsewhere what her what that bevy wisp a some whomever spelling one from some. Me on string were that nobody move till relaxation clump been regularly you either ourselves several clothing. How there itchy including metal inadequately strongly bundle that to heap almost whose to though alone where. Stand Parisian his speed besides bowl violence yours maintain pharmacist in Plutonian include fortnightly this up yikes. Indeed Plutonian it what watch while class station limp yesterday solitude there which mine encouraging your you. These move yourselves peep host this the then energetic daily many violin one down that is i.e.. Being hatred accordingly this team that sister relieved where either stealthily journey collection those upon scream alas. Constantly you an point zebra lately her by for it collection behind eventually he alas mustering however. Whom quit mustering party room case these you those usually earlier that nightly muster pause example quarterly. Then there trip flock whale how sit whereas perfectly us lots in his been patience tomorrow Himalayan. Stack Swazi even moreover then over this how almost frankly daily had somewhat he lately homeless just. Somali whose finally that formerly murder there while though bunch for this punctually soap practically money lastly. After still over did auspicious nightly pair hungrily fascinate these which the those whose what hey you."
   * ```
   */
  paragraph(paragraphcount: number, sentencecount: number, wordcount: number, paragraphseparator: string): string;

  /**
   * Secret word or phrase used to authenticate access to a system or account.
   * @returns a random password
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.password(true,false,true,true,false,13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "-8r34!z294x7h"
   * ```
   */
  password(lower: boolean, upper: boolean, numeric: boolean, special: boolean, space: boolean, length: number): string;

  /**
   * Date that has occurred before the current moment in time.
   * @returns a random pasttime
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.pastTime())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "2024-03-13T07:32:19.327566866+01:00"
   * ```
   */
  pastTime(): string;

  /**
   * Personal data, like name and contact details, used for identification and communication.
   * @returns a random person
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.person())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {"FirstName":"Josiah","LastName":"Thiel","Gender":"male","SSN":"558821916","Image":"https://picsum.photos/367/273","Hobby":"Winemaking","Job":{"Company":"Headlight","Title":"Administrator","Descriptor":"Chief","Level":"Configuration"},"Address":{"Address":"6992 Inletstad, Las Vegas, Rhode Island 82271","Street":"6992 Inletstad","City":"Las Vegas","State":"Rhode Island","Zip":"82271","Country":"Sweden","Latitude":-75.921372,"Longitude":109.436476},"Contact":{"Phone":"4361943393","Email":"janisbarrows@hessel.net"},"CreditCard":{"Type":"Discover","Number":"4525298222125328","Exp":"01/29","Cvv":"282"}}
   * ```
   */
  person(): Record<string,unknown>;

  /**
   * Affectionate nickname given to a pet.
   * @returns a random pet name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.petName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Nacho"
   * ```
   */
  petName(): string;

  /**
   * Numerical sequence used to contact individuals via telephone or mobile devices.
   * @returns a random phone
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.phone())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "7053883851"
   * ```
   */
  phone(): string;

  /**
   * Formatted phone number of a person.
   * @returns a random phone formatted
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.phoneFormatted())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "1-053-883-8516"
   * ```
   */
  phoneFormatted(): string;

  /**
   * A small group of words standing together.
   * @returns a random phrase
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.phrase())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "many thanks"
   * ```
   */
  phrase(): string;

  /**
   * Adjective indicating ownership or possession.
   * @returns a random possessive adjective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.possessiveAdjective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "his"
   * ```
   */
  possessiveAdjective(): string;

  /**
   * Words used to express the relationship of a noun or pronoun to other words in a sentence.
   * @returns a random preposition
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.preposition())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "out"
   * ```
   */
  preposition(): string;

  /**
   * Preposition that can be formed by combining two or more prepositions.
   * @returns a random preposition compound
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.prepositionCompound())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "apart from"
   * ```
   */
  prepositionCompound(): string;

  /**
   * Two-word combination preposition, indicating a complex relation.
   * @returns a random preposition double
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.prepositionDouble())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "outside of"
   * ```
   */
  prepositionDouble(): string;

  /**
   * Phrase starting with a preposition, showing relation between elements in a sentence..
   * @returns a random preposition phrase
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.prepositionPhrase())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "of a fuel"
   * ```
   */
  prepositionPhrase(): string;

  /**
   * Single-word preposition showing relationships between 2 parts of a sentence.
   * @returns a random preposition simple
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.prepositionSimple())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "of"
   * ```
   */
  prepositionSimple(): string;

  /**
   * The amount of money or value assigned to a product, service, or asset in a transaction.
   * @returns a random price
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.price(13,13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 13
   * ```
   */
  price(min: number, max: number): number;

  /**
   * An item created for sale or use.
   * @returns a random product
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.product())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {"Name":"Quartz Teal Scale","Description":"Bravo mirror hundreds his party nobody. Anything wit she from above Chinese those choir toilet as you of other enormously.","Categories":["mobile phones","food and groceries","furniture"],"Price":82.9,"Features":["durable"],"Color":"green","Material":"bronze","UPC":"084020104876"}
   * ```
   */
  product(): Record<string,unknown>;

  /**
   * Classification grouping similar products based on shared characteristics or functions.
   * @returns a random product category
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.productCategory())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "mobile phones"
   * ```
   */
  productCategory(): string;

  /**
   * Explanation detailing the features and characteristics of a product.
   * @returns a random product description
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.productDescription())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Up brace lung anyway then bravo mirror hundreds his party. Person anything wit she from above Chinese those choir toilet as you."
   * ```
   */
  productDescription(): string;

  /**
   * Specific characteristic of a product that distinguishes it from others products.
   * @returns a random product feature
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.productFeature())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "touchscreen"
   * ```
   */
  productFeature(): string;

  /**
   * The substance from which a product is made, influencing its appearance, durability, and properties.
   * @returns a random product material
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.productMaterial())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "alloy"
   * ```
   */
  productMaterial(): string;

  /**
   * Distinctive title or label assigned to a product for identification and marketing.
   * @returns a random product name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.productName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Stream Gold Robot"
   * ```
   */
  productName(): string;

  /**
   * Standardized barcode used for product identification and tracking in retail and commerce.
   * @returns a random product upc
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.productUpc())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "092964558555"
   * ```
   */
  productUpc(): string;

  /**
   * Formal system of instructions used to create software and perform computational tasks.
   * @returns a random programming language
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.programmingLanguage())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Ceylon"
   * ```
   */
  programmingLanguage(): string;

  /**
   * Word used in place of a noun to avoid repetition.
   * @returns a random pronoun
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.pronoun())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "these"
   * ```
   */
  pronoun(): string;

  /**
   * Pronoun that points out specific people or things.
   * @returns a random pronoun demonstrative
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.pronounDemonstrative())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "these"
   * ```
   */
  pronounDemonstrative(): string;

  /**
   * Pronoun that does not refer to a specific person or thing.
   * @returns a random pronoun indefinite
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.pronounIndefinite())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "anyone"
   * ```
   */
  pronounIndefinite(): string;

  /**
   * Pronoun used to ask questions.
   * @returns a random pronoun interrogative
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.pronounInterrogative())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "who"
   * ```
   */
  pronounInterrogative(): string;

  /**
   * Pronoun used as the object of a verb or preposition.
   * @returns a random pronoun object
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.pronounObject())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "you"
   * ```
   */
  pronounObject(): string;

  /**
   * Pronoun referring to a specific persons or things.
   * @returns a random pronoun personal
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.pronounPersonal())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "you"
   * ```
   */
  pronounPersonal(): string;

  /**
   * Pronoun indicating ownership or belonging.
   * @returns a random pronoun possessive
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.pronounPossessive())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "mine"
   * ```
   */
  pronounPossessive(): string;

  /**
   * Pronoun referring back to the subject of the sentence.
   * @returns a random pronoun reflective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.pronounReflective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "herself"
   * ```
   */
  pronounReflective(): string;

  /**
   * Pronoun that introduces a clause, referring back to a noun or pronoun.
   * @returns a random pronoun relative
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.pronounRelative())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "that"
   * ```
   */
  pronounRelative(): string;

  /**
   * Adjective derived from a proper noun, often used to describe nationality or origin.
   * @returns a random proper adjective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.properAdjective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Confucian"
   * ```
   */
  properAdjective(): string;

  /**
   * Adjective that indicates the quantity or amount of something.
   * @returns a random quantitative adjective
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.quantitativeAdjective())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "several"
   * ```
   */
  quantitativeAdjective(): string;

  /**
   * Statement formulated to inquire or seek clarification.
   * @returns a random question
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.question())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Forage pinterest direct trade pug skateboard food truck flannel cold-pressed?"
   * ```
   */
  question(): string;

  /**
   * Direct repetition of someone else's words.
   * @returns a random quote
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.quote())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "\"Forage pinterest direct trade pug skateboard food truck flannel cold-pressed.\" - Lukas Ledner"
   * ```
   */
  quote(): string;

  /**
   * Randomly selected value from a slice of int.
   * @returns a random random int
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.randomInt([14,8,13]))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 14
   * ```
   */
  randomInt(ints: number[]): number;

  /**
   * Return a random string from a string array.
   * @returns a random random string
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.randomString(["none","how","these","keep","trip","congolese","choir","computer","still","far"]))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "none"
   * ```
   */
  randomString(strs: string[]): string[];

  /**
   * Randomly selected value from a slice of uint.
   * @returns a random random uint
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.randomUint([14,8,13]))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 14
   * ```
   */
  randomUint(uints: number[]): number;

  /**
   * Color defined by red, green, and blue light values.
   * @returns a random rgb color
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.rgbColor())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * [13,150,143]
   * ```
   */
  rgbColor(): number[];

  /**
   * Malfunction occuring during program execution, often causing abrupt termination or unexpected behavior.
   * @returns a random runtime error
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.runtimeError())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {}
   * ```
   */
  runtimeError(): string;

  /**
   * The specific identification string sent by the Safari web browser when making requests on the internet.
   * @returns a random safari user agent
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.safariUserAgent())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Mozilla/5.0 (iPhone; CPU iPhone OS 7_3_2 like Mac OS X; en-US) AppleWebKit/534.34.8 (KHTML, like Gecko) Version/3.0.5 Mobile/8B114 Safari/6534.34.8"
   * ```
   */
  safariUserAgent(): string;

  /**
   * Colors displayed consistently on different web browsers and devices.
   * @returns a random safe color
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.safeColor())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "black"
   * ```
   */
  safeColor(): string;

  /**
   * An institution for formal education and learning.
   * @returns a random school
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.school())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Valley View Private Middle School"
   * ```
   */
  school(): string;

  /**
   * Unit of time equal to 1/60th of a minute.
   * @returns a random second
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.second())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 9
   * ```
   */
  second(): number;

  /**
   * Set of words expressing a statement, question, exclamation, or command.
   * @returns a random sentence
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.sentence(13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Quickly up brace lung anyway then bravo mirror hundreds his party nobody person."
   * ```
   */
  sentence(wordcount: number): string;

  /**
   * Shuffles an array of ints.
   * @returns a random shuffle ints
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.shuffleInts([14,8,13]))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * [8,13,14]
   * ```
   */
  shuffleInts(ints: number[]): number[];

  /**
   * Shuffle an array of strings.
   * @returns a random shuffle strings
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.shuffleStrings(["none","how","these","keep","trip","congolese","choir","computer","still","far"]))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * ["these","congolese","far","choir","still","trip","computer","how","keep","none"]
   * ```
   */
  shuffleStrings(strs: string[]): string[];

  /**
   * Group of words that expresses a complete thought.
   * @returns a random simple sentence
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.simpleSentence())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "A brave fuel enormously beautifully stack easy day less badly in a bunch."
   * ```
   */
  simpleSentence(): string;

  /**
   * Catchphrase or motto used by a company to represent its brand or values.
   * @returns a random slogan
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.slogan())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Pride. De-engineered!"
   * ```
   */
  slogan(): string;

  /**
   * Random snack.
   * @returns a random snack
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.snack())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Hoisin marinated wing pieces"
   * ```
   */
  snack(): string;

  /**
   * Unique nine-digit identifier used for government and financial purposes in the United States.
   * @returns a random ssn
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.ssn())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "853698829"
   * ```
   */
  ssn(): string;

  /**
   * Governmental division within a country, often having its own laws and government.
   * @returns a random state
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.state())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Massachusetts"
   * ```
   */
  state(): string;

  /**
   * Shortened 2-letter form of a country's state.
   * @returns a random state abbreviation
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.stateAbbreviation())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "AA"
   * ```
   */
  stateAbbreviation(): string;

  /**
   * Public road in a city or town, typically with houses and buildings on each side.
   * @returns a random street
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.street())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "53883 Villageborough"
   * ```
   */
  street(): string;

  /**
   * Name given to a specific road or street.
   * @returns a random street name
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.streetName())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Fall"
   * ```
   */
  streetName(): string;

  /**
   * Numerical identifier assigned to a street.
   * @returns a random street number
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.streetNumber())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "25388"
   * ```
   */
  streetNumber(): string;

  /**
   * Directional or descriptive term preceding a street name, like 'East' or 'Main'.
   * @returns a random street prefix
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.streetPrefix())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "West"
   * ```
   */
  streetPrefix(): string;

  /**
   * Designation at the end of a street name indicating type, like 'Avenue' or 'Street'.
   * @returns a random street suffix
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.streetSuffix())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "ville"
   * ```
   */
  streetSuffix(): string;

  /**
   * Randomly split people into teams.
   * @returns a random teams
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.teams(["none","how","these","keep","trip","congolese","choir","computer","still","far"],["unless","army","party","riches","theirs","instead","here","mine","whichever","that"]))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {"riches":["choir"],"theirs":["still"],"here":["computer"],"mine":["how"],"unless":["these"],"army":["congolese"],"party":["far"],"instead":["trip"],"whichever":["keep"],"that":["none"]}
   * ```
   */
  teams(people: string[], teams: string[]): Record<string, Array<string>>;

  /**
   * Region where the same standard time is used, based on longitudinal divisions of the Earth.
   * @returns a random timezone
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.timezone())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Tonga Standard Time"
   * ```
   */
  timezone(): string;

  /**
   * Abbreviated 3-letter word of a timezone.
   * @returns a random timezone abbreviation
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.timezoneAbbreviation())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "TST"
   * ```
   */
  timezoneAbbreviation(): string;

  /**
   * Full name of a timezone.
   * @returns a random timezone full
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.timezoneFull())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "(UTC+13:00) Nuku'alofa"
   * ```
   */
  timezoneFull(): string;

  /**
   * The difference in hours from Coordinated Universal Time (UTC) for a specific region.
   * @returns a random timezone offset
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.timezoneOffset())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 13
   * ```
   */
  timezoneOffset(): number;

  /**
   * Geographic area sharing the same standard time.
   * @returns a random timezone region
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.timezoneRegion())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Asia/Manila"
   * ```
   */
  timezoneRegion(): string;

  /**
   * Verb that requires a direct object to complete its meaning.
   * @returns a random transitive verb
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.transitiveVerb())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "bother"
   * ```
   */
  transitiveVerb(): string;

  /**
   * Unsigned 16-bit integer, capable of representing values from 0 to 65,535.
   * @returns a random uint16
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.uint16())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 15082
   * ```
   */
  uint16(): number;

  /**
   * Unsigned 32-bit integer, capable of representing values from 0 to 4,294,967,295.
   * @returns a random uint32
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.uint32())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 2131652109
   * ```
   */
  uint32(): number;

  /**
   * Unsigned 64-bit integer, capable of representing values from 0 to 18,446,744,073,709,551,615.
   * @returns a random uint64
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.uint64())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 5195529898953699000
   * ```
   */
  uint64(): number;

  /**
   * Unsigned 8-bit integer, capable of representing values from 0 to 255.
   * @returns a random uint8
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.uint8())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 234
   * ```
   */
  uint8(): number;

  /**
   * Non-negative integer value between given range.
   * @returns a random uintrange
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.uintRange(13,13))
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 13
   * ```
   */
  uintRange(min: number, max: number): number;

  /**
   * Web address that specifies the location of a resource on the internet.
   * @returns a random url
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.url())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "http://www.forwardtransition.biz/enhance/benchmark"
   * ```
   */
  url(): string;

  /**
   * String sent by a web browser to identify itself when requesting web content.
   * @returns a random user agent
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.userAgent())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Mozilla/5.0 (X11; Linux i686) AppleWebKit/5311 (KHTML, like Gecko) Chrome/37.0.834.0 Mobile Safari/5311"
   * ```
   */
  userAgent(): string;

  /**
   * Unique identifier assigned to a user for accessing an account or system.
   * @returns a random username
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.username())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Abshire5538"
   * ```
   */
  username(): string;

  /**
   * 128-bit identifier used to uniquely identify objects or entities in computer systems.
   * @returns a random uuid
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.uuid())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "ea6ab1ab-f06c-4990-835d-e628b7e659e1"
   * ```
   */
  uuid(): string;

  /**
   * Occurs when input data fails to meet required criteria or format specifications.
   * @returns a random validation error
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.validationError())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * {}
   * ```
   */
  validationError(): string;

  /**
   * Edible plant or part of a plant, often used in savory cooking or salads.
   * @returns a random vegetable
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.vegetable())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Broccoli"
   * ```
   */
  vegetable(): string;

  /**
   * Word expressing an action, event or state.
   * @returns a random verb
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.verb())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "dig"
   * ```
   */
  verb(): string;

  /**
   * Phrase that Consists of a verb and its modifiers, expressing an action or state.
   * @returns a random verb phrase
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.verbPhrase())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "cheerfully cry enormously beautifully with easy day less badly"
   * ```
   */
  verbPhrase(): string;

  /**
   * Day of the week excluding the weekend.
   * @returns a random weekday
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.weekday())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "Sunday"
   * ```
   */
  weekday(): string;

  /**
   * Basic unit of language representing a concept or thing, consisting of letters and having meaning.
   * @returns a random word
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.word())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "quickly"
   * ```
   */
  word(): string;

  /**
   * Period of 365 days, the time Earth takes to orbit the Sun.
   * @returns a random year
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.year())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * 1979
   * ```
   */
  year(): number;

  /**
   * Numerical code for postal address sorting, specific to a geographic area.
   * @returns a random zip
   * @example
   * ```ts
   *import { Faker } from "k6/x/faker"
   *
   *let faker = new Faker(11)
   *
   *export default function () {
   *  console.log(faker.zen.zip())
   *}
   *
   *```
   * **Output** (formatted as JSON value)
   *```json
   * "25388"
   * ```
   */
  zip(): string;
}
