/* Дана строка 'aaa bbb ccc'.Вырежите из нее слово 'bbb' тремя разными способами */

let someString = prompt("Enter some string:").trim();

let firstIndex = someString.indexOf("b");
let lastIndex = someString.lastIndexOf("b");

console.log(someString.slice(firstIndex, lastIndex + 1));
console.log(someString.substr(firstIndex, 3));
console.log(someString.substring(firstIndex, lastIndex + 1));