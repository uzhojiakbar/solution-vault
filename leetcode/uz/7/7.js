/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const int = `${Math.abs(x)}`?.split("")?.reverse("")?.join("");

  console.log("int", int);

  if (+int > 2 ** 31) {
    return 0;
  }

  return x > 0 ? +int : +`-${int}`;
};

console.log(reverse(-123.1));
