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

// checks if character is in alphabet and is lowercase
function isLowercaseAlpha(character) {
  return character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122;
}

// checks if character is in alphabet and is uppercase
function isUppercaseAlpha(character) {
  return character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90;
}

// checks if character is in alphabet
function isAlpha(character) {
  return isLowercaseAlpha(character) || isUppercaseAlpha(character);
}

export function caesarCipher(string, shift) {
  let cipherString = '';

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (isAlpha(string[i])) {
      char = char.charCodeAt(0) + shift;
      if (isLowercaseAlpha(string[i]) && char > 122) char = (char % 122) + 96;
      else if (isUppercaseAlpha(string[i]) && char > 90) char = (char % 90) + 64;
      cipherString += String.fromCharCode(char);
    } else {
      cipherString += char;
    }
  }

  return cipherString;
}
