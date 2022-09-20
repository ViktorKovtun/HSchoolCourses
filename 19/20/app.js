/* Пользователь вводит многозначное число. Необходимо вставить двоеточие 
между двумя нечетными числами. Работать с числом как с массивом. 
Использовать for
55639217 -> 5:563:921:7 */

let someNumber = prompt("Enter a number:");
let arr = someNumber.split("");
let resultArr = [];
for (let i = 0; i < arr.length; i++) {
    resultArr.push(arr[i]);
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 1] != undefined) {
        resultArr.push(":");
    }
}
console.log(resultArr);
