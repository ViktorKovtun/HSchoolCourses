/* Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат 
'xx.xx.xxxx'. */

let someString = prompt("Enter some data 'xxxx-xx-xx':");
console.log(someString.split("-").reverse().join("."));