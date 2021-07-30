// 1 способ
const revers = str => {
    let revStr = '';
   revStr = str.toLowerCase().split('').reverse().join('');
    return revStr
}

console.log(revers('Привет'))

// 2 способ

const revers2 = str2 =>{
    let revStr2 = '';
    for(i=str2.length-1; i>=0; i--){
        revStr2 += str2[i];
        
    }
    return revStr2
}

console.log(revers2('Максим'));

// 3 способ вместо join -- reduce

const revers3 = str3 => {
    let revStr3 = '';
   revStr = str3.toLowerCase().split('').reverse().reduce( (sum,el) => {
       return sum + el;
   });
    return revStr
}

console.log(revers3('Привет'));

// 5 способ с помощью рекурсии

function reverseString(str5) {
    if (str5 === "") // Условие выхода из рекурсии
      return "";
    
    else
      return reverseString(str5.substring(1)) + str5.charAt(0);
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
  
  console.log(reverseString("hello"));

