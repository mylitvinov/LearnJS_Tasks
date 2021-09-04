/*
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it in the maximum amount of balanced strings.

Return the maximum amount of split balanced strings.

 

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
Example 2:

Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
Example 3:

Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".
Example 4:

Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'
*/

let s1 = "RLRRLLRLRL";
let s2 = "RLLLLRRRLR";
let s3 = "LLLLRRRR";
let s4 = "RLRRRLLRLL";

const balancedStringSplit = (s) => {
  let res = 0;
  const obj = {
    R: 0,
    L: 0,
  };

  for (let i = 0; i < s.length; i++) {
    const el = s[i];
    el == "R" ? (obj.R += 1) : (obj.L += 1);
    if (obj.R === obj.L) res += 1;
  }

  return res;
};

console.log(balancedStringSplit(s1)); //4
console.log(balancedStringSplit(s2)); //3
console.log(balancedStringSplit(s3)); //1
console.log(balancedStringSplit(s4)); //2



// var balancedStringSplit = function(s) {
//   let val = 0, res = 0;
//   for (let x of s) {
//       x === 'R' ? val++ : val--;
//       if (val == 0) res++;
//   }
//   return res;
// };



// let balancedStringSplit = function(s) {
//   let numberOfR = 0, numberOfL = 0, numberOfBalancedStr = 0;
//   for (var x of s) {
//       x === 'L' ? numberOfL++ : numberOfR++;
//       if (numberOfL === numberOfR) {
//           numberOfBalancedStr++;
//           numberOfL = 0, numberOfR = 0;
//       }
//   }
//   return numberOfBalancedStr;
// };