/* eslint-disable @typescript-eslint/no-magic-numbers */
import {describe, expect, test} from 'vitest';
import NumberHelper from '../src';

const number = 3;
const oddNumber = number;
const evenNumber = 4;
const evenNumberAsString = '4';
const notNumber = 'not a number';
const float = 3.1383485;
const oddNumberAsString = '3';
const floatAsString = '3.1383485';
const primeNumber = 5;

describe('Check isNumber method', () => {
  test('isNumber should return true if item is integer', () => {
    expect(NumberHelper.isNumber(number)).toBe(true);
  });

  test('isNumber should return true if item is float', () => {
    expect(NumberHelper.isNumber(float)).toBe(true);
  });

  test('isNumber should return false if item is not a number', () => {
    expect(NumberHelper.isNumber(notNumber)).toBe(false);
  });
});

describe('Check isInt method', () => {
  test('isInt should return true if number is integer', () => {
    expect(NumberHelper.isInt(number)).toBe(true);
  });

  test('isInt should return true if string is integer', () => {
    expect(NumberHelper.isInt(oddNumberAsString)).toBe(true);
  });

  test('isInt should return false if string is float', () => {
    expect(NumberHelper.isInt(floatAsString)).toBe(false);
  });

  test('isInt should return false if number is float', () => {
    expect(NumberHelper.isInt(float)).toBe(false);
  });
});

describe('Check isFloat method', () => {
  test('isFloat should return false if number is integer', () => {
    expect(NumberHelper.isFloat(number)).toBe(false);
  });

  test('isFloat should return false if string is integer', () => {
    expect(NumberHelper.isFloat(oddNumberAsString)).toBe(false);
  });

  test('isFloat should return true if string is float', () => {
    expect(NumberHelper.isFloat(floatAsString)).toBe(true);
  });

  test('isFloat should return true if number is float', () => {
    expect(NumberHelper.isFloat(float)).toBe(true);
  });
});

describe('Check isEven method', () => {
  test('isEven should return true if number is even', () => {
    expect(NumberHelper.isEven(evenNumber)).toBe(true);
  });

  test('isEven should return true if string is even', () => {
    expect(NumberHelper.isEven(evenNumberAsString)).toBe(true);
  });

  test('isEven should return false if string is odd', () => {
    expect(NumberHelper.isEven(floatAsString)).toBe(false);
  });

  test('isEven should return false if number is odd', () => {
    expect(NumberHelper.isEven(float)).toBe(false);
  });
});

describe('Check isOdd method', () => {
  test('isOdd should return true if number is odd', () => {
    expect(NumberHelper.isOdd(oddNumber)).toBe(true);
  });

  test('isOdd should return true if string is odd', () => {
    expect(NumberHelper.isOdd(oddNumberAsString)).toBe(true);
  });

  test('isOdd should return false if string is even', () => {
    expect(NumberHelper.isOdd(evenNumberAsString)).toBe(false);
  });

  test('isOdd should return false if number is even', () => {
    expect(NumberHelper.isOdd(evenNumber)).toBe(false);
  });
});

describe('Check isPrime method', () => {
  test('isPrime should return true if number is prime', () => {
    expect(NumberHelper.isPrime(primeNumber)).toBe(true);
  });

  test('isPrime should return false if string is not prime', () => {
    expect(NumberHelper.isPrime(evenNumber)).toBe(false);
  });
});

describe('Check getRandom method', () => {
  const min = 1;
  const max = 10;
  const randomNumber = NumberHelper.getRandom(1, 10);
  test('getRandom should return a number greater or equal than min', () => {
    expect(randomNumber).toBeGreaterThanOrEqual(min);
  });
  test('getRandom should return a number lower or equal than max', () => {
    expect(randomNumber).toBeLessThanOrEqual(max);
  });
});

describe('Check prefixWithZeros method', () => {
  test('prefixWithZeros should return a string with the desired zeros as left padding', () => {
    expect(NumberHelper.prefixWithZeros(number, 3)).toEqual('003');
  });
});

describe('Check convertToNumber method', () => {
  test('convertToNumber should return a number from a string', () => {
    expect(NumberHelper.convertToNumber(floatAsString, 7)).toEqual(float);
  });

  test('convertToNumber should return a number with the desired number of decimals', () => {
    const num = NumberHelper.convertToNumber(floatAsString, 2);
    const len = NumberHelper.checkDecimals(num);
    expect(len).toEqual(2);
  });

  test('convertToNumber should return 0 from a null value', () => {
    expect(NumberHelper.convertToNumber(null)).toEqual(0);
  });
});

describe('Check checkDecimals method', () => {
  test('checkDecimals should return the real amount of decimals for a float', () => {
    expect(NumberHelper.checkDecimals(2.345)).toEqual(3);
  });

  test('checkDecimals should return the real amount of decimals for a string', () => {
    expect(NumberHelper.checkDecimals('2.34534')).toEqual(5);
  });
});

describe('Check processNumber method', () => {
  test('processNumber should return an integer number from a string if no decimals are wanted', () => {
    expect(NumberHelper.processNumber(floatAsString, 0)).toEqual(number);
  });

  test('processNumber should return 2 decimals for a float number if no decimals are explicitly declared', () => {
    const num = NumberHelper.processNumber(floatAsString);
    const len = NumberHelper.checkDecimals(num);
    expect(len).toEqual(2);
  });
});

describe('Check rangeBetween method', () => {
  test('rangeBetween should return an array of values between range start and end, according to step', () => {
    expect(NumberHelper.rangeBetween(0, 10, 2)).toEqual([0, 2, 4, 6, 8, 10]);
  });

  test('rangeBetween should return an array of values between range start and end, according to decimal step', () => {
    expect(NumberHelper.rangeBetween(0, 1, 0.2)).toEqual([0, 0.2, 0.4, 0.6, 0.8, 1]);
  });

  test('rangeBetween should not throw when creating valid ranges with a decimal step', () => {
    expect(() => {
      NumberHelper.rangeBetween(0, 10, 0.2);
    }).not.toThrow();
  });

  test('rangeBetween should throw if a range is not possible', () => {
    expect(() => {
      NumberHelper.rangeBetween(0, 10, 3);
    }).toThrow();
  });
});

