/*
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

 

Example 1:

Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
Example 2:

Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.
Example 3:

Input: s = "MerryChristmas"
Output: false
Example 4:

Input: s = "AbCdEfGh"
Output: true
*/

let s1 = "book";
let s2 = "textbook";
let s3 = "MerryChristmas";
let s4 = "AbCdEfGh";

const halvesAreAlike = (s) => {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let res1 = 0;
  let res2 = 0;

  let str1 = s.slice(0, s.length / 2);
  let str2 = s.slice(s.length / 2, s.length);

  for (const v of vowels) {
    for (const i of str1) {
      if (v === i) res1 += 1;
    }
  }

  for (const v of vowels) {
    for (const i of str2) {
      if (v === i) res2 += 1;
    }
  }

  return res1 === res2 ? true : false;
};

console.log(halvesAreAlike(s1));
console.log(halvesAreAlike(s2));
console.log(halvesAreAlike(s3));
console.log(halvesAreAlike(s4));

/*
let halvesAreAlike = function(s) {
    let arr1 = s.substring(0,s.length/2).split('');
    let arr2 = s.substring(s.length/2,s.length).split('');
    let arr1Len = arr1.filter( x => 'aeiouAEIOU'.indexOf(x) > -1 ).length
    let arr2Len = arr2.filter( x => 'aeiouAEIOU'.indexOf(x) > -1 ).length
    return arr1Len === arr2Len
};
*/