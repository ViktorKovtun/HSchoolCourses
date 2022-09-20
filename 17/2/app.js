/* Дан статичный массив элементов. С помощью цикла for найдите произведение 
всех элементов массива */

let someAmount = +prompt("Enter an amount of elements:");
let arr = [];
let mult = 1;

for (let i = 0; i < someAmount; i++) {
    arr.push(+prompt("Enter an element of an array:"));
}

for (let i = 0; i < arr.length; i++) {
    mult = mult * arr[i];
}
console.log(mult);
