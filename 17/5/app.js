/* Найдите максимальное значение в статичном массиве используя цикл. */

let someAmount = +prompt("Enter an amount of elements:");
let max = -1000000;
let arr = [];

for (let i = 0; i < someAmount; i++) {
    arr.push(+prompt("Enter an element of an array:"));
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);