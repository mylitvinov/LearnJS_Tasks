/*
Example 1:

Input: s = "loveleetcode", c = "e"
Output: [3,2,1,0,1,0,0,1,2,2,1,0]
Explanation: The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.
Example 2:

Input: s = "aaab", c = "b"
Output: [3,2,1,0]

*/

let s1 = "loveleetcode",
  c1 = "e";
let s2 = "aaab",
  c2 = "b";

const shortestToChar = (S, C) => {
  let res = [],
    pc = null;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) {
      res[i] = 0;

      for (let j = pc === null ? 0 : pc + 1; j < i; j++) {
        res[j] = Math.min(i - j, pc !== null ? j - pc : 1e9);
      }

      pc = i;
    } else {
      res[i] = pc !== null ? i - pc : 1e9;
    }
  }

  return res;
};

console.log(shortestToChar(s1, c1)); // [3,2,1,0,1,0,0,1,2,2,1,0]
console.log(shortestToChar(s2,c2)) //  [3,2,1,0]
