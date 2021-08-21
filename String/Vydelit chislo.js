// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки
//  выделять числовое значение и возвращать его.

const extractCurrencyValue = (str) => {
  return +str.slice(1);
};

console.log(extractCurrencyValue("$1345")); // 1345
