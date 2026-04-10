// Problem: Count Unique Values (Multiple Pointers)

// Write a function called countUniqueValues which accepts a sorted array
// and returns the number of unique values in the array.

// There can be negative numbers in the array, but it will always be sorted.

// Examples:

// countUniqueValues([1,1,1,1,1,2])                // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])  // 7
// countUniqueValues([])                          // 0
// countUniqueValues([-2,-1,-1,0,1])              // 4

// Constraints:
// - The input array is sorted
// - Try to solve using O(n) time complexity
// - Try to use constant space O(1)

// Bonus:
// - Can you solve it using the Multiple Pointer approach?

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
// console.log(countUniqueValues([-2, -1, -1, 0, 1]));
