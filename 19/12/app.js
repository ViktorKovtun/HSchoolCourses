/* Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 5 циклом while */

let arr = [2, 5, 9, 15, 9, 0, 4];
let i = 0;

while (i < arr.length) {
    if (arr[i] % 5 === 0) {
        console.log(arr[i]);
    }
    i++;
}