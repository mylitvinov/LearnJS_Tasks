/*Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

Example 1:

Input: s = "Hello"
Output: "hello"
Example 2:

Input: s = "here"
Output: "here"
Example 3:


Input: s = "LOVELY"
Output: "lovely"
*/

let s1 = "Hello"
let s2 = "here"
let s3 = "LOVELY"

const toLowerCase = (s) => {
    return s.toLowerCase()
  
};

console.log(toLowerCase(s1))
console.log(toLowerCase(s2))
console.log(toLowerCase(s3))
