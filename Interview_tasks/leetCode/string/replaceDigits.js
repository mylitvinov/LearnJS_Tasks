
/*
Input: s = "a1c1e1"
Output: "abcdef"
Explanation: The digits are replaced as follows:
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('c',1) = 'd'
- s[5] -> shift('e',1) = 'f'
Example 2:

Input: s = "a1b2c3d4e"
Output: "abbdcfdhe"
Explanation: The digits are replaced as follows:
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('b',2) = 'd'
- s[5] -> shift('c',3) = 'f'
- s[7] -> shift('d',4) = 'h'
*/

let s1 = "a1c1e1"
let s2 = "a1b2c3d4e"

let replaceDigits = function(s) {
  let word = '';
  for(let i=1;i<s.length;i+=2) {
      word+= s[i-1] + String.fromCharCode(s[i-1].charCodeAt(0) + parseInt(s[i]));
  }
  if (s.length % 2 !== 0) {
      word+= s[s.length-1];
  }
  return word;
};

console.log(replaceDigits(s1))
console.log(replaceDigits(s2))