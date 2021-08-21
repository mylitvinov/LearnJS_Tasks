let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let maxim = { name: "Максим", age: 33 };

// args = [vasya, petya, masha, maxim]
// let users = [... args]

 let users = [vasya, petya, masha, maxim];


console.log(users)

// Находим массив всех имен
let names = users.map((item) => item.name);
console.log(names); // [ 'Вася', 'Петя', 'Маша', 'Максим' ]

// Находим сумму всех возрастов
let ages = users.reduce((acc, user) => acc + user.age, 0);
console.log(ages); // 116

// Находим   кто старше 28 лет

const isBigger28 = users.filter((user) => user.age > 28);
console.log(isBigger28); // [ { name: 'Петя', age: 30 }, { name: 'Максим', age: 33 } ]

// Находим массив имен кто старше 28 лет
const nameArr = [];
const isBigger28Name = users.filter((user) => {
  if (user.age > 28) {
    nameArr.push(user.name);
  }
});
console.log(nameArr); //[ 'Петя', 'Максим' ]

// С помошью reduce можно сделать практически все:

// 1) находим все имена в массиве:
const nameReduce = users.reduce((acc, user) => {
  acc.push(user.name);
  return acc;
}, []);

console.log(nameReduce); // [ 'Вася', 'Петя', 'Маша', 'Максим' ]

// 2) Находим, например, кто младше 30 лет

const isLess30Name = users.reduce((acc, user) => {
  user.age < 30 ? acc.push(user.name) : "";
  return acc.length ? acc : "Нет людей, удовлетворяющих поиску";
}, []);

console.log(isLess30Name);

// 3) Находим средний возраст людей

const ageAverage = users.reduce((acc, user, index, array) => {
  acc += user.age;
  if (index === array.length - 1) {
    return acc / array.length;
  } else {
    return acc;
  }
}, 0);


console.log(ageAverage);
