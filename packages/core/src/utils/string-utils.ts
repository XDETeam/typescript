export const capitalize: (word: string) => string = (word: string): string => {
  return word ? word[0].toUpperCase() + word.slice(1) : "";
};

export const padStart: (
  input: string,
  n: number,
  padSymbol?: string
) => string = (input: string, n: number, padSymbol: string = "0"): string => {
  if (input.length >= n) {
    return input;
  }
  const pads: string = padSymbol.repeat(n - input.length);
  return pads + input;
};

export const padEnd: (
  input: string,
  n: number,
  padSymbol?: string
) => string = (input: string, n: number, padSymbol: string = "0") => {
  if (input.length >= n) {
    return input;
  }
  const pads: string = padSymbol.repeat(n - input.length);
  return input + pads;
};

export const toCamelCase = (str: string): string => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, "");
};

export const toPascalCase = (str: string): string => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, ch => ch.toUpperCase())
    .replace(/\s+/g, "");
};
