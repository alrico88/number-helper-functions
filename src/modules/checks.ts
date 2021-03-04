import type {NumberLike} from '../helpers/types';
import {enforceNumber} from './base';

/**
 * Checks if element is a number
 *
 * @param {NumberLike} n The element to check
 * @returns {boolean} Whether the element is a number or not
 */
export function isNumber(n: NumberLike): boolean {
  return !isNaN(enforceNumber(n));
}

/**
 * Checks if element is an integer
 *
 * @param {NumberLike} n Number to check
 * @returns {boolean} Whether the number is an integer or not
 */
export function isInt(n: NumberLike): boolean {
  if (isNumber(n)) {
    return enforceNumber(n) % 1 === 0;
  } else {
    return false;
  }
}

/**
 * Checks if element is a float number
 *
 * @param {NumberLike} n Number to check
 * @returns {boolean} Whether the number is a float or not
 */
export function isFloat(n: NumberLike): boolean {
  if (isNumber(n)) {
    return enforceNumber(n).toString().includes('.');
  } else {
    return false;
  }
}

/**
 * Checks if number is even
 * Any integer that can be divided exactly by 2 is an even number
 *
 * @param {NumberLike} n Number to check
 * @returns {boolean} Whether the number is even or not
 */
export function isEven(n: NumberLike): boolean {
  return enforceNumber(n) % 2 === 0;
}

/**
 * Checks if number is odd
 * Any integer that cannot be divided exactly by 2 is an odd number.
 *
* @param {NumberLike} n Number to check
* @returns {boolean} Whether the number is odd or not
*/
export function isOdd(n: NumberLike): boolean {
  return enforceNumber(n) % 2 !== 0;
}

/**
 * Checks if number is prime
 * Natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers
 *
 * @param {(number|string)} num Number to check
 * @returns {boolean} Whether the numbere is prime or not
 */
export function isPrime(num: number): boolean {
  return (
    num > 1
    && Array(Math.floor(Math.sqrt(num)) - 1)
      .fill(0)
      // eslint-disable-next-line @typescript-eslint/naming-convention
      .map((_, i) => i + 2)
      .every((i) => num % i !== 0)
  );
}
