# Two Sum Masalasi

## Masala Sharti

Berilgan `nums` massividan ikkita sonni topish kerak, ularning yig'indisi `target` ga teng bo'lishi kerak. Natijada bu sonlarning indekslarini qaytarish kerak.

### Kirish Ma'lumotlari

- `nums`: Sonlar massivi
- `target`: Qidirilayotgan yig'indi

### Chiqish Ma'lumotlari

- Massivdan ikkita sonning indekslari, ularning yig'indisi `target` ga teng bo'lgan

### Misollar

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Tushuntirish: nums[0] + nums[1] = 2 + 7 = 9, shuning uchun [0, 1] qaytaramiz

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]
```

## Yechimlar

### 1. Ikkita Loop Yordamida Yechim

Bu yechimda biz massivni ikki marta aylanib chiqamiz va har bir juft sonni tekshiramiz.

#### Algoritm:

1. Tashqi loop orqali birinchi sonni tanlaymiz
2. Ichki loop orqali ikkinchi sonni tanlaymiz
3. Agar ularning yig'indisi target ga teng bo'lsa, ularning indekslarini qaytaramiz

#### Kodlar:

```javascript
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
```

#### Murakkablik:

- Vaqt murakkabligi: O(n²)
- Xotira murakkabligi: O(1)

### 2. Hash Map Yordamida Yechim

Bu yechimda biz Hash Map (obyekt) yordamida bir marta aylanib chiqamiz.

#### Algoritm:

1. Hash Map yaratamiz
2. Massivni bir marta aylanib chiqamiz
3. Har bir element uchun:
   - Target dan joriy elementni ayirib, qolgan sonni topamiz
   - Agar bu son Hash Map da mavjud bo'lsa, ularning indekslarini qaytaramiz
   - Aks holda, joriy elementni Hash Map ga qo'shamiz

#### Kodlar:

```javascript
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
```

#### Murakkablik:

- Vaqt murakkabligi: O(n)
- Xotire murakkabligi: O(n)

## Muallif

Bu masalalar [LeetCode](https://leetcode.com) platformasidan olingan.

## GitHub

[My Github Profile](https://github.com/uzhojiakbar)
