/* На вход подается url. Необходимо вывести содержимое url после протокола 
(http/https) 
https://www.instagram.com/hschool.official/ -> www.instagram.com/hschool.official/ */

let someUrl = prompt("Enter some url:").trim();

(someUrl.startsWith("https://")) ? console.log(someUrl.slice(8)) : console.log(someUrl.slice(7));