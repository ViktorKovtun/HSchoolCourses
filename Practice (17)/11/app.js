/* Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if 
проверьте есть ли в массиве элемент со значением, равным 4. Посчитать 
количество повторений числа 4 в массив */

let arr = [1, 2, 5, 9, 4, 13, 4, 10];
let counter = 0;

for (let key in arr) {
    if (arr[key] === 4) {
        console.log("There is");
        counter++;
    }
}

console.log(counter);