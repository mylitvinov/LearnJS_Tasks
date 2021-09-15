/*
Example 1:

Input: s = "abacbc"
Output: true
Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
Example 2:

Input: s = "aaabb"
Output: false
Explanation: The characters that appear in s are 'a' and 'b'.
'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.
*/

let s1 = "abacbc";
let s2 = "aaabb";
let s3 = "vvvvvvvvvvvvvvvvvvv";
let s4 = "hnieumkqzluxsmccwzpwdbkcoknbpdjh";
let s5 = "wzkpzzwzpzkwkpkppzkppkpkwwkzzzwwpwwk";

const areOccurrencesEqual = (s) => {
  let sArr = s.split("");
  let sObj = sArr.reduce((obj, el) => {
    obj[el] ? (obj[el] += 1) : (obj[el] = 1);
    return obj;
  }, {});

  // console.log(sObj)

  let values = Object.values(sObj);

  if (Object.keys(sObj).length === 1) {
    return true;
  }

  let check = false;
  // console.log(values)

  for (let i = 1; i < values.length; i++) {
    if (values[i] == values[i - 1]) {
      check = true;
    } else {
      return false;
    }
  }
  return check;
};

console.log(areOccurrencesEqual(s1));
console.log(areOccurrencesEqual(s2));
console.log(areOccurrencesEqual(s3));
console.log(areOccurrencesEqual(s4));
console.log(areOccurrencesEqual(s5));
