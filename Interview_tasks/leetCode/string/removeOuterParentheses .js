/*
Input: s = "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
Example 2:

Input: s = "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
Example 3:

Input: s = "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".
*/

let s = "(()())(())"
//Output: "()()()"

const removeOuterParentheses = (s) => {
  let stack = [];
  let res = '';
  for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") {
          if(stack.length) res += s[i];
          stack.push(s[i]);
      } else {
          stack.pop();
          if (stack.length) res += s[i];
      }    
  }
  return res
};

console.log(removeOuterParentheses(s))