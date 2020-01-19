/**
 * NumberHelper Class
 *
 * @class NumberHelper
 */
class NumberHelper {

  /**
   * Checks if element is a number
   * @param {string|number} n
   * @returns {boolean}
   */
  static isNumber(n) {
    return !isNaN(n);
  }

  /**
   * Checks if element is an integer
   * @param {string|number} n
   * @returns {boolean}
   */
  static isInt(n) {
    return NumberHelper.isNumber(n) && n % 1 === 0;
  }

  /**
   * Checks if element is a float number
   * @param {string|number} n
   * @returns {boolean}
   */
  static isFloat(n) {
    return NumberHelper.isNumber(n) && n.toString().includes('.');
  }

  /**
   * Checks if number is event
   * @param {number} n
   * @returns {boolean}
   */
  static isEven(n) {
    return n % 2 === 0;
  }

  /**
   * Checks if number is odd
   * @param {number} n
   * @returns {boolean}
   */
  static isOdd(n) {
    return n % 2 !== 0;
  }

  /**
   * Converts string to number
   *
   * @param {string|number} toCheck Number-like to convert
   * @param {number} [decimals=2] Number of decimals to truncate
   * @returns {number}
   */
  static convertToNumber(toCheck, decimals) {
    let number;
    if (this.isInt(toCheck)) {
      number = Number(toCheck);
    } else if (this.isFloat(toCheck)) {
      number = Number(Number(toCheck).toFixed(decimals));
    } else {
      number = 0;
    }
    return number;
  }

  /**
   * Processes number to get clean value
   *
   * @param {string|number} value String or number to process
   * @param {number} [decimals=2] No. of decimals to truncate to
   * @returns {number} Parsed and processed number
   */
  static processNumber(value, decimals = 2) {
    return NumberHelper.convertToNumber(value, decimals);
  }
}

module.exports = NumberHelper;
