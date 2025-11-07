import { test, expect, describe } from '@jest/globals';
import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './main';

describe('"capitalize" function tests', () => {
  test('Full lowercase input', () => {
    expect(capitalize('regular show')).toBe('Regular show');
  });

  test('Full uppercase input', () => {
    expect(capitalize('REGULAR SHOW')).toBe('REGULAR SHOW');
  });

  test('Only first letter lowercase input', () => {
    expect(capitalize('rEGULAR SHOW')).toBe('REGULAR SHOW');
  });

  test('Capitalized input', () => {
    expect(capitalize('Regular show')).toBe('Regular show');
  });
});

describe('"reverseString" function tests', () => {
  test('Generic input with even length', () => {
    expect(reverseString('GitHub')).toMatch(/^buHtiG$/);
  });

  test('Generic input with odd length', () => {
    expect(reverseString('OdinProject')).toMatch(/^tcejorPnidO$/);
  });

  test('Simple palindrome input', () => {
    expect(reverseString('level')).toMatch(/^level$/);
  });

  test('Large palindrome input', () => {
    expect(reverseString('neveroddoreven')).toMatch(/^neveroddoreven$/);
  });
});

describe('"calculator" object tests', () => {
  test('Add function test: 1 + 9', () => {
    expect(calculator.add(1, 9)).toBe(10);
  });

  test('Add function test:: -2 + -5', () => {
    expect(calculator.add(-2, -5)).toBe(-7);
  });

  test('Subtract function test: 10 - 3', () => {
    expect(calculator.subtract(10, 3)).toBe(7);
  });

  test('Subtract function test: 3 - 10', () => {
    expect(calculator.subtract(3, 10)).toBe(-7);
  });

  test('Multiply function test: 4 * 2', () => {
    expect(calculator.multiply(4, 2)).toBe(8);
  });

  test('Multiply function test: 4 * 0', () => {
    expect(calculator.multiply(4, 0)).toBe(0);
  });

  test('Multiply function test: 4 * -1', () => {
    expect(calculator.multiply(4, -1)).toBe(-4);
  });

  test('Divide function test: 9 / 3', () => {
    expect(calculator.divide(9, 3)).toBe(3);
  });

  test('Divide function test: 15 / 7', () => {
    expect(calculator.divide(15, 7)).toBeCloseTo(2.142);
  });

  test('Divide function test: 0 / 6', () => {
    expect(calculator.divide(0, 6)).toBe(0);
  });

  test('Divide function test: 6 / 0', () => {
    expect(() => calculator.divide(6, 0)).toThrow(Error);
  });
});

describe('"caesarCipher" function tests', () => {
  test('From "a" to "c" with shift 3 test', () => {
    expect(caesarCipher('abc', 3)).toMatch('def');
  });

  test('From "a" to "c" with shift 10 test', () => {
    expect(caesarCipher('abc', 10)).toMatch('klm');
  });

  test('From "z" to "a" with shift 3 test', () => {
    expect(caesarCipher('xyz', 3)).toMatch('abc');
  });

  test('Case preservation test', () => {
    expect(caesarCipher('HeLLoWoRlD', 3)).toMatch('KhOOrZrUoG');
  });

  test('Non-alphabetical characters test', () => {
    expect(caesarCipher('H3ll0, 4m4z1ng w0rld!', 3)).toMatch('K3oo0, 4p4c1qj z0uog!');
  });
});

describe('"analyzeArray" function tests', () => {
  test('Average test', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBeCloseTo(4);
  });

  test('Min test', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
  });

  test('Max test', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
  });

  test('Length test', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
  });
});
