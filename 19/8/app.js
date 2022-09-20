/* Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите каждый элемент массива 
без повторений -> [1, 2, 3, 4, 5] (for, for of) */

let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
let resultArr = [];

for (let i = 0; i < arr.length; i++) {
    if (!(resultArr.includes(arr[i]))) {
        resultArr.push(arr[i]);
    }
}

console.log(resultArr);

/* 
let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
let resultArr = [];

for (let key of arr){
    if (!(resultArr.includes(key))) {
        resultArr.push(key);
    }
}

console.log(resultArr);
*/