/*
Example 1:
Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
Example 2:
Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]
Example 3:
Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]
*/
let nums1 = [2, 5, 1, 3, 4, 7],
  n1 = 3;
let nums2 = [1, 2, 3, 4, 4, 3, 2, 1],
  n2 = 4;
let nums3 = [1, 1, 2, 2],
  n3 = 2;

  let shuffle = function(nums, n) {
    let res = [];
    for (i = 0; i < n; i++) {
        res.push(nums[i],nums[i+n]);
    }
    return res;
};

console.log(shuffle(nums1, n1)); //[2,3,5,4,1,7]
console.log(shuffle(nums2,n2)) // [1,4,2,3,3,2,4,1]
console.log(shuffle(nums3,n3)) // [1,2,1,2]
