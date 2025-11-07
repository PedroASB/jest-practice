import { test, expect, describe } from '@jest/globals';
import { capitalize, reverseString } from './main';

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
