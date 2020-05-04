/**
 * NumberHelper Class
 *
 * @class NumberHelper
 */
class NumberHelper {

  /**
   * Checks if element is a number
   *
   * @static
   * @param {(string|number)} n The element to check
   * @returns {boolean} Whether the element is a number or not
   * @memberof NumberHelper
   */
  static isNumber(n) {
    return !isNaN(n);
  }

  /**
   * Checks if element is an integer
   *
   * @static
   * @param {(string|number)} n Number to check
   * @returns {boolean} Whether the number is an integer or not
   * @memberof NumberHelper
   */
  static isInt(n) {
    return NumberHelper.isNumber(n) && n % 1 === 0;
  }

  /**
   * Checks if element is a float number
   *
   * @static
   * @param {(string|number)} n Number to check
   * @returns {boolean} Whether the number is a float or not
   * @memberof NumberHelper
   */
  static isFloat(n) {
    return NumberHelper.isNumber(n) && n.toString().includes('.');
  }

  /**
   * Checks if number is even
   * Any integer that can be divided exactly by 2 is an even number
   *
   * @static
   * @param {number} n Number to check
   * @returns {boolean} Whether the number is even or not
   * @memberof NumberHelper
   */
  static isEven(n) {
    return n % 2 === 0;
  }

  /**
   * Checks if number is odd
   * Any integer that cannot be divided exactly by 2 is an odd number.
   *
   * @static
   * @param {number} n Number to check
   * @returns {boolean} Whether the number is odd or not
   * @memberof NumberHelper
   */
  static isOdd(n) {
    return n % 2 !== 0;
  }

  /**
   * Checks if numer is finite
   *
   * @static
   * @param {number} n Number to check
   * @returns {boolean} Whether the number is finite or not
   * @memberof NumberHelper
   */
  static isFinite(n) {
    return isFinite(n);
  }

  /**
   * Checks if number is prime
   * Natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers
   *
   * @static
   * @param {number} num Number to check
   * @returns {boolean} Whether the numbere is prime or not
   * @memberof NumberHelper
   */
  static isPrime(num) {
    return (
      num > 1 &&
      Array(Math.floor(Math.sqrt(num)) - 1)
        .fill(0)
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
  static getRandom(min, max) {
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
  static prefixWithZeros(number, length) {
    return String(number).padStart(length, '0');
  }

  /**
   * Converts string to number
   *
   * @static
   * @param {(string|number)} toCheck Number-like to convert
   * @param {number} [decimals=2] Number of decimals to truncate
   * @returns {number} Converted number
   * @memberof NumberHelper
   */
  static convertToNumber(toCheck, decimals) {
    let number;
    if (NumberHelper.isInt(toCheck)) {
      number = Number(toCheck);
    } else if (NumberHelper.isFloat(toCheck)) {
      number = Number(Number(toCheck).toFixed(decimals));
    } else {
      number = 0;
    }
    return number;
  }

  /**
   * Processes number to get clean value
   *
   * @static
   * @param {(string|number)} value String or number to process
   * @param {number} [decimals=2] No. of decimals to truncate to
   * @returns {number} Parsed and processed number
   * @memberof NumberHelper
   */
  static processNumber(value, decimals = 2) {
    return NumberHelper.convertToNumber(value, decimals);
  }
}

module.exports = NumberHelper;
