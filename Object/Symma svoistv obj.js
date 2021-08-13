let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const sumZp = (obj) => {
  let sum = 0;
  for (let prop in obj) {
    sum += obj[prop];
  }
  return sum;
};

console.log(sumZp(salaries)); // 390

// 2 вариант
function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
}

console.log(sumSalaries(salaries)); // 390

let salaries2 = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const valOfSalaries2 = Object.values(salaries2);
// const keyOfSalaries2 = Object.keys(salaries2);
const entries = Object.entries(salaries2);

console.log(valOfSalaries2);

const sumSal = valOfSalaries2.reduce((prev, cur) => (prev += cur));
console.log(sumSal);

const isBigSal = valOfSalaries2.reduce((prev, cur, index, array) => {
  return cur > prev ? cur : prev;
});
console.log(isBigSal);

const big = (obj) => {
  // const big = {};
  for (const key in obj) {
    if (obj[key] === isBigSal) {
      // big[key] = isBigSal;
      console.log(`Самая большая ЗП у ${key} , она составляет ${isBigSal} евро`);
      // console.log('yes')
    }
  }
  // return big;
};

console.log(big(salaries2));
