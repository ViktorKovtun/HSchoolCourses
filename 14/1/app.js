/* Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false. 
Добавить проверки для строк.Удалить лишние пробелы */

let someString = prompt("Enter some string:").trim();

while (!(isNaN(someString)) || someString == "") {
    someString = prompt("Incorrect string. Try again:").trim();
}

if (someString === "hschool") {
    console.log(true);
} else console.log(false);