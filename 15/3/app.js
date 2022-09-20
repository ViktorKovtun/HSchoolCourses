/*  На вход подаются 2 строки. Необходимо найти в 1 строке 2 подстроку и вывести 
true, если совпадение есть, в противном случае false */

let firstString = prompt("Enter a string:").trim();
let secondString = prompt("Enter a substring:").trim();

firstString.includes(secondString) ? console.log(true) : console.log(false);
