/* На вход программе подается строка. Преобразуйте первую букву каждого слова 
строки в верхний регистр (for) */

let someString = prompt("Enter a string:").trim();

let resultString = someString[0].toUpperCase();

for (let i = 1; i < someString.length; i++) {
    if (someString[i - 1] === " ") {
        resultString = resultString + someString[i].toUpperCase();
    } else resultString = resultString + someString[i];
}

console.log(resultString);