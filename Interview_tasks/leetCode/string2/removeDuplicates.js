/*

Example 1:

Input: s = "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
Example 2:

Input: s = "azxxzy"
Output: "ay"

*/

let s1 = "abbaca";
let s2 = "azxxzy";
const removeDuplicates = (S) => {
  let stack = [];

  stack.push(S[0]);

  for (let i = 1; i < S.length; i++) {
    if (stack[stack.length - 1] === S[i]) {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
  }

  return stack.join("");
};

console.log(removeDuplicates(s1));
console.log(removeDuplicates(s2));
