/* Ввести строку. Проверить на isNaN. Если число, то ошибка ввода. Если это строка 
то узнать какая у нее длина. Привести к одному регистру, убрать лишние пробелы */

let someString = prompt("Enter some string:").trim();

if (isNaN(someString) && someString !== "") {
    console.log(someString.length);
} else console.log("Input error.");