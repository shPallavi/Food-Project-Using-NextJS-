// Problem: Sum Zero

// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.

// Return an array containing both values, or undefined if no pair exists.

// Examples:
// sumZero([-3, -2, -1, 0, 1, 2, 3])   // [-3, 3]
// sumZero([-2, 0, 1, 3])              // undefined
// sumZero([1, 2, 3])                  // undefined

// Constraints:
// - Array is sorted
// - Time: O(n)
// - Space: O(1)

function sumZero(arr) {
  let right = 0;
  let left = arr.length - 1;
  while (right < left) {
    const sum = arr[right] + arr[left];
    if (sum === 0) return [arr[right], arr[left]];
    else if (sum > 0) left--;
    else right++;
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
