/* Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку 
'-1-2-3-4-5-6-7-8-9- */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let resultString = "";

for (let i = 0; i < arr.length; i++) {
    resultString = resultString + "-" + arr[i];
}
console.log(`${resultString}-`);