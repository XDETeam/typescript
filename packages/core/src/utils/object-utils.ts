/**
 * Performs a shallow copy of object.
 * @param obj Object to copy.
 * @returns {{}} One-level shallow copy of object.
 */
export const clone = <T extends {}>(obj: T): typeof obj => {
  return { ...obj };
};

/**
 * Performs a deep copy of an object.
 * @param obj Object to copy.
 * @returns {typeof obj}
 *
 * Why this approach?
 * See https://jsperf.com/deep-copy-vs-json-stringify-json-parse/5
 */
export const cloneDeep = <T extends {}>(obj: T): typeof obj => {
  const newObject: T = {} as T;

  if (typeof obj !== "object" || !obj) {
    return obj;
  }

  if (Object.prototype.toString.apply(obj) === "[object Array]") {
    const arrObject = [];

    for (let i = 0; i < ((obj as unknown) as any[]).length; i += 1) {
      arrObject[i] = cloneDeep(((obj as unknown) as any[])[i]);
    }

    return arrObject as any;
  }

  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      (newObject as any)[i] = cloneDeep(obj[i]);
    }
  }

  return newObject;
};
