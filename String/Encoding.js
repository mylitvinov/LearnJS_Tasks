// 1 variant

function duplicateEncode(word) {

    let strToArr = word.toLowerCase().split('');
    let counter = {};

    strToArr.forEach(el => {
        if (counter[el]) {

            counter[el] += 1;
        } else {
            counter[el] = 1;

        }
    });
    return strToArr.map(n => counter[n] > 1 ? ')' : '(').join('');

}


console.log(duplicateEncode('Maxim'))

// 2 variant

function duplicateEncode2(word){
    return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

console.log(duplicateEncode2('Maxim'))