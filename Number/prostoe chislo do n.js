
function showPrimes(n) {
    let arr = [];
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) arr.push(i);  // простое;

    }
    return arr;
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

console.log(showPrimes(10))