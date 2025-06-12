# Sonni Teskari Yozish Masalasi

## Masala Sharti
Berilgan 32-bitli butun sonni teskari yozish kerak. Agar teskari yozilgan son 32-bitli butun son chegarasidan oshib ketsa, 0 qaytarish kerak.

### Kirish Ma'lumotlari
- `x`: 32-bitli butun son

### Chiqish Ma'lumotlari
- Teskari yozilgan son yoki 0 (agar chegaradan oshib ketsa)

### Misollar
```
Input: x = 123
Output: 321

Input: x = -123
Output: -321

Input: x = 120
Output: 21

Input: x = 1534236469
Output: 0
Tushuntirish: 9646324351 > 2^31 - 1, shuning uchun 0 qaytaramiz
```

## Yechim

### String Konvertatsiya Yordamida Yechim
Bu yechimda biz sonni string ga o'girib, uni teskari yozamiz va keyin yana songa qaytaramiz.

#### Algoritm:
1. Sonning modulini olamiz (manfiy sonlar uchun)
2. Sonni string ga o'girib, teskari yozamiz
3. Teskari yozilgan sonni tekshiramiz:
   - Agar 2^31 dan katta bo'lsa, 0 qaytaramiz
   - Aks holda, asl sonning ishorasini saqlab, teskari yozilgan sonni qaytaramiz

#### Kodlar:
```javascript
var reverse = function (x) {
  const int = `${Math.abs(x)}`?.split("")?.reverse("")?.join("");

  if (+int > 2 ** 31) {
    return 0;
  }

  return x > 0 ? +int : +`-${int}`;
};
```

#### Murakkablik:
- Vaqt murakkabligi: O(log n), bu yerda n - sonning raqamlari soni
- Xotire murakkabligi: O(log n)

### Yechimning Ishlash Prinsipi
1. `x = 123` misolida:
   - `Math.abs(123)` = `123`
   - `"123"` -> `["1", "2", "3"]` -> `["3", "2", "1"]` -> `"321"`
   - `321 < 2^31`, shuning uchun `321` qaytaramiz

2. `x = -123` misolida:
   - `Math.abs(-123)` = `123`
   - `"123"` -> `["1", "2", "3"]` -> `["3", "2", "1"]` -> `"321"`
   - `321 < 2^31`, shuning uchun `-321` qaytaramiz

3. `x = 1534236469` misolida:
   - `Math.abs(1534236469)` = `1534236469`
   - `"1534236469"` -> `"9646324351"`
   - `9646324351 > 2^31`, shuning uchun `0` qaytaramiz

## Muallif

Bu masalalar [LeetCode](https://leetcode.com) platformasidan olingan.

## GitHub

[My Github Profile](https://github.com/uzhojiakbar)
