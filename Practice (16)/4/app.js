/* На вход программе подается строковое значение. Если значение больше 2-х и 
меньше 11-ти или больше или равна 26-ти и меньше 30-ти, то выведите 'Верно', в 
противном случае выведите 'Неверно'. */

let someNumer = prompt("Enter some number:").trim();

(someNumer > 2 && someNumer < 11 || someNumer >= 26 && someNumer < 30) ? console.log("Correct") : console.log("Incorrect");