/**
 *  An unique symbol to be used as a nominal type discriminator field.
 */
export declare const Nomen: unique symbol;

/**
 *  Nominal type
 * 
 *  @remarks
 *  TODO:Reference to documentation from https://sde.team
 * 
 *  @example 
 *  A good sample is to use nominal types for units of measurement:
 *  ```
 *  export type USD = Nominal<number, "USD">;
 *  const amount = 100 as USD;
 *  ```
 */
export type Nominal<T, TNomen> = T & {
    readonly [Nomen]: TNomen;
};
