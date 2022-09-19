/* На вход подаются 2 строки. Необходимо сравнить их и если они одинаковы, то 
вывести true, в противном случае false. 
'string', 'StRiNg' -> true */

let firstString = prompt("Enter a string:").trim().toLowerCase();
let secondString = prompt("Enter a substring:").trim().toLowerCase();

(firstString === secondString) ? console.log(true) : console.log(false);