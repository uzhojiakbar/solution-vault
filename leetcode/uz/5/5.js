// 5. Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.
// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// BRINCHI YECHIM: Bu zor ishladi, lekin Time Limit xatoligini bervordi ))
var longestPalindrome = function (s) {
  const IsPalindrome = (text) => {
    if (text == text?.split("")?.reverse()?.join("")) {
      return text;
    }
  };

  let longestPalindromeResult = "";

  const Hammasi = IsPalindrome(s);
  if (Hammasi) return Hammasi;

  for (let i = 0; i < s?.length; i++) {
    for (let j = i + 1; j <= s?.length; j++) {
      //   if (j - i > 1) {
      const Copiedtext = s?.slice(i, j);
      const natija = IsPalindrome(Copiedtext);
      if (natija) {
        if (Copiedtext.length > longestPalindromeResult.length) {
          longestPalindromeResult = Copiedtext;
        }
      }
    }
  }

  return longestPalindromeResult;
};

console.log(longestPalindrome("abb"));

// IKKINCHI OPTIMLA YECHIM: Bu usulda for looplarni sal boshqacharoq yol bn optimlashtirdim
var longestPalindrome = function (s) {
  if (s.length < 1) return "";

  let start = 0,
    end = 0;

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return [left + 1, right - 1];
  };

  for (let i = 0; i < s.length; i++) {
    let [left1, right1] = expandAroundCenter(i, i); // odd length
    let [left2, right2] = expandAroundCenter(i, i + 1); // even length

    if (right1 - left1 > end - start) {
      start = left1;
      end = right1;
    }
    if (right2 - left2 > end - start) {
      start = left2;
      end = right2;
    }
  }

  return s.slice(start, end + 1);
};

console.log(longestPalindrome("abb"));
