/* Пользователь вводит число, явдяющееся количеством элементов будущего 
массива. Напишите код заполнения массива методом prompt. */

let someNumber = +prompt("Enter an amount of elements:");
let arr = [];

for (let i = 0; i < someNumber; i++) {
    arr.push(prompt("Enter an amount of an array:"));
}

console.log(arr);