/*
Given an array of integers nums and an integer target, return indices of the two numbers
 such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the 
same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

let nums = [2, 7, 11, 15],
  target = 9;

const twoSum = (nums, target) => {
  let arr = [];
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        arr.push(i, j);
      }
    }
  }
  return arr;
};





console.log(twoSum(nums,target)) // [ 0, 1 ]