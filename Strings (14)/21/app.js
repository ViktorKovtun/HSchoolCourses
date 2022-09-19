/* На вход программе подается строка, состоящая из имени и фамилии человека, 
разделенных одним пробелом. Напишите программу, которая проверяет, что имя 
и фамилия начинаются с заглавной буквы.
Chris Alan => true
chris alan => false */

let someString = prompt("Enter your name and surname:").trim();

let arr = someString.split(" ");

let resultCheck = false;

for (let key in arr) {
    if (arr[key][0] === arr[key][0].toUpperCase()) {
        resultCheck = true;
    } else break;
}

console.log(resultCheck);