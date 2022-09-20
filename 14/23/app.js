/* На вход программе подается строка текста. Напишите программу, которая 
определяет является ли строка хорошей. Текст хороший, если содержит 
подстроку «хорош» во всевозможных регистрах.
я очень хороший текст => true */

let someString = prompt("Enter some string:").trim().toLowerCase();

if (someString.includes("хорош")) {
    console.log(true);
} else console.log(false);