/* Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for of найдите сумму 
элементов этого массива */

let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let key of arr) {
    sum = sum + key;
}

console.log(sum);