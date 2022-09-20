/* На вход подается строка '/home/user/dir/file.txt'. Необходимо вернуть имя файла 
(подстрока после последнего символа “/" ) из полного пути к файлу('file.txt') */

let someString = prompt("Enter a path:").trim();

console.log(someString.slice(someString.lastIndexOf("/") + 1));