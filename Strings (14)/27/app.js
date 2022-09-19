/* На вход подается url. Если он начинается с http, содержит хотя бы один “/” и 
заканчивается подстрокой .com или .ru, то вывести true, в противном случае false */

let someUrl = prompt("Enter some url:").trim();

if (someUrl.startsWith("http") && someUrl.includes("/") && (someUrl.endsWith(".com") || someUrl.endsWith(".ru"))) {
    console.log(true);
} else console.log(false);