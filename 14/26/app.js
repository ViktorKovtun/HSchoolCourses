/* На вход программе подается строка текста. Напишите программу, которая 
проверяет, что строка заканчивается подстрокой .com или .ru. Если 
заканчивается, то вывести true, в противном случае false */

let someUrl = prompt("Enter some url:").trim();

if (someUrl.endsWith(".com") || someUrl.endsWith(".ru")) {
    console.log(true);
} else console.log(false);