/* Дана строка в виде числа. Необходимо просуммиоровать все элементы числа
‘123’ -> 6
‘111111111111’ -> 12 */

let someNumber = prompt("Enter a number:").trim();
let sum = 0;

for (let i = 0; i < someNumber.length; i++) {
    sum = sum + +someNumber[i];
}

console.log(sum);