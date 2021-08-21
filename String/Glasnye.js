function getCount(str) {
  let vowelsCount = 0;

  vowelsCount = str
    .toLowerCase()
    .split("")
    .filter((letter) => "aeiou".includes(letter)).length;

  // enter your majic here

  return vowelsCount;
}

console.log(getCount("MaximkAsadfsfa")); // 5
