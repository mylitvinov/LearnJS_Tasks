const countChars = (str, char) => {
  let count = 0;
  str = str.toLowerCase();
  char = char.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count += 1;
    }
  }
  return count;
};

console.log(countChars('HexlEt', 'e')) //2
console.log(countChars('MaXim FronTenD', 'M')) //2
