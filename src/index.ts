export type NumberLike = string | number | null | undefined;

/**
 * NumberHelper class
 * @export
 * @class NumberHelper
 */
export default class NumberHelper {


  /**
   * Checks if element is a number
   *
   * @static
   * @param {NumberLike} n The element to check
   * @returns {boolean} Whether the element is a number or not
   * @memberof NumberHelper
   */
  public static isNumber(n: NumberLike): boolean {
    return !isNaN(NumberHelper.enforceNumber(n));
  }

  /**
   * Checks if element is an integer
   *
   * @static
   * @param {NumberLike} n Number to check
   * @returns {boolean} Whether the number is an integer or not
   * @memberof NumberHelper
   */
  public static isInt(n: NumberLike): boolean {
    if (NumberHelper.isNumber(n)) {
      return NumberHelper.enforceNumber(n) % 1 === 0;
    } else {
      return false;
    }
  }

  /**
   * Checks if element is a float number
   *
   * @static
   * @param {NumberLike} n Number to check
   * @returns {boolean} Whether the number is a float or not
   * @memberof NumberHelper
   */
  public static isFloat(n: NumberLike): boolean {
    if (NumberHelper.isNumber(n)) {
      return NumberHelper.enforceNumber(n).toString().includes('.');
    } else {
      return false;
    }
  }

  /**
   * Checks if number is even
   * Any integer that can be divided exactly by 2 is an even number
   *
   * @static
   * @param {NumberLike} n Number to check
   * @returns {boolean} Whether the number is even or not
   * @memberof NumberHelper
   */
  public static isEven(n: NumberLike): boolean {
    return NumberHelper.enforceNumber(n) % 2 === 0;
  }

  /**
   * Checks if number is odd
   * Any integer that cannot be divided exactly by 2 is an odd number.
   *
   * @static
   * @param {NumberLike} n Number to check
   * @returns {boolean} Whether the number is odd or not
   * @memberof NumberHelper
   */
  public static isOdd(n: NumberLike): boolean {
    return NumberHelper.enforceNumber(n) % 2 !== 0;
  }

  /**
   * Checks if numer is finite
   *
   * @static
   * @param {NumberLike} n Number to check
   * @returns {boolean} Whether the number is finite or not
   * @memberof NumberHelper
   */
  public static isFinite(n: NumberLike): boolean {
    return isFinite(NumberHelper.enforceNumber(n));
  }

  /**
   * Checks if number is prime
   * Natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers
   *
   * @static
   * @param {(number|string)} num Number to check
   * @returns {boolean} Whether the numbere is prime or not
   * @memberof NumberHelper
   */
  public static isPrime(num: number): boolean {
    return (
      num > 1
      && Array(Math.floor(Math.sqrt(num)) - 1)
        .fill(0)
        // eslint-disable-next-line @typescript-eslint/naming-convention
        .map((_, i) => i + 2)
        .every((i) => num % i !== 0)
    );
  }

  /**
   * Gets random integer number in a range
   *
   * @static
   * @param {number} min Minimum number
   * @param {number} max Maximum number
   * @returns {number} Random number in range
   * @memberof NumberHelper
   */
  public static getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Prefixes a number with zeros until desired length
   *
   * @static
   * @param {number} number Number to pad
   * @param {number} length Desired number length
   * @returns {string} Padded number as a string
   * @memberof NumberHelper
   */
  public static prefixWithZeros(number: number, length: number): string {
    return String(number).padStart(length, '0');
  }

  /**
   * Checks the decimals of a number
   * @static
   * @param  {NumberLike} number Number to check the amount of decimals of
   * @return {number} The number of decimals
   * @memberof NumberHelper
   */
  public static checkDecimals(number: NumberLike): number {
    if (NumberHelper.isNumber(number)) {
      const decimals = NumberHelper.enforceNumber(number).toString().split('.').pop();

      return decimals !== undefined ? decimals.length : 0;
    } else {
      throw new Error('Entered number is NaN');
    }
  }

  /**
   * Converts string to number
   *
   * @static
   * @param {NumberLike} toCheck Number-like to convert
   * @param {number} [decimals=2] Number of decimals to truncate
   * @returns {number} Converted number
   * @memberof NumberHelper
   */
  public static convertToNumber(toCheck: NumberLike, decimals = 2): number {
    let number = 0;
    if (NumberHelper.isInt(toCheck)) {
      number = NumberHelper.enforceNumber(toCheck);
    } else if (NumberHelper.isFloat(toCheck)) {
      number = NumberHelper.enforceNumber(NumberHelper.enforceNumber(toCheck).toFixed(decimals));
    }
    return number;
  }

  /**
   * Processes number to get clean value
   *
   * @static
   * @param {NumberLike} value String or number to process
   * @param {number} [decimals=2] No. of decimals to truncate to
   * @returns {number} Parsed and processed number
   * @memberof NumberHelper
   */
  public static processNumber(value: NumberLike, decimals = 2): number {
    return NumberHelper.convertToNumber(value, decimals);
  }

  /**
   * Creates a range between start and end, including them, according to step
   *
   * @static
   * @param  {number} start Starting value
   * @param  {number} end End value
   * @param  {number} step Step to use for the range
   * @return {number[]} The range
   * @memberof NumberHelper
   */
  public static rangeBetween(start: number, end: number, step: number): number[] {
    const stepIsBiggerThanDifference = step > end - start;
    const stepIsZero = step === 0;
    const numberOfItems = (end - start) / step;
    const stepWillNotCoverRange = NumberHelper.isFloat(numberOfItems);

    if (start > end) {
      throw new Error('Start should be smaller than end');
    }

    if (stepIsBiggerThanDifference || stepIsZero || stepWillNotCoverRange) {
      throw new Error('Invalid step value');
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    return Array(numberOfItems + 1).fill(0).map((_, index) => {
      const valueToAdd = step * index;

      return NumberHelper.processNumber(start + valueToAdd, NumberHelper.checkDecimals(step));
    });
  }

  /**
   * Converts to number
   * @private
   * @static
   * @param  {NumberLike} n Number or string to convert to number
   * @return {number} The resulting number
   * @memberof NumberHelper
   */
  private static enforceNumber(n: NumberLike): number {
    return Number(n);
  }
}
