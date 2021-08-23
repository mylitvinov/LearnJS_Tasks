// Найти пересечение двух массивов

const input1 = [1, 2, 2, 1];
const input2 = [2, 2];

const input3 = [4, 9, 5];
const input4 = [9, 4, 9, 8, 4];

const interSect = (arr1, arr2) => {
  let result = [];

  let map = arr1.reduce((acc, el) => {
    acc[el] = acc[el] ? acc[el] + 1 : 1;
    return acc;
  }, {});
  // console.log(map)
  for (const el of arr2) {
    let count = map[el];
    if (count && count > 0) {
      result.push(el);
      map[el] -= 1;
    }
  }

  return result;
};

console.log(interSect(input1, input2)); // [ 2, 2 ]
console.log(interSect(input3, input4)); // [ 9, 4 ]
