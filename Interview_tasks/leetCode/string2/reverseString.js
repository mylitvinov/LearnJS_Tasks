/*

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

*/

let s1 = ["h","e","l","l","o"]
let s2 = ["H","a","n","n","a","h"]

const reverseString = (s) => {
    return s.reverse()
};

console.log(reverseString(s1))
console.log(reverseString(s2))
