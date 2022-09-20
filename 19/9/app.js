/* Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 3 циклом for of */

let arr = [2, 5, 9, 15, 0, 4];

for (let key of arr) {
    if (key % 3 === 0) {
        console.log(key);
    }
}