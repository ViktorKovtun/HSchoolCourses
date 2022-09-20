/* На вход подается строка. Необходимо сложить все элементы числа. Добавить 
проверку на ввод только чисел
53 -> 8
135 -> 9 */

let someNumber = prompt("Enter a number").trim();

while (isNaN(someNumber) || someNumber.includes(" ") || someNumber == "") {
    someNumber = prompt("Incorrect input. Try again:").trim();
}

let sum = 0;

for (let i = 0; i < someNumber.length; i++) {
    sum = sum + +someNumber[i];
}

console.log(sum);