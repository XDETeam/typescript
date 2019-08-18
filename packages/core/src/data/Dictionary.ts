export interface IDictionary<T> {
  [key: string]: T;
}

export class Dictionary<T> implements IDictionary<T> {
  [key: string]: T;

  static from<T>(array: T[], indexKey: keyof T & string): IDictionary<T> {
    const result: IDictionary<T> = {};

    for (let i: number = 0, l: number = array.length; i < l; i++) {
      const key: string = (array[i][indexKey] as unknown) as string;
      result[key] = array[i];
    }

    return result;
  }
}
