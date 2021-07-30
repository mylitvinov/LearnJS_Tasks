// 1 способ
// const factorial = (n) => {
//     if( n === 1) {
//         return 1;
//     } else {
//         return n*factorial(n-1);
//     }

// }

// console.log(factorial(5));

// 2 способ

function fact(num){
    //Условие экстренного прекращения
    if(num<=0) return;
    //Базовая проверка, заканчивающая рекурсию
    if(num===1) return 1;
    //Рекурсия. Функция вызывает сама себя.
    return num * fact(num-1)
  }

  console.log(fact(0));

// 3 способ

// const fac = num => (num>1) ?  num*fac(num-1) : 1;
// console.log(fac(4));


// 4 способ через цикл for
// const facFor = num => {
//     let rec = 1;
//     for(i=num; i>1; i--){
//         rec *= [i];
//         }
//         return rec;
// }

// console.log(facFor(4));

