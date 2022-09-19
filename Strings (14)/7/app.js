/* На вход программе подаётся строка. Замените все @ на '!' с помощью 
глобального поиска и замены (2 способа) */

let someString = prompt("Enter some string:").trim();
console.log(someString.replaceAll("@", "!"));