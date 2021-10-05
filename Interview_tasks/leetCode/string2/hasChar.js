const hasChar = (str, char) => {
  let bool = false;
  for (const el of str) {
    if (el === char) {
      return true;
    }
  }
  return bool;
};

console.log(hasChar("Renly", "R")); // true
console.log(hasChar("Renly", "r")); // false
console.log(hasChar("Tommy", "m")); // true
console.log(hasChar("Tommy", "d")); // false
