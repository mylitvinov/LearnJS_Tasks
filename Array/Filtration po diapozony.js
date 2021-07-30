let arr = [5, 3, 8, 1];

const filterRange = (arr, a, b) => {
    return arr.filter( el => a <= el && el <= b )
}


let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (совпадающие значения)

console.log( arr ); // 5,3,8,1 (без изменений)


// 2 slychai

let arr2 = [5, 3, 8, 1];

const filterRangeInPlace = (arr2, a, b) => {
    for (let i = 0; i < arr2.length; i++) {
        let val = arr2[i];
    
        // удалить, если за пределами интервала
        if (val < a || val > b) {
          arr2.splice(i, 1);
        }
      }
}

filterRangeInPlace(arr2, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr2 ); // [3, 1]