
const generateTheString = (n) => {
  return (n % 2 == 0) ? "a".repeat(n-1).concat("b") : "a".repeat(n);
};

console.log(generateTheString(4)) // aaab
console.log(generateTheString(5)) // aaaaa