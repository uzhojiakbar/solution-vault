/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  console.log(s);
  console.log();
  let DubElements = [];
  let maxDub = 0;

  for (let i = 0; i < s.length; i++) {
    if (DubElements?.includes(s[i])) {
      DubElements = DubElements?.slice(DubElements?.indexOf(s[i]) + 1);
    }
    DubElements.push(s[i]);
    if (DubElements?.length > maxDub) {
      maxDub = DubElements?.length;
    }
    console.log(DubElements);
  }
  console.log(maxDub);
  return maxDub;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
