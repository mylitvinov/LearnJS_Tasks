const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(20)

/*
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzBuzz
16
17
fizz
19
buzz


const fizzBuzz = (begin, end) => {
    if (begin > end) return console.log('Неверный диапозон');
   for (let i = begin; i <= end; i++) {
            i % 3 === 0 && i % 5  === 0 ?
                console.log('FizzBuzz')
                : i % 3 === 0 ?
                    console.log('Fizz')
                    : i % 5 === 0 ?
                        console.log('Buzz')
                        : console.log(i)
        }
}

*/

