/**
 * @param {number} x
 * @return {boolean}
 */

// *Bu birinchi, eng oson yechimi
var isPalindrome = function (x) {
  const reverse = `${x}`?.split("")?.reverse()?.join("");

  return reverse == x;
};
// *Bu eas ikkinchi, bunda 2 ta loop bor, tepada esa split, reverse va join bolgani uchun 3ta loop bolgandi

var isPalindrome = function (x) {
  x = x.toString();
  for (let i = 0; i < x.length; i++) {
    for (let j = x.length - 1 - i; j >= 0; j--) {
      if (x[i] != x[j]) {
        return false;
      }
      break;
    }
  }
  return true;
};

// * Bu esa 3-usul

var isPalindrome = function (x) {
  const arr = String(x).split("");

  while (arr.length > 1) {
    if (arr.shift() !== arr.pop()) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome("121"));
