const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1,2,3,4,5,6,7,8,9,10)) //55