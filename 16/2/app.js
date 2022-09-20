/*  Найдите квадратный корень числа. Результат округлите до целых, десятых, сотых */

let someNumber = +prompt("Enter a number:");

console.log(Math.sqrt(someNumber).toFixed(0), Math.sqrt(someNumber).toFixed(1), Math.sqrt(someNumber).toFixed(2));