// 704. Binary Search
/** (EASY) || Tue Oct 13, 2020 || Arrays
https://leetcode.com/problems/binary-search/

Given a sorted (in ascending order) integer array nums of n elements and a target value,
write a function to search target in nums. If target exists, then return its index, otherwise return -1.

Example 1:
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4

Example 2:
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1

Notes:
 * You may assume that all elements in nums are unique.
 * n will be in the range [1, 10000].
 * The value of each element in nums will be in the range [-9999, 9999].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  // Create & call a recursive function
  // Low is 0 at first (index 0) and high is nums.length - 1 (last index of the array)
  return recursiveBS(nums, target, 0, nums.length - 1);
};

// my recursive binary search function is going to have pointer for the lower and higher limit
const recursiveBS = function (nums, target, low, high) {
  // initialize a middle pointer to compare against the target
  // if length = 10 --> 0 + Math.floor(9-0)/2 --> Math.floro(4.5) --> 4 (index 4)
  let middle = low + Math.floor((high - low) / 2);

  // BASE case 1:
  if (low > high) {
    return -1;
  } // exit because we didn't find the target value in nums
  // BASE case 2:
  else if (target === nums[middle]) {
    return middle;
  } // return the middle point (index) if it's the same as the target value

  // RECURSIVE cases:
  // my target is smaller than the middle point. lower the high point to middle -1
  else if (target < nums[middle]) {
    return recursiveBS(nums, target, low, middle - 1);
  }
  // my target is bigger than the middle point. increase the low point to middle +1
  else {
    return recursiveBS(nums, target, middle + 1, high);
  }
};

// There's a more optimal solution that's similar to the recursive one, but with a memory complexity of O(1) instead of O(log n);
const searchNoRecursion = function (nums, target) {
  // As previously, initiliaze 2 pointers for the smallest and biggest indexes
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    // As previously, initalize a mid pointer
    let middle = low + Math.floor(high - low) / 2;
    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
    return -1;
  }
};
