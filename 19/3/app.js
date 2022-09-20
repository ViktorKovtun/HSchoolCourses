/* Дан массив с элементами [2, 3, 4, 5]. С помощью 3 циклов найдите произведение 
элементов этого массива. */

let arr = [2, 3, 4, 5];

let mult = 1;

for (let i = 0; i < arr.length; i++) {
    mult = mult * arr[i];
}

console.log(mult);

mult = 1;

for (let key in arr) {
    mult = mult * arr[key];
}

console.log(mult);

mult = 1;
let i = 0;

while (i !== arr.length) {
    mult = mult * arr[i];
    i++;
}

console.log(mult);