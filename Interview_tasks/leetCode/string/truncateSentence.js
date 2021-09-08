/*
Example 1:

Input: s = "Hello how are you Contestant", k = 4
Output: "Hello how are you"
Explanation:
The words in s are ["Hello", "how" "are", "you", "Contestant"].
The first 4 words are ["Hello", "how", "are", "you"].
Hence, you should return "Hello how are you".
Example 2:

Input: s = "What is the solution to this problem", k = 4
Output: "What is the solution"
Explanation:
The words in s are ["What", "is" "the", "solution", "to", "this", "problem"].
The first 4 words are ["What", "is", "the", "solution"].
Hence, you should return "What is the solution".
Example 3:

Input: s = "chopper is not a tanuki", k = 5
Output: "chopper is not a tanuki"
*/
let s1 = "Hello how are you Contestant",
  k1 = 4;
let s2 = "What is the solution to this problem",
  k2 = 4;
let s3 = "chopper is not a tanuki",
  k3 = 5;

const truncateSentence = (s, k) => {
  return s
    .split(" ")
    .reduce((total, el) => {
      total.push(el);
      return total.slice(0, k);
    }, [])
    .join(" ");
};

console.log(truncateSentence(s1, k1)); // Hello how are you
console.log(truncateSentence(s2, k2)); // What is the solution
console.log(truncateSentence(s3, k3)); // chopper is not a tanuki


// let truncateSentence = function(s, k) {

//   return s.split(' ').splice(0,k).join(' ');
//   };