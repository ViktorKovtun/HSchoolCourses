/* Пользователь вводит строку. Необходимо посчитать количество гласных (for) */

let someString = prompt("Enter a string:").toLowerCase().trim();

let counter = 0;

for (let i = 0; i < someString.length; i++) {
    if (someString.charAt(i).charCodeAt() === 97 || someString.charAt(i).charCodeAt() === 101 || someString.charAt(i).charCodeAt() === 105 || someString.charAt(i).charCodeAt() === 111 ||
        someString.charAt(i).charCodeAt() === 117 || someString.charAt(i).charCodeAt() === 121) {
        counter++;
    }
}

console.log(counter);