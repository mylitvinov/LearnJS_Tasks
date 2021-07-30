
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  

const multiplyNumeric = (obj) =>{
    for (prop in obj ){
        if(typeof obj[prop] === 'number'){
            obj[prop] *= 2;
        }
    }
}

  multiplyNumeric(menu)
  
console.log(menu)