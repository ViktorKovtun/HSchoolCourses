/* Пользователь вводит дату в формате ‘х-х-х'. Замените все дефисы на '!' */

let someDay = prompt("Enter a day:");

let someMonth = prompt("Enter a month:");

let someYear = prompt("Enter a year:");

let resultData = `${someDay}-${someMonth}-${someYear}`;

console.log(resultData.replaceAll("-", "!"));