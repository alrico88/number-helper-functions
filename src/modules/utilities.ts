import {checkDecimals, processNumber} from './format';
import {isFloat} from './checks';

/**
 * Creates a range between start and end, including them, according to step
 *
 * @param  {number} start Starting value
 * @param  {number} end End value
 * @param  {number} step Step to use for the range
 * @return {number[]} The range
 */
export function rangeBetween(start: number, end: number, step: number): number[] {
  const stepIsBiggerThanDifference = step > end - start;
  const stepIsZero = step === 0;
  const numberOfItems = (end - start) / step;
  const stepWillNotCoverRange = isFloat(numberOfItems);

  if (start > end) {
    throw new Error('Start should be smaller than end');
  }

  if (stepIsBiggerThanDifference || stepIsZero || stepWillNotCoverRange) {
    throw new Error('Invalid step value');
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  return Array(numberOfItems + 1).fill(0).map((_, index) => {
    const valueToAdd = step * index;

    return processNumber(start + valueToAdd, checkDecimals(step));
  });
}
