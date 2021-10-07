/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

Example 1:

Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
Example 2:

Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
*/
let n1 = 234;
let n2 = 4421;

let subtractProductAndSum = (n) => {
  let multN = String(n)
    .split("")
    .reduce((mult, num) => (mult *= +num), 1);
  // console.log(multN)
  let sumN = String(n)
    .split("")
    .reduce((sum, num) => (sum += +num), 0);
  // console.log(sumN)
  return multN - sumN;
};

console.log(subtractProductAndSum(n1)); //15
console.log(subtractProductAndSum(n2)); //21
