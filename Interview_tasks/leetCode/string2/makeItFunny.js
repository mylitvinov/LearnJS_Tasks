const makeItFunny = (text, n) => {
  let result = '';

  for (let i = 0; i < text.length; i++) {
    (i+1) % n === 0 ? (result += text[i].toUpperCase()) : result += text[i];
  }
  return result;
};

const text = "I never look back";
// Каждый третий элемент
console.log(makeItFunny(text, 3)); // 'I NevEr LooK bAck'
