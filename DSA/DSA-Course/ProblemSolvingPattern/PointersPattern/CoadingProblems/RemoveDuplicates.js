// Problem: Remove Duplicates

// Given a sorted array, remove duplicates in-place such that each element appears only once.
// Return the new length.

// Do not use extra space.

// Examples:
// removeDuplicates([1,1,2])        // 2 → [1,2]
// removeDuplicates([0,0,1,1,2])    // 3 → [0,1,2]

// Constraints:
// - Sorted array
// - O(n) time
// - O(1) space

function removeDuplicates(arr) {
  if (arr.length === 0) return { count: 0, values: [] };
  let i = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return {
    count: i + 1,
    values: arr.slice(0, i + 1),
  };
}
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 2]));
