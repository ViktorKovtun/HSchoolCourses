/* У вас есть массив из строк, чисел и иных примитивов. Необходимо создать новый 
массив, заполненный только числами первоначального массива */

let someAmount = +prompt("Enter an amount of elements:");
let arr = [];
let resultArr = [];

for (let i = 0; i < someAmount; i++) {
    arr.push(prompt("Enter an element:"));
}

for (let i = 0; i < arr.length; i++) {
    if (!(isNaN(arr[i]) || arr[i].includes(" ") || arr[i] === "")) {
        resultArr.push(+arr[i]);
    }
}

console.log(resultArr);