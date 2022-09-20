/* На вход программе подается строка. Напишите программу, которая подсчитывает 
количество буквенных символов в нижнем регистре.
abcABCD12345 => 3 */

let someString = prompt("Enter some string:").trim();

let counter = 0;

for (let i = 0; i < someString.length; i++) {
    if (someString[i] === someString[i].toLowerCase()) {
        counter++;
    }
}

console.log(counter);