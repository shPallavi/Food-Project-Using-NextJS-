// Problem: Valid Palindrome

// Write a function to check if a given string is a palindrome.

// Use two pointers (start and end).

// Examples:
// isPalindrome("madam")   // true
// isPalindrome("racecar") // true
// isPalindrome("hello")   // false

// Constraints:
// - Ignore case if needed
// - Use O(n) time

// function isPalindrome(str) {
//   let left = 0;
//   let right = str.legth - 1;
//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     right--;
//     left++;
//   }
//   return true;
// }
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));

function isPalindrome(str) {
  let right = 0;
  let left = str.legth - 1;
  while (left < right) {
    if (str[right] !== str[left]) {
      return false;
    }
    right++;
    left--;
  }
  return true;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
