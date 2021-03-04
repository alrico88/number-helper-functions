import {isFloat, isInt, isNumber} from './checks';
import type {NumberLike} from '../helpers/types';
import {enforceNumber} from './base';

/**
 * Prefixes a number with zeros until desired length
 *
 * @param {number} number Number to pad
 * @param {number} length Desired number length
 * @returns {string} Padded number as a string
 */
export function prefixWithZeros(number: number, length: number): string {
  return String(number).padStart(length, '0');
}

/**
 * Checks the decimals of a number
 * @param  {NumberLike} number Number to check the amount of decimals of
 * @return {number} The number of decimals
 */
export function checkDecimals(number: NumberLike): number {
  if (isNumber(number)) {
    const decimals = enforceNumber(number).toString().split('.').pop();

    return decimals !== undefined ? decimals.length : 0;
  } else {
    throw new Error('Entered number is NaN');
  }
}

/**
 * Converts string to number
 *
 * @param {NumberLike} toCheck Number-like to convert
 * @param {number} [decimals=2] Number of decimals to truncate
 * @returns {number} Converted number
 */
export function convertToNumber(toCheck: NumberLike, decimals = 2): number {
  let number = 0;
  if (isInt(toCheck)) {
    number = enforceNumber(toCheck);
  } else if (isFloat(toCheck)) {
    number = enforceNumber(enforceNumber(toCheck).toFixed(decimals));
  }
  return number;
}

/**
 * Processes number to get clean value
 *
 * @param {NumberLike} value String or number to process
 * @param {number} [decimals=2] No. of decimals to truncate to
 * @returns {number} Parsed and processed number
 */
export function processNumber(value: NumberLike, decimals = 2): number {
  return convertToNumber(value, decimals);
}
