/**
 * Gets random integer number in a range
 *
 * @param {number} min Minimum number
 * @param {number} max Maximum number
 * @returns {number} Random number in range
 */
export function getRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
