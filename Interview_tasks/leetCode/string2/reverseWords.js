/*
Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"
*/

let s1 = "Let's take LeetCode contest";
let s2 = "God Ding";

const reverseWords = (s) => {
  let arr = s.split(" ");
  // console.log(arr);

  return  arr.reduce((r, word) => {
 r.push(word.split('').reverse().join(''))
    return r
  }, [])
  .join(' ');
};

console.log(reverseWords(s1));
console.log(reverseWords(s2));


/*
let reverseWords = s => {
return s.split(' ')
.map(str => str.split('').reverse().join(''))
.join(' ');
}

*/