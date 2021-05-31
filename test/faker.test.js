/**
 * MIT License
 *
 * Copyright (c) 2021 Iván Szkiba
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

export { options } from "./expect.js";
import { describe } from "./expect.js";
import faker, { Faker } from "k6/x/faker";

const functions = [
  "emoji",
  "emojiAlias",
  "emojiCategory",
  "hackerPhrase",
  "ipv4Address",
  "lastName",
  "carTransmissionType",
  "hipsterParagraph",
  "httpStatusCodeSimple",
  "int8",
  "address",
  "adjective",
  "adverb",
  "animalType",
  "chromeUserAgent",
  "float32Range",
  "phoneFormatted",
  "vegetable",
  "uint32",
  "bool",
  "car",
  "contact",
  "firefoxUserAgent",
  "password",
  "safeColor",
  "beerMalt",
  "emojiDescription",
  "float64Range",
  "logLevel",
  "street",
  "carType",
  "city",
  "currencyShort",
  "hipsterSentence",
  "jobTitle",
  "map",
  "randomUint",
  "url",
  "animal",
  "countryAbr",
  "creditCardExp",
  "creditCardNumber",
  "jobLevel",
  "noun",
  "hackeringVerb",
  "hour",
  "monthString",
  "price",
  "achRouting",
  "company",
  "currencyLong",
  "domainSuffix",
  "farmAnimal",
  "language",
  "quote",
  "streetSuffix",
  "imageURL",
  "shuffleInts",
  "randomInt",
  "shuffleAnySlice",
  "creditCard",
  "httpMethod",
  "letter",
  "number",
  "operaUserAgent",
  "paragraph",
  "timeZone",
  "domainName",
  "hackerVerb",
  "rgbColor",
  "slice",
  "beerHop",
  "beerStyle",
  "bitcoinAddress",
  "buzzWord",
  "float32",
  "month",
  "uUID",
  "userAgent",
  "sentence",
  "uint64",
  "country",
  "email",
  "flipACoin",
  "longitudeInRange",
  "macAddress",
  "numerify",
  "teams",
  "dog",
  "hackerNoun",
  "int16",
  "question",
  "randomString",
  "streetPrefix",
  "beerAlcohol",
  "latitude",
  "preposition",
  "zip",
  "hackerAbbreviation",
  "ipv6Address",
  "programmingLanguage",
  "word",
  "companySuffix",
  "dateRange",
  "digit",
  "imagePng",
  "nameSuffix",
  "languageAbbreviation",
  "namePrefix",
  "appName",
  "beerBlg",
  "carMaker",
  "currency",
  "hackerAdjective",
  "job",
  "streetName",
  "breakfast",
  "day",
  "fruit",
  "letterN",
  "petName",
  "carModel",
  "gamertag",
  "lunch",
  "weekDay",
  "bs",
  "bitcoinPrivateKey",
  "firstName",
  "image",
  "loremIpsumSentence",
  "person",
  "username",
  "carFuelType",
  "emojiTag",
  "fileExtension",
  "int64",
  "name",
  "sSN",
  "struct",
  "beerYeast",
  "hexColor",
  "json",
  "minute",
  "regex",
  "shuffleStrings",
  "timeZoneRegion",
  "verb",
  "achAccount",
  "creditCardCvv",
  "float64",
  "hipsterWord",
  "imageJpeg",
  "state",
  "faker",
  "creditCardType",
  "jobDescriptor",
  "latitudeInRange",
  "uint16",
  "weighted",
  "second",
  "timeZoneAbv",
  "appAuthor",
  "cat",
  "digitN",
  "fileMimeType",
  "gender",
  "loremIpsumWord",
  "uint8",
  "beerIbu",
  "generate",
  "lexify",
  "programmingLanguageBest",
  "streetNumber",
  "phone",
  "timeZoneOffset",
  "appVersion",
  "beerName",
  "date",
  "dessert",
  "httpStatusCode",
  "int32",
  "year",
  "dinner",
  "longitude",
  "nanoSecond",
  "phrase",
  "stateAbr",
  "timeZoneFull",
  "color",
  "loremIpsumParagraph",
  "safariUserAgent",
  "snack",
];

export default function () {
  describe("Faker constructor", (t) => {
    const f = new Faker();
    t.expect(f.name()).as("name").toBeTruthy();
  });

  describe("Seed parameter", (t) => {
    t.expect(new Faker().name() != new Faker().name())
      .as("random")
      .toBeTruthy();

    t.expect(new Faker(42).name() == new Faker(42).name())
      .as("fixed")
      .toBeTruthy();
  });

  describe("Function name mapping", (t) => {
    for (const f of functions) {
      t.expect(f in faker)
        .as(`has ${f}()`)
        .toBeTruthy();
    }
  });
}
