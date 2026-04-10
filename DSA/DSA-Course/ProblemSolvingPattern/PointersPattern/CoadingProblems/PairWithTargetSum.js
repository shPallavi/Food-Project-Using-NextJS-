// Problem: Pair with Target Sum

// Given a sorted array and a target sum, find a pair whose sum equals the target.

// Return the pair or undefined.

// Examples:
// pairSum([1,2,3,4,6], 6)   // [2,4]
// pairSum([2,5,9,11], 11)   // [2,9]

// Constraints:
// - Sorted array
// - O(n) time

function pairSum(arr, target) {
  let right = 0;
  let left = arr.length - 1;
  while (right < left) {
    let sum = arr[right] + arr[left];
    if (sum === target) return [arr[right], arr[left]];
    else if (sum > target) left--;
    else right++;
  }
  return undefined;
}

console.log(pairSum([1, 1, 3, 2, 4, 5, 6], 7));
// console.log(pairSum([2, 5, 9, 11], 11));
