let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }


  const sumZp = (obj) => {
      let sum = 0;
      for (let prop in obj) {
          sum += obj[prop];
      }

      return sum;
  }

  console.log(sumZp(salaries))

  // 2 вариант
  function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum; // 650
  }
  
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  console.log( sumSalaries(salaries) ); // 650