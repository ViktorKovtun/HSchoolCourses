/* На вход программе подается переменная date, в котрой лежит дата в формате 
'xxxx-xx-xx'. Преобразуйте эту дату в формат 'xx/xx/xxxx’. (reverse) */

let date = prompt("Enter a date in a `xxxx-xx-xx` format");
console.log(date.split("-").reverse().join("/"));