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
