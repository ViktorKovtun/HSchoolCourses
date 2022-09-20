/* На вход программе подается строка. Напишите программу, которая меняет 
регистр символов, другими словами замените все строчные символы заглавными 
и наоборот.
Swap Case => sWAP cASE */

let someString = prompt("Enter some string:").trim();

let resultString = "";

for (let i = 0; i < someString.length; i++) {
    if (someString.charAt(i) === someString.charAt(i).toLowerCase()) {
        resultString = resultString + someString.charAt(i).toUpperCase();
    } else resultString = resultString + someString.charAt(i).toLowerCase();
}

console.log(resultString);