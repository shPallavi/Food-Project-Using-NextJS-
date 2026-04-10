// 🚀 **Day 2 of My DSA Journey**

// Continuing my consistency with Data Structures & Algorithms — solving problems daily and sharing my learnings.

// 🔹 **Problem:** Maximum Subarray Sum (Sliding Window)

// 🔹 **Problem Statement:**

// Write a function `maxSubarraySum` which accepts an array of integers and a number `n`.
// The function should calculate the **maximum sum of `n` consecutive elements** in the array.

// maxSubarraySum([1,2,5,2,8,1,5], 2) → 10
// maxSubarraySum([1,2,5,2,8,1,5], 4) → 17
// maxSubarraySum([4,2,1,6], 1) → 6
// maxSubarraySum([4,2,1,6,2], 4) → 13
// maxSubarraySum([], 4) → null

// **Approach: Sliding Window Technique**

// Instead of recalculating the sum for every subarray, we:

// * Calculate the first window sum
// * Slide the window forward
// * Subtract the outgoing element & add the incoming element
// * Track the maximum sum

function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let currentSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {a
    maxSum += arr[i];
  }
  currentSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    currentSum = currentSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubArraySum([], 4));
