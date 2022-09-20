/* Дан массив с числами. Числа могут быть положительными и отрицательными. 
Найдите сумму всех положительных элементов массива циклом for of */

let someNumber = +prompt("Enter an amount of elements:");
let arr = [];

for (let i = 0; i < someNumber; i++) {
    arr.push(+prompt("Enter an element:"));
}

let sum = 0;

for (let key of arr) {
    if (key > 0) {
        sum = sum + key;
    }
}

console.log(sum);