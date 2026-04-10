// Problem: Valid Anagram

// Write a function called validAnagram that takes two strings as arguments
// and returns true if the second string is an anagram of the first, and false otherwise.

// An anagram is a word, phrase, or name formed by rearranging the letters
// of another, using all the original letters exactly once.

// Examples:

// validAnagram('', '')                  // true
// validAnagram('aaz', 'zza')            // false
// validAnagram('anagram', 'nagaram')    // true
// validAnagram('rat', 'car')            // false
// validAnagram('awesome', 'awesom')     // false
// validAnagram('qwerty', 'qeywrt')      // true
// validAnagram('texttwisttime', 'timetwisttext') // true

// Constraints:
// - All inputs are lowercase strings
// - No spaces or special characters
// - Try to achieve O(n) time complexity

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let count = {};
  // Count letters in first string
  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  // Compare with second string
  for (let char of str2) {
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }
  return true;
}

console.log(validAnagram("anagram", "nagaram"));
