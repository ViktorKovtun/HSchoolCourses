/* Ввести строку. Проверить является ли это число или строка. Если число, то 
ошибка ввода. Если это строка то первый символ поставить в верхний регистр. 
Убрать лишние пробелы */

let someString = prompt("Enter some string:").trim();

if (isNaN(someString) && someString !== "") {
    console.log(someString[0].toUpperCase() + someString.slice(1));
} else console.log("Input error.");