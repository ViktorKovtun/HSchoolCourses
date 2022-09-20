/* Преобразуйте первую букву каждого слова строки в верхний регистр. */

let someString = prompt("Enter some string:").trim();

let arr = someString.split(" ");

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
}

console.log(arr.join(" "));
