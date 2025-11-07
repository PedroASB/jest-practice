import { test, expect, describe } from '@jest/globals';
import { capitalize } from './main';

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
  test('generic input with even length', () => {
    expect(reverseString('GitHub').toBe('buHtiG'));
  });

  test('generic input with odd length', () => {
    expect(reverseString('OdinProject').toBe('tcejorPnidO'));
  });

  test('simple palindrome input', () => {
    expect(reverseString('level').toBe('level'));
  });

  test('large palindrome input', () => {
    expect(reverseString('neveroddoreven').toBe('neveroddoreven'));
  });
});
