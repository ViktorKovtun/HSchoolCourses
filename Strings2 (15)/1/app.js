/* На входе строка, необходимо убрать все личшние пробелы и привести каждый 
элемент к нижнему регистру. Повторить строку 3 раза. Добавить проверку на 
ввод только текстовых значений */

let someString = prompt("Enter some string:").trim().toLowerCase();

while (!(isNaN(someString)) || someString == "") {
    someString = prompt("Incorrect input. Try again:").trim().toLowerCase();
}

console.log(someString.repeat(3));