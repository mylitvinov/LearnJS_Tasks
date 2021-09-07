/*
You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

 

Example 1:

Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
Example 2:

Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.
Example 3:

Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
*/

let allowed1 = "ab", words1 = ["ad","bd","aaab","baa","dab"]
let allowed2 = "abc", words2 = ["a","b","c","ab","ac","bc","abc"]
let allowed3 = "cad", words3 = ["cc","acd","b","ba","bac","bad","ac","d"]

const countConsistentStrings = (allowed, words) => {

   let objCount = words.reduce((total,el) =>{
      for (const i of el.split('')) {
        allowed.includes(i) ? total[el] += 'YES' : total[el] += 'NO'
      }
      return total
     
    }, {})

    return Object.keys(objCount).filter(el => {
      return !objCount[el].includes('NO')
    }).length
};


console.log(countConsistentStrings(allowed1,words1))
console.log(countConsistentStrings(allowed2,words2))
console.log(countConsistentStrings(allowed3,words3))