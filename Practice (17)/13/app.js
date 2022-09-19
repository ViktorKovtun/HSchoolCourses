/* Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в 
противном случае false
anna -> true
мем -> true
тест -> false */

let someWord = prompt("Enter a word:").trim();

let counter = 0;

for (let i = 0; i < someWord.length; i++) {
    if (someWord[i] === someWord[someWord.length - (i + 1)]) {
        counter++;
    }
}

(counter === someWord.length) ? console.log(true) : console.log(false);
