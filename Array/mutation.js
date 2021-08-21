
// 1 variant
function mutation(arr) {
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }
  console.log(mutation(['Maxim','Mix'])) //true

  //2 variant

  function mutation2(arr) {
    return arr[1]
      .toLowerCase()
      .split("")
      .every((letter) => {
        return arr[0].toLowerCase().includes(letter);
      });
  }
  console.log(mutation2(['Maxim','Mix'])) // true встречаются одинаковые символы