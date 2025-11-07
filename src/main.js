export function capitalize(string) {
  return string.replace(string[0], string[0].toUpperCase());
}

export function reverseString(string) {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw Error('Math Error: division by zero');
    return a / b;
  },
};
