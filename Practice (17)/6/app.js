/* На вход подается строка в виде электронной почты. Если строка содержит “@” и 
оканчивается на .com, .ru, то вывести true, иначе false */

let someEmail = prompt("Enter an email:").trim();

(someEmail.includes("@") && (someEmail.endsWith(".com") || someEmail.endsWith(".ru"))) ? console.log(true) : console.log(false);