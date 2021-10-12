/*
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

 

Example 1:

Input: num = 14
Output: 6
Explanation: 
Step 1) 14 is even; divide by 2 and obtain 7. 
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3. 
Step 4) 3 is odd; subtract 1 and obtain 2. 
Step 5) 2 is even; divide by 2 and obtain 1. 
Step 6) 1 is odd; subtract 1 and obtain 0.
Example 2:

Input: num = 8
Output: 4
Explanation: 
Step 1) 8 is even; divide by 2 and obtain 4. 
Step 2) 4 is even; divide by 2 and obtain 2. 
Step 3) 2 is even; divide by 2 and obtain 1. 
Step 4) 1 is odd; subtract 1 and obtain 0.
Example 3:

Input: num = 123
Output: 12
*/

let num1 = 14;
let num2 = 8;
let num3 = 123;


let numberOfSteps  = function(num) {
  let counter=0;
  while(num>0){
      if(num%2===0) num/=2;
      else num-=1;
      counter++;
  }
  return counter;
  
};

// var numberOfSteps = function (num) {
//   const isEven = (n) => {
//     return n % 2 == 0 ? true : false;
//   };
//   let i = 0;
//   while (num > 0) {
//     num = isEven(num) ? num / 2 : num - 1;
//     i++;
//   }
//   return i;
// };



console.log(numberOfSteps(num1)); // 6
console.log(numberOfSteps(num2)); //4
console.log(numberOfSteps(num3)); //12


// const numberOfSteps = (num) => {
//   let res = [];
//   const numEven = (n) => {
//     if (n === 1) {
//       res.push(1);
//       return true;
//     }
//     if (n % 2 === 0) {
//       res.push(1);
//       numEven(n / 2);
//     } else {
//       res.push(1);
//       numEven(n - 1);
//     }
//   };
//   numEven(num);
//   return res.length;
// };