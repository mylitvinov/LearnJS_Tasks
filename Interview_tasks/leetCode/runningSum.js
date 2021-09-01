/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
*/

let nums1 = [1, 2, 3, 4];
let nums2 = [1, 1, 1, 1, 1];

const runningSum = (nums) => {
  let arr = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const el = nums[i] + arr[i - 1];
    arr.push(el);
  }
  return arr;
};

let runningSum = function (nums) {
  let sum = 0;
  return nums.map((n) => {
    return (sum += n);
  });
};

// const runningSum = nums => {

//    let newArr = nums.reduce((arr,curr,i) => {
//     let add = nums[i] + nums[i+1]
//     arr.push(add)

//     return arr

//   },[])

//   return newArr

// }

console.log(runningSum(nums1));
