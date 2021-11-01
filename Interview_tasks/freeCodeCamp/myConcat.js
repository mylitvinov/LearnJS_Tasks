
// с помощтью метода concat
const myConcat = (arr1, arr2) =>  arr1.concat(arr2);

// с помощью оператора spread
const myConcat2 = (arr1, arr2) => [...arr1,...arr2];

console.log(myConcat([1, 2], [3, 4, 5]));