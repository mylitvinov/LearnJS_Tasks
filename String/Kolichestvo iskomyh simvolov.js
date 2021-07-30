
// Поиск нужных символов в строке, вывод количества совпадений

const myFunc = (str) => {
    let sum = 0;
    let strToArr = str.toLowerCase().split('');
    sum = strToArr.filter(el =>'asm'.includes(el)).length;

    return sum;
}
console.log(myFunc('masdsdm'))