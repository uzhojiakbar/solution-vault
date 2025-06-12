/**
 * @param {string} s
 * @return {number}
 */

// Birinchi usul: eng oson, eng qulay va tavsiya qiladigan usulim
var myAtoi = function (s) {
  const ans = Number.parseInt(s);
  if (ans) {
    if (ans <= -2147483648) return -2147483648;
    else if (ans >= 2147483647) return 2147483647;
    else return ans;
  }
  return 0;
};

// Ikinchi usul: Bu usulda har bir harfni tekshirib chiqganman, kop vaqt oladi lekin togri ishlaydi
var myAtoi = function (s) {
  console.log("FULL", s);
  let number = ``;
  let num = 0;

  for (let letter of s) {
    console.log("letter", letter);
    if (letter === " " && num == 1) {
      break;
    }
    if (letter === " ") {
      continue;
    }

    if (isNaN(Number(letter))) {
      if (letter == "-" && num == 1) break;
      if (letter == "-" && num == 0) {
        num = 1;
        number += "-";
        continue;
      }
      if (letter === "+" && num === 0) {
        num = 1;
        continue;
      }
      break;
    }
    number += letter;
    num = 1;
    console.log("numberEnd", number);
    console.log("num", num);
  }

  console.log(+number);

  let result = Number(number);

  if (isNaN(result)) return 0;

  const INT_MIN = -2147483648;
  const INT_MAX = 2147483647;

  if (result < INT_MIN) return INT_MIN;
  if (result > INT_MAX) return INT_MAX;

  return result;
};

console.log(myAtoi("   1-0"));
