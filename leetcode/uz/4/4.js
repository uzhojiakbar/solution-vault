var findMedianSortedArrays = function (nums1, nums2) {
  const fullArr = [...nums1, ...nums2]?.sort((a, b) => a - b);
  // ? 1,2,3,4,5,6
  // ? 1,2,3,4,5
  const middleElementYigindi =
    fullArr?.length % 2 === 0
      ? (fullArr[fullArr?.length / 2] + fullArr[fullArr?.length / 2 - 1]) / 2
      : fullArr[Math.floor(fullArr?.length / 2)];

  console.log(middleElementYigindi);
  return middleElementYigindi;
};

console.log(findMedianSortedArrays([1, 3], [2]));
