const encrypt = (str) => {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      if (str[i + 1] !== undefined) {
        newStr += str[i + 1];
      } else {
        newStr += str[i];
      }
    } else {
      newStr += str[i - 1];
    }
  }
  return newStr;
};

console.log(encrypt("move")); // 'omev'
console.log(encrypt("attack")); // 'taatkc'
// Если число символов нечётное
// то последний символ остается на своем месте
console.log(encrypt("go!")); // 'og!'

// const encrypt = (str) => {
//   let result = '';
//   for (let i = 0; i < str.length; i += 2) {
//     const nextSymbol = str[i + 1] || '';
//     result = `${result}${nextSymbol}${str[i]}`;
//   }

//   return result;
// };
