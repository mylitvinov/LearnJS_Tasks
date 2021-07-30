
const pow = (x, n) => {
    let result = x;
    if (n < 1) {
        return 'неверное значение параметра';
    }
    for (i = 1; i < n; i++) {
        result *= x;
    }
    return result;

}

console.log(pow(2, 8))