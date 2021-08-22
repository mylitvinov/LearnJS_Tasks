/*
Найти максимальную прибыль от продажи акций по дням на неделе
Купить и продать акции можно только по одному разу. Немножественные сделки.
*/

let price1 = [7, 1, 4, 3, 6, 2];
let price2 = [7, 5, 4, 3, 2, 1];

const profit = (price) => {
  let minPrice = price[0];
  let maxProfit = 0;
  for (let i = 0; i < price.length; i++) {
    const el = price[i];

    if (el < minPrice) minPrice = el;
    if (el - minPrice > maxProfit) maxProfit = el - minPrice;
  }
  return maxProfit
};

console.log(profit(price1)) // 5
console.log(profit(price2)) // 0