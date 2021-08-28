let str1 = "racecar";
let str2 = "table";
let str3 = "AnNa";
let str4 = "А роза упала на лапу Азора";

const palindrome = str => {
  str = str.toUpperCase().replace(/\s/g,'');

  return str === str.split('').reverse().join('')
}

// 2 способ

// const palindrome = (str) => {
//   str = str.toUpperCase().replace(/\s/g, "");
//   let reverse = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
//   }
//   return reverse === str ? true : false;
// };

// 3 способ

// const palindrome = (str) => {
//   str = str.toLowerCase().replace(/\s/g, "");
//   const len = Math.floor(str.length / 2);

//   for (let i = 0; i < len; i++) {
//      if (str[i] !== str[str.length - i - 1]) {
//       return false;
//     }
//     return true;
//   }
// };

console.log(palindrome(str1)); // true
console.log(palindrome(str2)); //false
console.log(palindrome(str3)); // true
console.log(palindrome(str4)); // true


function reverseString(str5) {
  if (str5 === "")
    // Условие выхода из рекурсии
    return "";
  else return reverseString(str5.substring(1)) + str5.charAt(0);
  /* 
  Первая часть рекурсивного метода
  Вам нужно помнить, что будет не один вызов функции, а несколько вложенных вызовов
  Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
  1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
  2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
  3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
  4th call – reverseString("lo")      will return   reverseString("o")              + "l"
  5th call – reverseString("o")       will return   reverseString("")               + "o"
  
  Вторая часть рекурсивного метода
  Метод попадает в условие if и самый последний вложенный вызов возвращает результат
  5th call will return reverseString("") + "o" = "o"
  4th call will return reverseString("o") + "l" = "o" + "l"
  3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
  2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
  1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
  */
}

// console.log(reverseString("hello"));
