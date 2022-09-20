/* Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите только уникальные 
значения массива -> [1, 5] (for) */

let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
let resultArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
        resultArr.push(arr[i]);
    }
}

console.log(resultArr);