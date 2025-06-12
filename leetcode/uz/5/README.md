# Eng Uzun Palindrom Qator Masalasi

## Masala Sharti

Berilgan `s` satridan eng uzun palindrom qatorni topish kerak. Palindrom - bu o'ngdan ham, chapdan ham bir xil o'qiladigan so'z yoki qator.

### Kirish Ma'lumotlari

- `s`: String tipidagi matn

### Chiqish Ma'lumotlari

- Eng uzun palindrom qator

### Misollar

```
Input: s = "babad"
Output: "bab"
Tushuntirish: "aba" ham to'g'ri javob hisoblanadi

Input: s = "cbbd"
Output: "bb"
```

## Yechimlar

### 1. Barcha Mumkin Bo'lgan Qatorlarni Tekshirish

Bu yechimda biz barcha mumkin bo'lgan qatorlarni tekshiramiz va ular orasidan eng uzun palindromni topamiz.

#### Algoritm:

1. Palindrom tekshiruvchi funksiya yaratamiz
2. Barcha mumkin bo'lgan qatorlarni tekshiramiz
3. Eng uzun palindromni saqlaymiz

#### Kodlar:

```javascript
var longestPalindrome = function (s) {
  const IsPalindrome = (text) => {
    if (text == text?.split("")?.reverse()?.join("")) {
      return text;
    }
  };

  let longestPalindromeResult = "";

  const Hammasi = IsPalindrome(s);
  if (Hammasi) return Hammasi;

  for (let i = 0; i < s?.length; i++) {
    for (let j = i + 1; j <= s?.length; j++) {
      const Copiedtext = s?.slice(i, j);
      const natija = IsPalindrome(Copiedtext);
      if (natija) {
        if (Copiedtext.length > longestPalindromeResult.length) {
          longestPalindromeResult = Copiedtext;
        }
      }
    }
  }

  return longestPalindromeResult;
};
```

#### Murakkablik:

- Vaqt murakkabligi: O(n³), bu yerda n - matn uzunligi
- Xotire murakkabligi: O(1)

### 2. Markazdan Kengaytirish Yordamida Yechim

Bu yechimda biz har bir harfni potensial markaz sifatida ko'rib chiqamiz va undan kengaytirib boramiz.

#### Algoritm:

1. Har bir harf uchun:
   - Toq uzunlikdagi palindromni tekshiramiz (markaz - bitta harf)
   - Juft uzunlikdagi palindromni tekshiramiz (markaz - ikkita harf)
2. Eng uzun palindromni saqlaymiz

#### Kodlar:

```javascript
var longestPalindrome = function (s) {
  if (s.length < 1) return "";

  let start = 0,
    end = 0;

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return [left + 1, right - 1];
  };

  for (let i = 0; i < s.length; i++) {
    let [left1, right1] = expandAroundCenter(i, i); // toq uzunlik
    let [left2, right2] = expandAroundCenter(i, i + 1); // juft uzunlik

    if (right1 - left1 > end - start) {
      start = left1;
      end = right1;
    }
    if (right2 - left2 > end - start) {
      start = left2;
      end = right2;
    }
  }

  return s.slice(start, end + 1);
};
```

#### Murakkablik:

- Vaqt murakkabligi: O(n²), bu yerda n - matn uzunligi
- Xotire murakkabligi: O(1)

### Yechimlarni Taqqoslash

1. Birinchi yechim:

   - Barcha mumkin bo'lgan qatorlarni tekshiradi
   - Vaqt murakkabligi yuqori (O(n³))
   - Katta matnlar uchun Time Limit xatoligini beradi

2. Ikkinchi yechim:
   - Markazdan kengaytirish usulidan foydalanadi
   - Vaqt murakkabligi pastroq (O(n²))
   - Katta matnlar uchun ham samarali ishlaydi

## Muallif

Bu masalalar [LeetCode](https://leetcode.com) platformasidan olingan.

## GitHub

[My Github Profile](https://github.com/uzhojiakbar)
