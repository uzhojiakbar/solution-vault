# Ikkita Tartibli Massivning Medianasi Masalasi

## Masala Sharti
Ikkita tartibli massiv berilgan. Bu massivlarni birlashtirib, ularning medianasini topish kerak. Median - bu tartibli massivning o'rtasidagi son. Agar massiv uzunligi juft bo'lsa, o'rtadagi ikkita sonning o'rtacha arifmetik qiymati olinadi.

### Kirish Ma'lumotlari
- `nums1`: Birinchi tartibli massiv
- `nums2`: Ikkinchi tartibli massiv

### Chiqish Ma'lumotlari
- Ikkita massivni birlashtirib, ularning medianasi (son)

### Misollar
```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.0
Tushuntirish: Birlashtirilgan massiv = [1,2,3], mediana = 2

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.5
Tushuntirish: Birlashtirilgan massiv = [1,2,3,4], mediana = (2 + 3) / 2 = 2.5
```

## Yechim

### Birlashtirish va Tartiblash Yordamida Yechim
Bu yechimda biz ikkita massivni birlashtirib, tartiblaymiz va keyin medianani topamiz.

#### Algoritm:
1. Ikkita massivni birlashtiramiz
2. Birlashtirilgan massivni tartiblaymiz
3. Massiv uzunligi juft yoki toq ekanligini tekshiramiz:
   - Agar juft bo'lsa: o'rtadagi ikkita sonning o'rtacha arifmetik qiymatini qaytaramiz
   - Agar toq bo'lsa: o'rtadagi sonni qaytaramiz

#### Kodlar:
```javascript
var findMedianSortedArrays = function (nums1, nums2) {
  const fullArr = [...nums1, ...nums2]?.sort((a, b) => a - b);
  
  const middleElementYigindi =
    fullArr?.length % 2 === 0
      ? (fullArr[fullArr?.length / 2] + fullArr[fullArr?.length / 2 - 1]) / 2
      : fullArr[Math.floor(fullArr?.length / 2)];

  return middleElementYigindi;
};
```

#### Murakkablik:
- Vaqt murakkabligi: O((n + m)log(n + m)), bu yerda n va m - massivlar uzunligi
- Xotire murakkabligi: O(n + m)

### Yechimning Ishlash Prinsipi
1. `nums1 = [1,3], nums2 = [2]` misolida:
   - Birlashtirilgan massiv: `[1,2,3]`
   - Massiv uzunligi toq (3)
   - Mediana = `arr[Math.floor(3/2)]` = `arr[1]` = 2

2. `nums1 = [1,2], nums2 = [3,4]` misolida:
   - Birlashtirilgan massiv: `[1,2,3,4]`
   - Massiv uzunligi juft (4)
   - Mediana = `(arr[4/2] + arr[4/2-1])/2` = `(arr[2] + arr[1])/2` = `(3 + 2)/2` = 2.5

## Muallif

Bu masalalar [LeetCode](https://leetcode.com) platformasidan olingan.

## GitHub

[My Github Profile](https://github.com/uzhojiakbar)
