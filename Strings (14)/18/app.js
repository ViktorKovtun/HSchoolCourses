/* Пользователь вводит строку. Необходимо вывести все гласные отдельной 
строкой (for)
fullstack => ua */

let someString = prompt("Enter a string:").toLowerCase().trim();

let resulltString = "";

for (let i = 0; i < someString.length; i++) {
    if (someString.charAt(i).charCodeAt() === 97 || someString.charAt(i).charCodeAt() === 101 || someString.charAt(i).charCodeAt() === 105 || someString.charAt(i).charCodeAt() === 111 ||
        someString.charAt(i).charCodeAt() === 117 || someString.charAt(i).charCodeAt() === 121) {
        resulltString = resulltString + someString.charAt(i);
    }
}

console.log(resulltString);