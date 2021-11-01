const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

const {today,tomorrow} = HIGH_TEMPERATURES 

console.log(today,tomorrow)


//***************************************************************************** 
  // Переименование переменных

// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

const {today:highToday , tomorrow:highTomorrow}=HIGH_TEMPERATURES

console.log(highToday ,highTomorrow)


//************************************************************ 
// Вложенные объекты
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

const {today:{low:lowToday,high:highToday}} = LOCAL_FORECAST

console.log(lowToday,highToday)
// Only change code above this line

//*******************************************************
// Деструктуризация массивов

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1,2

const [a1, b1,,, c1] = [1, 2, 3, 4, 5, 6];
console.log(a1, b1, c1); //1,2,5

let x = 8, y = 6;
// Only change code below this line

  [x,y] = [y,x] // поменяли значения местами

//******************************************************
  // с оператором rest
  const [a2, b2, ...arr2] = [1, 2, 3, 4, 5, 7];
console.log(a2, b2); // 1,2
console.log(arr2); // [3, 4, 5, 7]


const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [,, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr) // [3,4,5,6,7,8,9,10]

//*************************************************************** 
// Деструктуризация параметров в объектах

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
//Это эффективно разрушает объект, отправленный в функцию. Это также можно сделать на месте:

const profileUpdate = ({ name, age, nationality, location }) => {

}

// Найти среднее значение опереленных параметров объекта
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max,min}) => (max + min) / 2.0; 
// Only change code above this line

console.log(half(stats))