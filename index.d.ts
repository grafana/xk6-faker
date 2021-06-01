/**
 * xk6-faker random fake data generator
 *
 * The main generator class is [Faker](classes/faker.md).
 *
 * ```js
 * import { Faker } from "k6/x/faker"
 *
 * let f = new Faker();
 * console.log(f.name());
 * ```
 *
 * Pass a random seed number to [Faker constructor](classes/faker.md#constructor) if you want to get deterministic random values.
 *
 * ```js
 * import { Faker } from "k6/x/faker"
 *
 * let f = new Faker(1234);
 * console.log(f.name());
 * ```
 *
 * For easier usage, the module's default export is a Faker instance too, so you can use generator functions without instantiating the [Faker](classes/faker.md) class:
 *
 * ```js
 * import faker from "k6/x/faker"
 *
 * console.log(faker.name())
 * ```
 *
 * You can pass random seed value in `XK6_FAKER_SEED` env if you want deterministic generated random values.
 */

/**
 * Address is a struct full of address information
 */
export declare interface Address {
  address: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  latitude: number;
  longitude: number;
}

/**
 * Car is a struct dataset of all car information
 */
export declare interface Car {
  type: string;
  fuel: string;
  transmission: string;
  brand: string;
  model: string;
  year: number;
}

/**
 * Contact struct full of contact info
 */
export declare interface Contact {
  phone: string;
  email: string;
}

/**
 * CreditCard is a struct containing credit variables
 */
export declare interface CreditCard {
  type: string;
  number: string;
  exp: string;
  cvv: string;
}

/**
 * CreditCardOptions is the options for credit card number
 */
export declare interface CreditCardOptions {
  types: string[];
  bins: string[];
  gaps: boolean;
}

/**
 * Currency is a struct of currency information
 */
export declare interface Currency {
  short: string;
  long: string;
}

/**
 * Job is a struct of job information
 */
export declare interface Job {
  company: string;
  title: string;
  descriptor: string;
  level: string;
}

/**
 * Person is a struct of person information
 */
export declare interface Person {
  firstName: string;
  lastName: string;
  gender: string;
  // ssn: string;
  image: string;
  job: Job;
  address: Address;
  contact: Contact;
  creditCard: CreditCard;
}

export declare class Faker {
  /**
   * Create new Faker instance.
   *
   * @param seed random seed value for deterministic generator
   */
  constructor(seed?: number);

  /**
   * achAccount will generate a 12 digit account number
   */
  achAccount(): string;

  /**
   * achRouting will generate a 9 digit routing number
   */
  achRouting(): string;

  /**
   * address will generate a struct of address information
   */
  address(): Address;

  /**
   * adjective will generate a random adjective
   */
  adjective(): string;

  /**
   * adverb will generate a random adverb
   */
  adverb(): string;

  /**
   * animal will return a random animal
   */
  animal(): string;

  /**
   * animalType will return a random animal type
   */
  animalType(): string;

  /**
   * appAuthor will generate a random company or person name
   */
  appAuthor(): string;

  /**
   * appName will generate a random app name
   */
  appName(): string;

  /**
   * appVersion will generate a random app version
   */
  appVersion(): string;

  /**
   * bs will generate a random company bs string
   */
  bs(): string;

  /**
   * beerAlcohol will return a random beer alcohol level between 2.0 and 10.0
   */
  beerAlcohol(): string;

  /**
   * beerBlg will return a random beer blg between 5.0 and 20.0
   */
  beerBlg(): string;

  /**
   * beerHop will return a random beer hop
   */
  beerHop(): string;

  /**
   * beerIbu will return a random beer ibu value between 10 and 100
   */
  beerIbu(): string;

  /**
   * beerMalt will return a random beer malt
   */
  beerMalt(): string;

  /**
   * beerName will return a random beer name
   */
  beerName(): string;

  /**
   * beerStyle will return a random beer style
   */
  beerStyle(): string;

  /**
   * beerYeast will return a random beer yeast
   */
  beerYeast(): string;

  /**
   * bitcoinAddress will generate a random bitcoin address consisting of numbers, upper and lower characters
   */
  bitcoinAddress(): string;

  /**
   * bitcoinPrivateKey will generate a random bitcoin private key base58 consisting of numbers, upper and lower characters
   */
  bitcoinPrivateKey(): string;

  /**
   * bool will generate a random boolean value
   */
  bool(): boolean;

  /**
   * breakfast will return a random breakfast name
   */
  breakfast(): string;

  /**
   * buzzWord will generate a random company buzz word string
   */
  buzzWord(): string;

  /**
   * car will generate a struct with car information
   */
  car(): Car;

  /**
   * carFuelType will return a random fuel type
   */
  carFuelType(): string;

  /**
   * carMaker will return a random car maker
   */
  carMaker(): string;

  /**
   * carModel will return a random car model
   */
  carModel(): string;

  /**
   * carTransmissionType will return a random transmission type
   */
  carTransmissionType(): string;

  /**
   * carType will generate a random car type string
   */
  carType(): string;

  /**
   * cat will return a random cat breed
   */
  cat(): string;

  /**
   * chromeUserAgent will generate a random chrome browser user agent string
   */
  chromeUserAgent(): string;

  /**
   * city will generate a random city string
   */
  city(): string;

  /**
   * color will generate a random color string
   */
  color(): string;

  /**
   * company will generate a random company name string
   */
  company(): string;

  /**
   * companySuffix will generate a random company suffix string
   */
  companySuffix(): string;

  /**
   * contact will generate a struct with information randomly populated contact information
   */
  contact(): Contact;

  /**
   * country will generate a random country string
   */
  country(): string;

  /**
   * countryAbr will generate a random abbreviated country string
   */
  countryAbr(): string;

  /**
   * creditCard will generate a struct full of credit card information
   */
  creditCard(): CreditCard;

  /**
   * creditCardCvv will generate a random CVV number Its a string because you could have 017 as an exp date
   */
  creditCardCvv(): string;

  /**
   * creditCardExp will generate a random credit card expiration date string Exp date will always be a future date
   */
  creditCardExp(): string;

  /**
   * creditCardNumber will generate a random luhn credit card number
   */
  creditCardNumber(opts?: CreditCardOptions): string;

  /**
   * creditCardType will generate a random credit card type string
   */
  creditCardType(): string;

  /**
   * currency will generate a struct with random currency information
   */
  currency(): Currency;

  /**
   * currencyLong will generate a random long currency name
   */
  currencyLong(): string;

  /**
   * currencyShort will generate a random short currency value
   */
  currencyShort(): string;

  /**
   * date will generate a random time.Time struct
   */
  date(): Date;

  /**
   * dateRange will generate a random time.Time struct between a start and end date
   */
  dateRange(start: Date, end: Date): Date;

  /**
   * day will generate a random day between 1 - 31
   */
  day(): number;

  /**
   * dessert will return a random dessert name
   */
  dessert(): string;

  /**
   * digit will generate a single ASCII digit
   */
  digit(): string;

  /**
   * digitN will generate a random string of length N consists of ASCII digits (note it can start with 0).
   * @param n number of letters to generate
   */
  digitN(m: number): string;

  /**
   * dinner will return a random dinner name
   */
  dinner(): string;

  /**
   * dog will return a random dog breed
   */
  dog(): string;

  /**
   * domainName will generate a random url domain name
   */
  domainName(): string;

  /**
   * domainSuffix will generate a random domain suffix
   */
  domainSuffix(): string;

  /**
   * email will generate a random email string
   */
  email(): string;

  /**
   * emoji will return a random fun emoji
   */
  emoji(): string;

  /**
   * emojiAlias will return a random fun emoji alias
   */
  emojiAlias(): string;

  /**
   * emojiCategory will return a random fun emoji category
   */
  emojiCategory(): string;

  /**
   * emojiDescription will return a random fun emoji description
   */
  emojiDescription(): string;

  /**
   * emojiTag will return a random fun emoji tag
   */
  emojiTag(): string;

  /**
   * farmAnimal will return a random animal that usually lives on a farm
   */
  farmAnimal(): string;

  /**
   * fileExtension will generate a random file extension
   */
  fileExtension(): string;

  /**
   * fileMimeType will generate a random mime file type
   */
  fileMimeType(): string;

  /**
   * firefoxUserAgent will generate a random firefox broswer user agent string
   */
  firefoxUserAgent(): string;

  /**
   * firstName will generate a random first name
   */
  firstName(): string;

  /**
   * flipACoin will return a random value of Heads or Tails
   */
  flipACoin(): string;

  /**
   * float32 will generate a random float32 value
   */
  float32(): number;

  /**
   * float32Range will generate a random float32 value between min and max
   */
  float32Range(min: number, max: number): number;

  /**
   * float64 will generate a random float64 value
   */
  float64(): number;

  /**
   * float64Range will generate a random float64 value between min and max
   */
  float64Range(min: number, max: number): number;

  /**
   * fruit will return a random fruit name
   */
  fruit(): string;

  /**
   * gamertag will generate a random video game username
   */
  gamertag(): string;

  /**
   * gender will generate a random gender string
   */
  gender(): string;

  /**
   * Generate fake information from given string. Replaceable values should be within {}
   *
   * **Functions**
   * - `{firstname}` - `billy`
   * - `{sentence:3}` - `Record river mind.`
   * - `{number:1,10}` - `4`
   * - `{uuid}` - `590c1440-9888-45b0-bd51-a817ee07c3f2`
   *
   * **Letters/Numbers**
   * - random numbers: `###` - `481`
   * - random letters: `???` - `fda`
   *
   * @param dataVal template string
   */
  generate(dataVal: string): string;

  /**
   * httpMethod will generate a random http method
   */
  httpMethod(): string;

  /**
   * httpStatusCode will generate a random status code
   */
  httpStatusCode(): number;

  /**
   * httpStatusCodeSimple will generate a random simple status code
   */
  httpStatusCodeSimple(): number;

  /**
   * hackerAbbreviation will return a random hacker abbreviation
   */
  hackerAbbreviation(): string;

  /**
   * hackerAdjective will return a random hacker adjective
   */
  hackerAdjective(): string;

  /**
   * hackerNoun will return a random hacker noun
   */
  hackerNoun(): string;

  /**
   * hackerPhrase will return a random hacker sentence
   */
  hackerPhrase(): string;

  /**
   * hackerVerb will return a random hacker verb
   */
  hackerVerb(): string;

  /**
   * hackeringVerb will return a random hacker ingverb
   */
  hackeringVerb(): string;

  /**
   * hexColor will generate a random hexadecimal color string
   */
  hexColor(): string;

  /**
   * hipsterParagraph will generate a random paragraphGenerator Set Paragraph Count Set Sentence Count Set Word Count Set Paragraph Separator
   */
  hipsterParagraph(paragraphCount: number, sentenceCount: number, wordCount: number, separator: string): string;

  /**
   * hipsterSentence will generate a random sentence
   */
  hipsterSentence(wordCount: number): string;

  /**
   * hipsterWord will return a single hipster word
   */
  hipsterWord(): string;

  /**
   * hour will generate a random hour - in military time
   */
  hour(): number;

  /**
   * ipv4Address will generate a random version 4 ip address
   */
  ipv4Address(): string;

  /**
   * ipv6Address will generate a random version 6 ip address
   */
  ipv6Address(): string;

  /**
   * imageJpeg generates a random rgba jpeg image
   */
  imageJpeg(width: number, height: number): ArrayBuffer;

  /**
   * imagePng generates a random rgba png image
   */
  imagePng(width: number, height: number): ArrayBuffer;

  /**
   * imageURL will generate a random Image Based Upon Height And Width. https://picsum.photos/
   */
  imageURL(width: number, height: number): string;

  /**
   * int16 will generate a random int16 value
   */
  int16(): number;

  /**
   * int32 will generate a random int32 value
   */
  int32(): number;

  /**
   * int64 will generate a random int64 value
   */
  int64(): number;

  /**
   * int8 will generate a random Int8 value
   */
  int8(): number;

  /**
   * job will generate a struct with random job information
   */
  job(): Job;

  /**
   * jobDescriptor will generate a random job descriptor string
   */
  jobDescriptor(): string;

  /**
   * jobLevel will generate a random job level string
   */
  jobLevel(): string;

  /**
   * jobTitle will generate a random job title string
   */
  jobTitle(): string;

  /**
   * language will return a random language
   */
  language(): string;

  /**
   * languageAbbreviation will return a random language abbreviation
   */
  languageAbbreviation(): string;

  /**
   * lastName will generate a random last name
   */
  lastName(): string;

  /**
   * latitude will generate a random latitude float64
   */
  latitude(): number;

  /**
   * latitudeInRange will generate a random latitude within the input range
   */
  latitudeInRange(min: number, max: number): number;

  /**
   * letter will generate a single random lower case ASCII letter
   */
  letter(): string;

  /**
   * letterN will generate a random ASCII string with length N
   * @param n number of letters to generate
   */
  letterN(n: number): string;

  /**
   * lexify will replace ? with random generated letters
   */
  lexify(str: string): string;

  /**
   * logLevel will generate a random log level See data/LogLevels for list of available levels
   */
  logLevel(): string;

  /**
   * longitude will generate a random longitude float64
   */
  longitude(): number;

  /**
   * longitudeInRange will generate a random longitude within the input range
   */
  longitudeInRange(min: number, max: number): number;

  /**
   * loremIpsumParagraph will generate a random paragraphGenerator
   */
  loremIpsumParagraph(paragraphCount: number, sentenceCount: number, wordCount: number, separator: string): string;

  /**
   * loremIpsumSentence will generate a random sentence
   */
  loremIpsumSentence(wordCount: number): string;

  /**
   * loremIpsumWord will generate a random word
   */
  loremIpsumWord(): string;

  /**
   * lunch will return a random lunch name
   */
  lunch(): string;

  /**
   * macAddress will generate a random mac address
   */
  macAddress(): string;

  /**
   * minute will generate a random minute
   */
  minute(): number;

  /**
   * month will generate a random month int
   */
  month(): number;

  /**
   * monthString will generate a random month string
   */
  monthString(): string;

  /**
   * name will generate a random First and Last Name
   */
  name(): string;

  /**
   * namePrefix will generate a random name prefix
   */
  namePrefix(): string;

  /**
   * nameSuffix will generate a random name suffix
   */
  nameSuffix(): string;

  /**
   * nanoSecond will generate a random nano second
   */
  nanoSecond(): number;

  /**
   * noun will generate a random noun
   */
  noun(): string;

  /**
   * number will generate a random number between given min And max
   */
  number(min: number, max: number): number;

  /**
   * numerify will replace # with random numerical values
   */
  numerify(str: string): string;

  /**
   * operaUserAgent will generate a random opera browser user agent string
   */
  operaUserAgent(): string;

  /**
   * paragraph will generate a random paragraphGenerator
   */
  paragraph(paragraphCount: number, sentenceCount: number, wordCount: number, separator: string): string;

  /**
   * password will generate a random password. Minimum number length of 5 if less than.
   */
  password(lower: boolean, upper: boolean, numeric: boolean, special: boolean, num: number): string;

  /**
   * person will generate a struct with person information
   */
  person(): string;

  /**
   * petName will return a random fun pet name
   */
  petName(): string;

  /**
   * phone will generate a random phone number string
   */
  phone(): string;

  /**
   * phoneFormatted will generate a random phone number string
   */
  phoneFormatted(): string;

  /**
   * phrase will return a random dictionary phrase
   */
  phrase(): string;

  /**
   * preposition will generate a random preposition
   */
  preposition(): string;

  /**
   * price will take in a min and max value and return a formatted price
   */
  price(min: number, max: number): number;

  /**
   * programmingLanguage will return a random programming language
   */
  programmingLanguage(): string;

  /**
   * programmingLanguageBest will return a random programming language
   */
  programmingLanguageBest(): string;

  /**
   * question will return a random question
   */
  question(): string;

  /**
   * quote will return a random quote from a random person
   */
  quote(): string;

  /**
   * rgbColor will generate a random int slice color
   */
  rgbColor(): number[];

  /**
   * randomInt will take in a slice of int and return a randomly selected value
   */
  randomInt(all: number[]): number;

  /**
   * randomString will take in a slice of string and return a randomly selected value
   */
  randomString(all: string[]): string;

  /**
   * randomUint will take in a slice of uint and return a randomly selected value
   */
  randomUint(all: number[]): number;

  /**
   * regex will generate a string based upon a RE2 syntax
   */
  regex(regexStr: string): string;

  /**
   * SSN will generate a random Social Security Number
   */
  ssn(): string;

  /**
   * safariUserAgent will generate a random safari browser user agent string
   */
  safariUserAgent(): string;

  /**
   * safeColor will generate a random safe color string
   */
  safeColor(): string;

  /**
   * second will generate a random second
   */
  second(): number;

  /**
   * sentence will generate a random sentence
   */
  sentence(wordCount: number): string;

  /**
   * snack will return a random snack name
   */
  snack(): string;

  /**
   * state will generate a random state string
   */
  state(): string;

  /**
   * stateAbr will generate a random abbreviated state string
   */
  stateAbr(): string;

  /**
   * street will generate a random address street string
   */
  street(): string;

  /**
   * streetName will generate a random address street name string
   */
  streetName(): string;

  /**
   * streetNumber will generate a random address street number string
   */
  streetNumber(): string;

  /**
   * streetPrefix will generate a random address street prefix string
   */
  streetPrefix(): string;

  /**
   * streetSuffix will generate a random address street suffix string
   */
  streetSuffix(): string;

  /**
   * timeZone will select a random timezone string
   */
  timeZone(): string;

  /**
   * timeZoneAbv will select a random timezone abbreviation string
   */
  timeZoneAbv(): string;

  /**
   * timeZoneFull will select a random full timezone string
   */
  timeZoneFull(): string;

  /**
   * timeZoneOffset will select a random timezone offset
   */
  timeZoneOffset(): number;

  /**
   * timeZoneRegion will select a random region style timezone string, e.g. "America/Chicago"
   */
  timeZoneRegion(): string;

  /**
   * url will generate a random url string
   */
  url(): string;

  /**
   * uuid (version 4) will generate a random unique identifier based upon random numbers Format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  uuid(): string;

  /**
   * uint16 will generate a random uint16 value
   */
  uint16(): number;

  /**
   * uint32 will generate a random uint32 value
   */
  uint32(): number;

  /**
   * uint64 will generate a random uint64 value
   */
  uint64(): number;

  /**
   * uint8 will generate a random uint8 value
   */
  uint8(): number;

  /**
   * userAgent will generate a random broswer user agent
   */
  userAgent(): string;

  /**
   * username will generate a random username based upon picking a random lastname and random numbers at the end
   */
  username(): string;

  /**
   * vegetable will return a random vegetable name
   */
  vegetable(): string;

  /**
   * verb will generate a random verb
   */
  verb(): string;

  /**
   * weekDay will generate a random weekday string (Monday-Sunday)
   */
  weekDay(): string;

  /**
   * word will generate a random word
   */
  word(): string;

  /**
   * year will generate a random year between 1900 - current year
   */
  year(): number;

  /**
   * zip will generate a random Zip code string
   */
  zip(): string;
}
