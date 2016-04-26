// minimum with 2 args.
function min(a, b) {
  return a < b ? a : b;
}
// Recursive isEven.
function isEven(number) {
  number = Math.abs(number);
  if(number < 2) {
    return number === 0 ? true : false;
  }
 return isEven(number - 2);
}
// Bean counting.
function countBs(str) {
  return countChar(str, 'B');
}

function countChar(str, char) {
  function isChar(val) {
    return val === char;
  }
  return str.split('').filter(isChar).length;
}