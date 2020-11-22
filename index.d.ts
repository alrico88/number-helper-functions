export = NumberHelper;
/**
 * NumberHelper Class
 *
 * @class NumberHelper
 */
declare class NumberHelper {
    /**
     * Checks if element is a number
     *
     * @static
     * @param {(string|number)} n The element to check
     * @returns {boolean} Whether the element is a number or not
     * @memberof NumberHelper
     */
    static isNumber(n: (string | number)): boolean;
    /**
     * Checks if element is an integer
     *
     * @static
     * @param {(string|number)} n Number to check
     * @returns {boolean} Whether the number is an integer or not
     * @memberof NumberHelper
     */
    static isInt(n: (string | number)): boolean;
    /**
     * Checks if element is a float number
     *
     * @static
     * @param {(string|number)} n Number to check
     * @returns {boolean} Whether the number is a float or not
     * @memberof NumberHelper
     */
    static isFloat(n: (string | number)): boolean;
    /**
     * Checks if number is even
     * Any integer that can be divided exactly by 2 is an even number
     *
     * @static
     * @param {number} n Number to check
     * @returns {boolean} Whether the number is even or not
     * @memberof NumberHelper
     */
    static isEven(n: number): boolean;
    /**
     * Checks if number is odd
     * Any integer that cannot be divided exactly by 2 is an odd number.
     *
     * @static
     * @param {number} n Number to check
     * @returns {boolean} Whether the number is odd or not
     * @memberof NumberHelper
     */
    static isOdd(n: number): boolean;
    /**
     * Checks if numer is finite
     *
     * @static
     * @param {number} n Number to check
     * @returns {boolean} Whether the number is finite or not
     * @memberof NumberHelper
     */
    static isFinite(n: number): boolean;
    /**
     * Checks if number is prime
     * Natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers
     *
     * @static
     * @param {number} num Number to check
     * @returns {boolean} Whether the numbere is prime or not
     * @memberof NumberHelper
     */
    static isPrime(num: number): boolean;
    /**
     * Gets random integer number in a range
     *
     * @static
     * @param {number} min Minimum number
     * @param {number} max Maximum number
     * @returns {number} Random number in range
     * @memberof NumberHelper
     */
    static getRandom(min: number, max: number): number;
    /**
     * Prefixes a number with zeros until desired length
     *
     * @static
     * @param {number} number Number to pad
     * @param {number} length Desired number length
     * @returns {string} Padded number as a string
     * @memberof NumberHelper
     */
    static prefixWithZeros(number: number, length: number): string;
    /**
     * Converts string to number
     *
     * @static
     * @param {(string|number)} toCheck Number-like to convert
     * @param {number} [decimals=2] Number of decimals to truncate
     * @returns {number} Converted number
     * @memberof NumberHelper
     */
    static convertToNumber(toCheck: (string | number), decimals?: number): number;
    /**
     * Processes number to get clean value
     *
     * @static
     * @param {(string|number)} value String or number to process
     * @param {number} [decimals=2] No. of decimals to truncate to
     * @returns {number} Parsed and processed number
     * @memberof NumberHelper
     */
    static processNumber(value: (string | number), decimals?: number): number;
}
