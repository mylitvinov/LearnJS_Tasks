function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(el => typeof el === 'number');
  }

console.log(filter_list([1,15,'324','sefsg',34])); // [ 1, 15, 34 ]