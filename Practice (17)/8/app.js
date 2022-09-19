/* Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение 
элементов этого массива */

let arr = [2, 3, 4, 5];
let mult = 1;

for (let key in arr) {
    mult = mult * arr[key];
}
console.log(mult);