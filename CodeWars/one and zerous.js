// Перевод в десятичную форму из двоичной
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

console.log(binaryArrayToNumber([1, 1, 1, 1,1, 1, 1, 1])); // 255