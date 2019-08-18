export const coerceToBoolean: (value: any) => boolean = (
  value: any
): boolean => {
  return !!value && `${value}` !== "false";
};

export const coerceToNumber: (value: any, fallbackValue?: number) => number = (
  value: any,
  fallbackValue: number = 0
): number => {
  return Number.isNaN(Number(value)) ? fallbackValue : Number(value);
};
