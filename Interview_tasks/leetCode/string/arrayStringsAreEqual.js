/*
Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
Example 2:

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false
Example 3:

Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true
*/

let word1 = ["ab", "c"], word2 = ["a", "bc"]
let word3 = ["a", "cb"], word4 = ["ab", "c"]
let word5  = ["abc", "d", "defg"], word6 = ["abcddefg"]

let arrayStringsAreEqual = (word1, word2) => {
    let w1 = word1.reduce((total,el) =>{
      total += el
      return total
    },'')
    
    let w2 = word2.reduce((total,el) =>{
      total += el
      return total
    },'')

   return w1 === w2 ? true : false
};

console.log(arrayStringsAreEqual(word1,word2)) // true
console.log(arrayStringsAreEqual(word3,word4)) // false
console.log(arrayStringsAreEqual(word5,word6)) // true


// let arrayStringsAreEqual = function(word1, word2) {
//   return word1.join('') === word2.join('') ? true : false;
// };