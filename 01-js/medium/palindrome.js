/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();

  const punc = new Set([".", ",", ":", "!", "?"]);

  let i = 0,
    j = str.length - 1;

  while (i < j) {
    while (str[i] == " ") {
      i++;
    }
    while (str[j] == " ") {
      j--;
    }

    if (punc.has(str[i])) {
      i++;
    } else if (punc.has(str[j])) {
      j--;
    } else {
      if (str[i] != str[j]) return false;

      i++;
      j--;
    }
  }

  return true;
}

module.exports = isPalindrome;
