/* Задача на анаграмму. На входе 2 строки, необходимо выявить являются ли 
введенные значения анаграммами */

let firstWord = prompt("Enter the first word:").trim();
let secondWord = prompt("Enter the second word:").trim();
let counter = 0;

for (let i = 0; i < firstWord.length; i++) {
    if (firstWord.includes(secondWord[i])) {
        counter++;
    }
}

if (counter === firstWord.length && counter === secondWord.length) {
    console.log("Anagram");
} else console.log("Not an anagram");