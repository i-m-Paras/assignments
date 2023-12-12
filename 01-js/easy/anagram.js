/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const a = new Map();

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length != str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    if (a.has(str1[i])) {
      a.set(str1[i], a.get(str1[i]) + 1);
    } else {
      a.set(str1[i], 1);
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (a.has(str2[i])) {
      a.set(str2[i], a.get(str2[i]) - 1);
      if (a.get(str2[i]) == 0) {
        a.delete(str2[i]);
      }
    } else {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
