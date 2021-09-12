/*
Example 1:

Input: patterns = ["a","abc","bc","d"], word = "abc"
Output: 3
Explanation:
- "a" appears as a substring in "abc".
- "abc" appears as a substring in "abc".
- "bc" appears as a substring in "abc".
- "d" does not appear as a substring in "abc".
3 of the strings in patterns appear as a substring in word.
Example 2:

Input: patterns = ["a","b","c"], word = "aaaaabbbbb"
Output: 2
Explanation:
- "a" appears as a substring in "aaaaabbbbb".
- "b" appears as a substring in "aaaaabbbbb".
- "c" does not appear as a substring in "aaaaabbbbb".
2 of the strings in patterns appear as a substring in word.
Example 3:

Input: patterns = ["a","a","a"], word = "ab"
Output: 3
Explanation: Each of the patterns appears as a substring in word "ab".
*/

let patterns1 = ["a", "abc", "bc", "d"],
  word1 = "abc";

let patterns2 = ["a", "b", "c"],
  word2 = "aaaaabbbbb";
let patterns3 = ["a", "a", "a"],
  word3 = "ab";

  let patterns4 =  ["cjevwg"], word4 = "jevwg"

  const numOfStrings = (patterns, word) => {
    let a = 0;
  
    for (let i = 0; i < patterns.length; i++) {
      if (word.includes(patterns[i])) {
        a++;
      }
    }
  
    return a;
  };
console.log(numOfStrings(patterns1, word1));

console.log(numOfStrings(patterns2, word2));

console.log(numOfStrings(patterns3, word3));

console.log(numOfStrings(patterns4, word4));
