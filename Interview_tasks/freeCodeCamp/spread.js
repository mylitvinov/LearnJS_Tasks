const arr = [6, 89, 3, 45];
const maximus = Math.max.apply(null, arr);

//Нам пришлось использовать, Math.max.apply(null, arr)потому что Math.max(arr)возвращается NaN.
//  Math.max()ожидает аргументы, разделенные запятыми, но не массив.
//   Оператор spread упрощает чтение и сопровождение этого синтаксиса.

//************************************************************************
// Нахождение макс. числа в массиве
const arr11 = [6, 89, 3, 45];
const maximus1 = Math.max(...arr11);
//************************************************************************
// Копия массива
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

//console.log(arr2);//['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
//************************************************************************
// Добавляем массив к массиву
const nums1 = [1,2,3,4,5]
const nums2 = [6,7,8,9,10]
nums1.push(...nums2)
//console.log(nums1) //   [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]


//************************************************************************
// Разбивка слова на массив букв
const word = 'frontend'
const letters = [...word]
// console.log(letters)
//************************************************************************
// Удаляем один из объектов в массиве

const cars = [
  {name:'Volvo', id: 111},
  {name:'Toyota', id: 222},
  {name:'Lada', id: 333},
  {name:'BMW', id: 444},
  {name:'Mersedes', id: 555},
]

const removeIndex = cars.findIndex(car => car.id === 333)
// console.log(removeIndex)

const newCars = [...cars.slice(0,removeIndex), ...cars.slice(removeIndex+1)]

//  console.log(newCars)

//************************************************************************
// Копия объекта
const obj1 = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const obj2 = {...obj1}
//console.log(obj2) // copy
// console.log(obj2===obj1) // false
