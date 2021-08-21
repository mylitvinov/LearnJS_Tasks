const checkSpam = (str) => {
  let lowStr = str.toLowerCase();
  if (lowStr.includes("porno") || lowStr.includes("xxx")) {
    return true;
  } else {
    return false;
  }
};

console.log(checkSpam("XXX")); //true
