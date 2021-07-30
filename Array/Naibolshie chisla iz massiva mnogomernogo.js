// 1 variant
// const arrToMaxOfNum = arr => {
//     let result = [];
//     for (let x = 0; x < arr.length; x++) {
//         let BigOfNumber = arr[x][0];
//         for (let y = 1; y < arr[x][y]; y++) {
//             if (arr[x][y] > BigOfNumber) {
//                 BigOfNumber = arr[x][y];
//             }
//         }
//         result[x]= BigOfNumber;
//     }
//     return result;
// }

// console.log(arrToMaxOfNum([[23, 43, 45], [67, 78, 234], [23, 789, 345], [87, 23, 567]]))

//2 variant map() and reduce()

function largestOfFour(arr) {
    return arr.map(function(group) {
      return group.reduce(function(prev, current) {
        return current > prev ? current : prev;
      });
    });
  }
  console.log(largestOfFour([[23, 43, 45], [67, 78, 234], [23, 789, 345], [87, 23, 567]]))


  //3 variant 
