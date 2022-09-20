/* На вход программе подается строка текста содержащая “@”. Напишите 
программу, которая удаляет все вхождения символа “@”. Добавить проверки
123@1@@34 -> 123134 */

let someString = prompt("Enter a string:").trim();

while (!(isNaN(someString)) || someString == "") {
    someString = prompt('Incorrect input. Try again:').trim();
}

console.log(someString.replaceAll("@", ""));