/*
Given a string s and an integer array indices of the same length.

The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
Example 2:

Input: s = "abc", indices = [0,1,2]
Output: "abc"
Explanation: After shuffling, each character remains in its position.
Example 3:

Input: s = "aiohn", indices = [3,1,4,2,0]
Output: "nihao"
*/

let s1 = "codeleet",
  indices1 = [4, 5, 6, 7, 0, 2, 1, 3];
let s2 = "abc",
  indices2 = [0, 1, 2];
let s3 = "aiohn",
  indices3 = [3, 1, 4, 2, 0];

const restoreString = (s, indices) => {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    // const elS = s[i];
    for (let x = 0; x < indices.length; x++) {
      const elIn = indices[x];
      if (i === elIn) res += s[x];
    }
  }

  return res;
};

// let restoreString = function(s, indices) {
//   return indices.reduce((a,c,i) => a + s[indices.indexOf(i)],"")
// };


/*
const restoreString = (s, indices) => s.split('').reduce((acc, l, i) => {
    acc[indices[i]] = l
    return acc                                                                    
}, []).join('')
*/

console.log(restoreString(s1, indices1));
console.log(restoreString(s2, indices2));
console.log(restoreString(s3, indices3));
