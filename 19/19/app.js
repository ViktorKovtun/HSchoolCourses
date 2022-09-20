/* Пользователь вводит число, явдяющееся количеством элементов будущего 
массива. Напишите код заполнения массива методом prompt. Проверить каждый 
prompt на число (ввод строки, проверка на isNaN) */

let someNumber = +prompt("Enter an amount of elements:");
let arr = [];

for (let i = 0; i < someNumber; i++) {
    let someData = prompt("Enter an amount of an array:").trim();
    while (isNaN(someData) || someData == "" || someData.includes(" ")) {
        someData = prompt("Incorrect input. Try again:").trim();
    }
    arr.push(+someData);
}

console.log(arr);