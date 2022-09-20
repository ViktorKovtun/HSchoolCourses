/* Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только 
те числа из массива, которые начинаются на цифру 1, 2 или 5 -> 10, 20, 50, 235 */

let someNumber = +prompt("Enter an amount of elements:");
let arr = [];

for (let i = 0; i < someNumber; i++) {
    arr.push(prompt("Enter an element:"));
}

for (let key of arr) {
    if (key.startsWith("1") || key.startsWith("2") || key.startsWith("5")) {
        console.log(+key);
    }
}