/*
Необходимо найти валидную строку из последовательности скобок. Чтобы на открытую скобку была закрытая в
нужном порядке (Линейная сложность O(n))

*/

const isCloseBracket = (ch) => {
  // создаем функцию, определ. , что символ закрытая скобка
  return [")", "}", "]"].indexOf(ch) > -1;
};

const isValid = (s) => {
  // Создаем функцию, оперделяющую валидность строки
  let stack = []; // Пустой массив, будем складывать скобки
  // создаем объект с ключами/значениями соответсвующих скобок
  let brackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    const el = s[i];
    if (isCloseBracket(el)) {
      if(brackets[el] !== stack.pop()) return  false;

    } else {
      stack.push(el);
    }
  }
  return stack.length == 0;
};


let s1 = '()' 
let s2 = '[](){}' 
let s3 = '[}' 
let s4 = '[()]' 
let s5 = '([)}' 

console.log(`${s1} ${isValid(s1)}`) // () true
console.log(`${s2} ${isValid(s2)}`) // [](){} true
console.log(`${s3} ${isValid(s3)}`) // [} false
console.log(`${s4} ${isValid(s4)}`) // [()] true
console.log(`${s5} ${isValid(s5)}`) // ([)} false