const findNum = arrNum => {
    return arrNum.filter(num => (num % 2 == 0) ? num : false);

}
const myArr = [2, 3, 4, 5, 6, 7, 8, 12, 34]

console.log(findNum(myArr));

console.log(myArr);