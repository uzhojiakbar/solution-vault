# String to Integer (atoi) Masalasi

## Masala Sharti
Berilgan string ni 32-bitli butun songa o'zgartirish kerak. Bu funksiya C/C++ dasturlash tilidagi `atoi` funksiyasiga o'xshash ishlashi kerak.

### Kirish Ma'lumotlari
- `s`: String tipidagi matn

### Chiqish Ma'lumotlari
- 32-bitli butun son yoki 0 (agar o'zgartirish mumkin bo'lmasa)

### Misollar
```
Input: s = "42"
Output: 42

Input: s = "   -42"
Output: -42
Tushuntirish: Boshidagi bo'sh joylar e'tiborga olinmaydi, "-" belgisi sonni manfiy qiladi

Input: s = "4193 with words"
Output: 4193
Tushuntirish: Raqamdan keyingi harflar e'tiborga olinmaydi

Input: s = "words and 987"
Output: 0
Tushuntirish: Raqamdan oldingi harflar e'tiborga olinmaydi
```

## Yechimlar

### 1. Number.parseInt() Yordamida Yechim
Bu yechimda biz JavaScript ning o'zining `Number.parseInt()` funksiyasidan foydalanamiz.

#### Algoritm:
1. String ni `Number.parseInt()` yordamida songa o'zgartiramiz
2. Agar son 32-bitli butun son chegarasidan oshib ketsa:
   - Agar manfiy bo'lsa, -2^31 qaytaramiz
   - Agar musbat bo'lsa, 2^31 - 1 qaytaramiz
3. Agar son mavjud bo'lsa, uni qaytaramiz
4. Aks holda, 0 qaytaramiz

#### Kodlar:
```javascript
var myAtoi = function (s) {
  const ans = Number.parseInt(s);
  if (ans) {
    if (ans <= -2147483648) return -2147483648;
    else if (ans >= 2147483647) return 2147483647;
    else return ans;
  }
  return 0;
};
```

#### Murakkablik:
- Vaqt murakkabligi: O(1)
- Xotire murakkabligi: O(1)

### 2. Har bir Harfni Tekshirish Yordamida Yechim
Bu yechimda biz string ni har bir harfini tekshirib chiqamiz.

#### Algoritm:
1. String ni har bir harfi uchun tekshiramiz:
   - Agar bo'sh joy bo'lsa va raqam topilgan bo'lsa, to'xtaymiz
   - Agar bo'sh joy bo'lsa, davom etamiz
   - Agar harf raqam bo'lmasa:
     - Agar "-" bo'lsa va raqam topilmagan bo'lsa, sonni manfiy qilamiz
     - Agar "+" bo'lsa va raqam topilmagan bo'lsa, davom etamiz
     - Boshqa harflar uchun to'xtaymiz
   - Agar harf raqam bo'lsa, uni sonimizga qo'shamiz
2. Topilgan sonni 32-bitli butun son chegarasiga tekshiramiz

#### Kodlar:
```javascript
var myAtoi = function (s) {
  let number = ``;
  let num = 0;

  for (let letter of s) {
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
  }

  let result = Number(number);

  if (isNaN(result)) return 0;

  const INT_MIN = -2147483648;
  const INT_MAX = 2147483647;

  if (result < INT_MIN) return INT_MIN;
  if (result > INT_MAX) return INT_MAX;

  return result;
};
```

#### Murakkablik:
- Vaqt murakkabligi: O(n), bu yerda n - string uzunligi
- Xotire murakkabligi: O(1)

### Yechimlarni Taqqoslash
1. Birinchi yechim:
   - JavaScript ning o'z funksiyasidan foydalanadi
   - Kod qisqa va tushunarli
   - Vaqt murakkabligi past

2. Ikkinchi yechim:
   - Har bir harfni tekshiradi
   - Ko'proq vaqt oladi
   - Lekin masala shartiga aniq mos keladi

## Muallif

Bu masalalar [LeetCode](https://leetcode.com) platformasidan olingan.

## GitHub

[My Github Profile](https://github.com/uzhojiakbar)
