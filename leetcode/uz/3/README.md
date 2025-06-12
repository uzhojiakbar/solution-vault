# Eng Uzun Takrorlanmas Qator Masalasi

## Masala Sharti

Berilgan `s` satridan eng uzun takrorlanmas qatorni topish kerak. Ya'ni, qator ichidagi har bir harf faqat bir marta takrorlanishi kerak.

### Kirish Ma'lumotlari

- `s`: String tipidagi matn

### Chiqish Ma'lumotlari

- Eng uzun takrorlanmas qatorning uzunligi (son)

### Misollar

```
Input: s = "abcabcbb"
Output: 3
Tushuntirish: Eng uzun takrorlanmas qator "abc" bo'lib, uning uzunligi 3

Input: s = "bbbbb"
Output: 1
Tushuntirish: Eng uzun takrorlanmas qator "b" bo'lib, uning uzunligi 1

Input: s = "pwwkew"
Output: 3
Tushuntirish: Eng uzun takrorlanmas qator "wke" bo'lib, uning uzunligi 3
```

## Yechim

### Sliding Window Yordamida Yechim

Bu yechimda biz Sliding Window texnikasidan foydalanamiz. Bu texnika orqali biz matnni bir marta aylanib chiqamiz va har bir harfni tekshiramiz.

#### Algoritm:

1. Bo'sh massiv yaratamiz (`DubElements`) - bu bizning sliding window bo'ladi
2. Maksimal uzunlikni saqlash uchun o'zgaruvchi yaratamiz (`maxDub`)
3. Matnni har bir harfi uchun tekshiramiz:
   - Agar joriy harf massivda mavjud bo'lsa:
     - Massivni shu harfdan keyingi elementdan boshlab qirqib olamiz
   - Joriy harfni massivga qo'shamiz
   - Agar massiv uzunligi maksimal uzunlikdan katta bo'lsa, yangilaymiz

#### Kodlar:

```javascript
var lengthOfLongestSubstring = function (s) {
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
  }
  return maxDub;
};
```

#### Murakkablik:

- Vaqt murakkabligi: O(n), bu yerda n - matn uzunligi
- Xotire murakkabligi: O(min(m, n)), bu yerda m - alfavit hajmi

### Yechimning Ishlash Prinsipi

1. `"abcabcbb"` misolida:
   - `"a"` -> `["a"]` -> maxDub = 1
   - `"b"` -> `["a", "b"]` -> maxDub = 2
   - `"c"` -> `["a", "b", "c"]` -> maxDub = 3
   - `"a"` -> `["b", "c", "a"]` -> maxDub = 3
   - `"b"` -> `["c", "a", "b"]` -> maxDub = 3
   - `"c"` -> `["a", "b", "c"]` -> maxDub = 3
   - `"b"` -> `["c", "b"]` -> maxDub = 3
   - `"b"` -> `["b"]` -> maxDub = 3

## Muallif

Bu masalalar [LeetCode](https://leetcode.com) platformasidan olingan.

## GitHub

[My Github Profile](https://github.com/uzhojiakbar)
