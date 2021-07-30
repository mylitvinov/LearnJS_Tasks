// По возрастанию

let arr = [ 3,1, 2, 15,7,4,9 ];

console.log(arr.sort( (a, b) => a - b ));


// По убыванию

let arr2 = [5, 2, 1, -10, 8];

arr2.sort((a, b) => b - a);

console.log( arr2 ); // 8, 5, 2, 1, -10