/*
Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]
Example 3:

Input: nums = [7,7,7,7]
Output: [0,0,0,0]
*/

let nums1 = [8, 1, 2, 2, 3];
let nums2 = [6, 5, 4, 8];
let nums3 = [7, 7, 7, 7];

const smallerNumbersThanCurrent = (nums) => {
   let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count += 1;
      }
    }
    arr.push(count);
  }
  return arr;
};

console.log(smallerNumbersThanCurrent(nums1)); // [4,0,1,1,3]
console.log(smallerNumbersThanCurrent(nums2)); // [2,1,0,3]
console.log(smallerNumbersThanCurrent(nums3)); // [0,0,0,0]

// let smallerNumbersThanCurrent = function(nums) {
//   return nums.map((n,i) => nums.reduce((a,c) => a + (nums[i] > c), 0))
// };