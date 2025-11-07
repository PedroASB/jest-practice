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
