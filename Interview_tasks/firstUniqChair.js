// Найти индекс первого уникального символа в строке

const input1 = "leetcode"; // 0
const input2 = "loveleetcode"; // 2
const input3 = "aabbcc"; // -1
const input4 = "FHFGGAFAHGFVVHGDAV";

const firstUnigChair = (str) => {
  let strToArr = str.split("");
  let map = strToArr.reduce((acc, el) => {
    acc[el] = acc[el] ? acc[el] + 1 : 1;
    return acc;
  }, {});

  // console.log(map)
  for (let i = 0; i < strToArr.length; i++) {
    const el = strToArr[i];

    if (map[el] === 1) {
      return i;
    }
  }
  return -1;
};

console.log(firstUnigChair(input1));  // 0
console.log(firstUnigChair(input2)); // 2
console.log(firstUnigChair(input3)); // -1
console.log(firstUnigChair(input4)); //15