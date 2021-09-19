/*
Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
*/

let w1 = "abc",
  w2 = "pqr";
let w3 = "ab",
  w4 = "pqrs";
let w5 = "abcd",
  w6 = "pq";

const mergeAlternately = (word1, word2) => {
  let str = "";
  for (let i = 0; i < word1.length || i < word2.length; i++) {
    if (word1[i] === undefined) {
      str += word2[i];
    } else if (word2[i] === undefined) {
      str += word1[i];
    } else {
      str += word1[i] + word2[i];
    }
  }
  return str;
};

console.log(mergeAlternately(w1, w2)); // apbqcr
console.log(mergeAlternately(w3, w4)); // apbqrs
console.log(mergeAlternately(w5, w6)); //apbqcd


/*
let mergeAlternately = function(word1, word2) {
    
        word1=word1.split('');
        word2=word2.split('');
        var i=0;
        while(i<word1.length && word2.length!==0)
        {
            word1[i]+=word2[0];
            word2.shift();
            i++;
        }
        return word1.concat(word2).join('').toString();
    
   
};
*/