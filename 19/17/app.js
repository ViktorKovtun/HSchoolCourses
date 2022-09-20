/* Дано предложение и количество раз которое его надо повторить. Напишите 
программу, которая повторяет данное предложение нужное количество раз. */

let someString = prompt("Enter some string:").trim();
let someNumber = +prompt("Enter an amount ot repeat the string:");
console.log(someString.repeat(someNumber));