let isSquare = function(n){
return Math.sqrt(n) % 1 == 0 ? true : false
  }

 console.log(isSquare(2)) // false
 console.log(isSquare(9)) // true