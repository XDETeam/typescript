import {
  capitalize,
  padEnd,
  padStart,
  toCamelCase,
  toPascalCase
} from "./string-utils";

it("should capitalize", () => {
  expect(capitalize("")).toEqual("");
  expect(capitalize("abc")).toEqual("Abc");
  expect(capitalize("Abc")).toEqual("Abc");
  expect(capitalize("абв")).toEqual("Абв");
  expect(capitalize("Абв")).toEqual("Абв");
});

it("should pad from the beginning of the string", () => {
  expect(padStart("", 1)).toEqual("0");
  expect(padStart("9", 2)).toEqual("09");
  expect(padStart("1408", 7, "1")).toEqual("1111408");
});

it("should pad from the end of the string", () => {
  expect(padEnd("", 1)).toEqual("0");
  expect(padEnd("9", 2)).toEqual("90");
  expect(padEnd("1408", 7, "1")).toEqual("1408111");
});

it("should convert string to camel case", () => {
  expect(toCamelCase("some string")).toEqual("someString");
  expect(toCamelCase("some-string")).toEqual("some-String");
});

it("should convert string to pascal case", () => {
  expect(toPascalCase("some string")).toEqual("SomeString");
  expect(toPascalCase("some-string")).toEqual("Some-String");
});
