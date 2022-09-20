/* На вход программе подается строка, где каждое слово заканчивается “_”. 
Программа должна убрать “_” и первую букву каждого слова (помимо первого), 
преобразовать в верхний регистр (for) */

let someString = prompt("Enter some string with every word ending with '_':").trim();

let resultString = "";

for (let i = 0; i < someString.length; i++) {
    if (!(someString[i] === "_")) {
        (someString[i - 1] === " ") ? resultString = resultString + someString[i].toUpperCase() : resultString = resultString + someString[i];
    }
}

console.log(resultString);