// Убираем все значения false из массива ('', 0, false, undefined,NaN)
function bouncer(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9,NaN,undefined,0]))


// 2 вариант

// function bouncer(arr) {
//   let newArray = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i]) newArray.push(arr[i]);
//   }
//   return newArray;
// }

// bouncer([7, "ate", "", false, 9])