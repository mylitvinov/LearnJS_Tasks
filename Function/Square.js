// Реализуйте функцию square(), которая возвращает квадрат числа.
// Реализуйте функцию sumOfSquares(), которая возвращает сумму квадратов двух чисел.
// Реализуйте функцию squareSumOfSquares(), которая возвращает квадрат суммы квадратов двух чисел.


const square = (num) => {
    return num**2;
  }
  
  const sumOfSquares = (a,b) => {
    return square(a) + square(b);
  }
  
  const squareSumOfSquares = (x,y) => {
    return square(sumOfSquares(x,y));
  }

  // или


const square = (num) => num * num;

const sumOfSquares = (num1, num2) => square(num1) + square(num2);

const squareSumOfSquares = (num1, num2) => square(sumOfSquares(num1, num2))