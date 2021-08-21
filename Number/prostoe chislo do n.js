function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function showPrimes(n) {
  let arr = [];
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) arr.push(i); // если число простое, то добавляем в массив;
  }
  return arr;
}

console.log(showPrimes(10)); //[ 2, 3, 5, 7 ]
