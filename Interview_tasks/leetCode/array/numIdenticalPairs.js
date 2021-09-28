/*

Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.
Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0
*/

let nums1 = [1, 2, 3, 1, 1, 3];
let nums2 = [1, 1, 1, 1];
let nums3 = [1, 2, 3];

let numIdenticalPairs = (nums) => {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length - 1; j++) {
      if (nums[i] === nums[j + 1]) {
        res += 1;
      }
    }
  }
  return res;
};

console.log(numIdenticalPairs(nums1)); //4
console.log(numIdenticalPairs(nums2)); //6
console.log(numIdenticalPairs(nums3)); //0
