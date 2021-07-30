// 1 способ через цикл for
const numToArr = num => {
    let arr = [];
    for (i=num; i>0 ;i--){
        // arr.push(i); // от значения num до 1
        arr.unshift(i) // от 1 до значения num
    }
    return arr;
}
console.log(numToArr(5));

// 2

// const numToArr2 = num => {
    
//     if (num > 0) {
//         return arr2.concat();
     
//     }
//    return arr2; 
// }

// console.log(numToArr2(4));