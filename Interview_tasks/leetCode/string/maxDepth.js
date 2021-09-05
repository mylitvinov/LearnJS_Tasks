/*
Example 1:

Input: s = "(1+(2*3)+((8)/4))+1"
Output: 3
Explanation: Digit 8 is inside of 3 nested parentheses in the string.
Example 2:

Input: s = "(1)+((2))+(((3)))"
Output: 3
Example 3:

Input: s = "1+(2*3)/(2-1)"
Output: 1
Example 4:

Input: s = "1"
Output: 0
*/

let s1 = "(1+(2*3)+((8)/4))+1";
let s2 = "(1)+((2))+(((3)))";
let s3 = "1+(2*3)/(2-1)";
let s4 = "1";

const maxDepth = (s) => {
  let open = [];
  let total = 0;

  for (const el of s) {
    if (el === "(") open.push(el);
    if (el === ")") open.pop();
    total < open.length ? (total = open.length) : total;
  }

  return total;
};

console.log(maxDepth(s1)); // 3
console.log(maxDepth(s2)); // 3
console.log(maxDepth(s3)); // 1
console.log(maxDepth(s4)); //0
