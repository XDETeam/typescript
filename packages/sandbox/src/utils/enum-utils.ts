export type TNumberEnum<E> = Record<keyof E, number | string> & {
  [key: number]: number | string;
};

export interface IObjectFromEnum<E> {
  [key: number]: string & keyof E;
}

/**
 * To work with string enums, just use Object.keys(Enum).map(k => Enum[k as any]).
 * @returns @example { 0: "A", 1: "B" }
 */
export const numberEnumToObject = <E extends TNumberEnum<E>>(
  customEnum: E
): IObjectFromEnum<typeof customEnum> => {
  const obj: IObjectFromEnum<typeof customEnum> = {};

  // tslint:disable-next-line:forin
  for (const n in customEnum) {
    const key = customEnum[n];
    if (typeof key === "number") {
      obj[key] = n;
    }
  }

  return obj;
};

/**
 * To work with string enums, just use Object.keys(Enum).map(k => Enum[k as any]).
 * @returns @example [0, 1]
 */
export const numberEnumToValuesArray = <E extends TNumberEnum<E>>(
  customEnum: E
): number[] => {
  const values: number[] = [];

  for (const n in customEnum) {
    if (typeof customEnum[n] === "number") {
      values.push(customEnum[n] as number);
    }
  }

  return values;
};
