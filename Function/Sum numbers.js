const sum = (str) => {
    let result = 0;
    for (let i = 0; i < str.length; i += 1) {
      result += Number(str[i]);
    }1
  
    return result;
  };
  
  console.log(sum('123'))

  const addDigits = (num) => {
    let result = num;
    while (result >= 10) {
      result = sum(String(result));
    }
  
    return result;
  };

  console.log(addDigits(3456)); // 9 //  3+4+5+6 = 18 = 1+8 
  