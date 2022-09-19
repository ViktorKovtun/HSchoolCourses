/* Дана строка из 3 слов разделенных пробелом:
• Найдите количество символов в этой строке. 
• Вырежите из нее 2 и 3 слова. 
• Найдите индекс 2 подстроки */

let someString = prompt("Enter a string of 3 words separated by a space").trim();
console.log("Amount of symbols:", someString.length);
console.log("The second and the third words:", someString.slice(someString.indexOf(" ") + 1, someString.lastIndexOf(" ")), someString.slice(someString.lastIndexOf(" ") + 1));
console.log("Index of the second substring:", someString.indexOf(" ") + 1);