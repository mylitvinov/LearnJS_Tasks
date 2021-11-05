// поменять местами переменные
let a = 33;
let b = "hello";
// через деструктуризацию
[a, b] = [b, a];
// console.log(a,b);
//******************************************************************************************
// Первая заглавная буква

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// console.log(capitalizeFirstLetter('maxim'))
//******************************************************************************************

// Min и Max значения в массиве, используем spread оператор

const marks = [10, 2, 3, 45, 6, 7, 8];

const findMax = (arr) => Math.max(...arr);
const findMin = (arr) => Math.min(...arr);

// console.log(findMax(marks))
// console.log(findMin(marks))

//******************************************************************************************
// Сортировка массива
const arr1 = [24, 56, 35, 78, 9, 9, 34];
arr1.sort((a, b) => a - b); // по возрастанию
// arr1.sort((a,b) => b-a) // по убыванию
// console.log(arr1)

//******************************************************************************************
// Классы

function Bike(model, color) {
  this.model = model;
  this.color = color;
}

Bike.prototype.getDetails = function () {
  return `${this.model} bike has ${this.color} color`;
};

// Переписываем в классы

class Bike1 {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }
  getDetails() {
    return `${this.model} bike has ${this.color} color`;
  }
}
const bike = new Bike1('GT', 'black')
// console.log(bike.getDetails())

//******************************************************************************************
// Уникальные значения массива
const arr2 = [1,2,2,3,4,4,4,5,5,5,5,6,6,7,7,7,7]

const uniqArr = arr => {
const obj = {}
for (const el of arr) {
  obj[el] ? obj[el] += 1 : obj[el] = 1
}

// console.log(obj)
return Object.keys(obj).map(el => +el)
}

// console.log(uniqArr(arr2))

// Или с помощью Set and spread

// console.log([...new Set(arr2)])

//******************************************************************************************
// Удалить все элементы массива

const arr3 = [1,2,2,3,4,4,4,5,5,5,5,6,6,7,7,7,7]

arr3.length = 0
console.log(arr3) // []


//******************************************************************************************

//******************************************************************************************
