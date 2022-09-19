//Преобразовать строку ‘сStaCK DevELoper’ в массив вида [‘full, ‘stack’, ‘developer’]

let someString = "сStaCK DevELoper";

let resultString = "full " + someString.slice(1).toLowerCase();

console.log(resultString.split(" "));