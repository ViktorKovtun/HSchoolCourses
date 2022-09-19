/* На вход программе подается строка текста, состоящая из слов, разделенных 
ровно одним пробелом. Напишите программу, которая подсчитывает количество 
слов в ней */

let someString = prompt("Enter some string:").trim();
let counter = 1;
for (let i = 0; i < someString.length; i++) {
    if (someString[i] === " ") {
        counter++;
    }
}
console.log(counter);
