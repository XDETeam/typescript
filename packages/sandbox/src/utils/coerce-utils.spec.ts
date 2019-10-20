import { coerceToBoolean, coerceToNumber } from "./coerce-utils";

it("should coerce to boolean", () => {
  expect(coerceToBoolean("")).toEqual(false);
  expect(coerceToBoolean(false)).toEqual(false);
  expect(coerceToBoolean(null)).toEqual(false);
  expect(coerceToBoolean(void 0)).toEqual(false);
  expect(coerceToBoolean("false")).toEqual(false);

  expect(coerceToBoolean(true)).toEqual(true);
  expect(coerceToBoolean(1)).toEqual(true);
  expect(coerceToBoolean(0.00000001)).toEqual(true);
  expect(coerceToBoolean("123")).toEqual(true);
  expect(coerceToBoolean(" ")).toEqual(true);
});

it("should coerce to number", () => {
  expect(coerceToNumber(0.000000001)).toEqual(0.000000001);
  expect(coerceToNumber("123")).toEqual(123);
  expect(coerceToNumber("123.456")).toEqual(123.456);

  expect(coerceToNumber("123fg", 0)).toEqual(0);
  expect(coerceToNumber("123,456")).toEqual(0);
  expect(coerceToNumber("123fg", 1)).toEqual(1);
});
