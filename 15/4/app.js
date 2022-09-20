/*  На вход подаются 2 строки. Если исходная 1 строка зкаканчивается на 2 строку 
вывести true, в противном случае false */

let firstString = prompt("Enter a string:").trim();
let secondString = prompt("Enter a substring:").trim();

(firstString.endsWith(secondString)) ? console.log(true) : console.log(false);