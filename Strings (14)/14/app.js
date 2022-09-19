/* Дан массив. Вывести каждый одельный элемент в консоль (for) */

let arrLength = +prompt("Enter an amount of elements of array:");


let arr = [];

for (let i = 0; i < arrLength; i++) {
    arr.push(prompt("Enter an element of the array:"));
}

for (let key in arr) {
    console.log(arr[key]);
}