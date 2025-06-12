# Zigzag Konvertatsiya Masalasi

## Masala Sharti
Berilgan `s` satrni zigzag ko'rinishda yozish kerak va keyin uni qator bo'yicha o'qib, yangi satr hosil qilish kerak.

### Kirish Ma'lumotlari
- `s`: String tipidagi matn
- `numRows`: Qatorlar soni

### Chiqish Ma'lumotlari
- Zigzag ko'rinishda yozilgan va qator bo'yicha o'qilgan yangi satr

### Misollar
```
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Tushuntirish:
P   A   H   N
A P L S I I G
Y   I   R

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Tushuntirish:
P     I    N
A   L S  I G
Y A   H R
P     I
```

## Yechim

### Qatorlar Massivi Yordamida Yechim
Bu yechimda biz har bir qator uchun alohida massiv yaratamiz va harflarni zigzag ko'rinishda joylashtiramiz.

#### Algoritm:
1. Agar qatorlar soni 1 yoki matn uzunligidan katta/kichik bo'lsa, matnni o'zini qaytaramiz
2. Har bir qator uchun bo'sh massiv yaratamiz
3. Matnni har bir harfi uchun:
   - Joriy qatorga harfni qo'shamiz
   - Qator indeksini o'zgartiramiz (yuqoriga yoki pastga)
4. Barcha qatorlarni birlashtiramiz

#### Kodlar:
```javascript
var convert = function (s, numRows) {
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  let idx = 0,
    d = 1;
  const rows = new Array(numRows).fill().map(() => []);

  for (const char of s) {
    rows[idx].push(char);
    if (idx === 0) {
      d = 1;
    } else if (idx === numRows - 1) {
      d = -1;
    }
    idx += d;
  }

  for (let i = 0; i < numRows; i++) {
    rows[i] = rows[i].join("");
  }

  return rows.join("");
};
```

#### Murakkablik:
- Vaqt murakkabligi: O(n), bu yerda n - matn uzunligi
- Xotire murakkabligi: O(n)

### Yechimning Ishlash Prinsipi
1. `s = "PAYPALISHIRING", numRows = 3` misolida:
   - Qatorlar: `["", "", ""]`
   - Harflarni joylashtirish:
     ```
     P   A   H   N    (qator 0)
     A P L S I I G    (qator 1)
     Y   I   R        (qator 2)
     ```
   - Qatorlar bo'yicha o'qish: `"PAHNAPLSIIGYIR"`

2. `s = "PAYPALISHIRING", numRows = 4` misolida:
   - Qatorlar: `["", "", "", ""]`
   - Harflarni joylashtirish:
     ```
     P     I    N     (qator 0)
     A   L S  I G     (qator 1)
     Y A   H R        (qator 2)
     P     I          (qator 3)
     ```
   - Qatorlar bo'yicha o'qish: `"PINALSIGYAHRPI"`

## Muallif

Bu masalalar [LeetCode](https://leetcode.com) platformasidan olingan.

## GitHub

[My Github Profile](https://github.com/uzhojiakbar)
