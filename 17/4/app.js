/* Дан статичный массив с элементами и число вводимое с клавиатуры. С помощью 
цикла for и оператора if проверьте есть ли в массиве введенное число. Если есть, 
то остановите выполнение цикла. Если нет, то найдите среднее арифметическое 
всех чисел */

let someAmount = +prompt("Enter an amount of elements:");
let someNumber = +prompt("Enter some number:");
let flag = true;
let sum = 0;
let arr = [];

for (let i = 0; i < someAmount; i++) {
    arr.push(+prompt("Enter an element of an array:"));
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === someNumber) {
        console.log("There is.");
        flag = false;
        break;
    }
    sum = sum + arr[i];
}

if (flag === true) {
    console.log(sum / someAmount);
}