/* Преобразуйте первую букву строки в верхний регистр несколькими способами */

let someString = prompt("Enter a string:").trim();
console.log(someString[0].toUpperCase() + someString.slice(1));