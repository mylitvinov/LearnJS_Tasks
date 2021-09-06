/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false
*/

let sentence1 = "thequickbrownfoxjumpsoverthelazydog"
let sentence2 = "leetcode"

let checkIfPangram = (sentence) => {
    let map ={}
    for (const el of sentence) {
      map[el] +=1
    }

    return Object.keys(map).length === 26 ? true : false
};

console.log(checkIfPangram(sentence1)) // true
console.log(checkIfPangram(sentence2)) // false


// let freq = {}
// for (let letter of sentence) {
//     freq[letter] += 1
// }
// let count = 0
// for (let key in freq) {
//     count++
// }
// if (count === 26) return true
// return false


// var checkIfPangram = function(sentence) {
//   var a = [];
//   for (var x of sentence){
//       if (a.indexOf(x) == -1){a.push(x);}
//   }
//   return (a.length == 26 ? true:false);
// };