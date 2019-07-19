/**
 * NumberHelper Class
 *
 * @class NumberHelper
 */
class NumberHelper {

  /**
   *Creates an instance of NumberHelper.
   * @memberof NumberHelper
   */
  constructor() {
    this.isNumber = (n) => !isNaN(n);
    this.isInt = (n) => this.isNumber(n) && n % 1 === 0;
    this.isFloat = (n) => this.isNumber(n) && n.toString().includes('.');
    this.isEven = (n) => n % 2 === 0;
    this.isOdd = (n) => n % 2 !== 0;

    /**
     * Converts string to number
     *
     * @param {string|number} toCheck Number-like to convert
     * @param {number} [decimals=2] Number of decimals to truncate
     * @returns {number}
     */
    this.convertToNumber = (toCheck, decimals = 2) => {
      let number;
      if (this.isInt(toCheck)) {
        number = Number(toCheck);
      } else if (this.isFloat(toCheck)) {
        number = Number(Number(toCheck).toFixed(decimals));
      } else {
        number = 0;
      }
      return number;
    };
  }

  /**
   * Processes number to get clean value
   *
   * @param {string|number} value String or number to process
   * @param {number} [decimals=2] No. of decimals to truncate to
   * @returns {number} Parsed and processed number
   * @memberof NumberHelper
   */
  processNumber(value, decimals = 2) {
    return this.convertToNumber(value, decimals);
  }
}

module.exports = NumberHelper;
