# Palindrom Son Masalasi

## Masala Sharti
Berilgan son palindrom ekanligini tekshirish kerak. Palindrom son - bu o'ngdan ham, chapdan ham bir xil o'qiladigan son.

### Kirish Ma'lumotlari
- `x`: Butun son

### Chiqish Ma'lumotlari
- `true` agar son palindrom bo'lsa
- `false` agar son palindrom bo'lmasa

### Misollar
```
Input: x = 121
Output: true
Tushuntirish: 121 o'ngdan ham, chapdan ham bir xil o'qiladi

Input: x = -121
Output: false
Tushuntirish: -121 o'ngdan o'qilganda 121- bo'ladi

Input: x = 10
Output: false
Tushuntirish: 10 o'ngdan o'qilganda 01 bo'ladi
```

## Yechimlar

### 1. String Konvertatsiya Yordamida Yechim
Bu yechimda biz sonni string ga o'girib, uni teskari yozamiz va taqqoslaymiz.

#### Algoritm:
1. Sonni string ga o'girib, teskari yozamiz
2. Teskari yozilgan sonni asl son bilan taqqoslaymiz

#### Kodlar:
```javascript
var isPalindrome = function (x) {
  const reverse = `${x}`?.split("")?.reverse()?.join("");
  return reverse == x;
};
```

#### Murakkablik:
- Vaqt murakkabligi: O(log n), bu yerda n - sonning raqamlari soni
- Xotire murakkabligi: O(log n)

### 2. Ikkita Loop Yordamida Yechim
Bu yechimda biz sonni string ga o'girib, har bir raqamni tekshiramiz.

#### Algoritm:
1. Sonni string ga o'girib, har bir raqamni tekshiramiz
2. Birinchi raqamni oxirgi raqam bilan, ikkinchi raqamni oxiridan ikkinchi raqam bilan va hokazo taqqoslaymiz
3. Agar biror juft raqamlar mos kelmasa, `false` qaytaramiz
4. Aks holda, `true` qaytaramiz

#### Kodlar:
```javascript
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
```

#### Murakkablik:
- Vaqt murakkabligi: O(n), bu yerda n - sonning raqamlari soni
- Xotire murakkabligi: O(1)

### 3. Massiv Operatsiyalari Yordamida Yechim
Bu yechimda biz sonni massivga o'girib, boshidan va oxiridan raqamlarni olib taqqoslaymiz.

#### Algoritm:
1. Sonni string ga o'girib, massivga aylantiramiz
2. Massiv uzunligi 1 dan katta bo'lguncha:
   - Massivning boshidan va oxiridan raqamlarni olib taqqoslaymiz
   - Agar mos kelmasa, `false` qaytaramiz
3. Agar barcha raqamlar mos kelsa, `true` qaytaramiz

#### Kodlar:
```javascript
var isPalindrome = function (x) {
  const arr = String(x).split("");

  while (arr.length > 1) {
    if (arr.shift() !== arr.pop()) {
      return false;
    }
  }

  return true;
};
```

#### Murakkablik:
- Vaqt murakkabligi: O(n), bu yerda n - sonning raqamlari soni
- Xotire murakkabligi: O(n)

### Yechimlarni Taqqoslash
1. Birinchi yechim:
   - Eng oson va tushunarli
   - Lekin ko'proq xotire ishlatadi
   - 3 ta loop ishlatadi (split, reverse, join)

2. Ikkinchi yechim:
   - 2 ta loop ishlatadi
   - Xotire samaraliroq
   - Lekin kod biroz murakkabroq

3. Uchinchi yechim:
   - Massiv operatsiyalaridan foydalanadi
   - Kod aniq va tushunarli
   - Lekin xotire samaradorligi past

## Muallif

Bu masalalar [LeetCode](https://leetcode.com) platformasidan olingan.

## GitHub

[My Github Profile](https://github.com/uzhojiakbar)
