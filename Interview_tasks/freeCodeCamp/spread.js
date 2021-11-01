const arr = [6, 89, 3, 45];
const maximus = Math.max.apply(null, arr);

//Нам пришлось использовать, Math.max.apply(null, arr)потому что Math.max(arr)возвращается NaN.
//  Math.max()ожидает аргументы, разделенные запятыми, но не массив.
//   Оператор spread упрощает чтение и сопровождение этого синтаксиса.

const arr1 = [6, 89, 3, 45];
const maximus1 = Math.max(...arr);

// Копия массива
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);//['JAN', 'FEB', 'MAR', 'APR', 'MAY'];