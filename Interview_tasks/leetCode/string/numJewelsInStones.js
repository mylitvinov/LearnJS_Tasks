/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
Letters are case sensitive, so "a" is considered a different type of stone from "A".
Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
*/

let jewels1 = "aA",
  stones1 = "aAAbbbb";

let jewels2 = "z",
  stones2 = "ZZ";

// const numJewelsInStones = (jewels, stones) => {
//   let res = 0;
//   for (let i = 0; i < jewels.length; i++) {
//     const elJ = jewels[i];
//     for (let x = 0; x < stones.length; x++) {
//       const elS = stones[x];
//       if (elJ === elS) res += 1;
//     }
//   }
//   return res;
// };

const numJewelsInStones = (jewels, stones) => {
  let jevArr = jewels.split("");
  let stArr = stones.split("");
  let res = 0;
  for (const elJevArr of jevArr) {
    for (const elStArr of stArr) {
      if (elJevArr === elStArr) res += 1;
    }
  }
  return res;
};

// const numJewelsInStones = (J, S) => {
//   return S.split('').reduce((a, c) => J.includes(c) ? a + 1 : a, 0);
// };

console.log(numJewelsInStones(jewels1, stones1));
console.log(numJewelsInStones(jewels2, stones2));
