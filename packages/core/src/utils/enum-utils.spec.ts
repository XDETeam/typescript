import { numberEnumToObject, numberEnumToValuesArray } from "./enum-utils";

enum E1 {
  A,
  B
}

enum E2 {
  Some = 8,
  Some2 = 100
}

enum E3 {
  A = 3,
  B = "Value"
}

it("should convert enum to object", () => {
  expect(numberEnumToObject(E1)).toEqual({ 0: "A", 1: "B" });
  expect(numberEnumToObject(E2)).toEqual({ 8: "Some", 100: "Some2" });

  // NOTE: Non-number property filtered out!
  // expect(numberEnumToObject(NonWorking)).toEqual({ 3: "A", Value: "B" });
  expect(numberEnumToObject(E3)).toEqual({ 3: "A" });
});

it("should convert enum to values array", () => {
  expect(numberEnumToValuesArray(E1)).toEqual([0, 1]);
  expect(numberEnumToValuesArray(E2)).toEqual([8, 100]);

  // NOTE: Non-number property filtered out!
  // expect(numberEnumToValuesArray(NonWorking)).toEqual([3, "Value"]);
  expect(numberEnumToValuesArray(E3)).toEqual([3]);
});
