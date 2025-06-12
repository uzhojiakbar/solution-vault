// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let num1 = 0; num1 <= nums.length; num1++) {
    for (let num2 = num1 + 1; num2 <= nums.length; num2++) {
      if (nums[num1] + nums[num2] === target) {
        return [num1, num2];
      }
    }
  }
  return [];
};
console.log(twoSum([3, 2, 4], 6));

// BIR MARTA LOOP  (Solution dan olindi)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in obj) {
      return [obj[diff], i];
    } else {
      obj[nums[i]] = i;
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
