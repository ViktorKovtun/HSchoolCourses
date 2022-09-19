/* На вход число. Необходимо вывести все числа от 1 до введенного числа. Добавить 
проверку вводимого значения, если это текст –> сообщение об ошибке */

let someNumber = prompt("Enter a number:").trim();

while (isNaN(someNumber) || someNumber.includes(" ") || someNumber === " ") {
    someNumber = prompt("Incorrect input. Try again:").trim();
}

for (let i = 1; i <= someNumber; i++) {
    console.log(i);
}