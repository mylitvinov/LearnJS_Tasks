const filterString = (str, char) => {
  let result = "";
  for (const el of str) {
    if (el !== char) {
      result += el;
    }
  }
  return result;
};

const str = "If I look back I am lost";
console.log(filterString(str, "I")); // 'f  look back  am lost'
console.log(filterString(str, "o")); // 'If I lk back I am lst'
