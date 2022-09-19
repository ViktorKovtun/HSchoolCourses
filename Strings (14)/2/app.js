/*Ввести строку. Проверить является ли это число или строка. Если число, то 
выяснить, четное или нет. Если это строка то преобразовать строку в массив, где 
каждый символ – один элемент массива
‘hschool’ => [‘h’, ‘s’, ‘c’, ‘h’, ‘o’, ‘o’, ‘l’]*/

let someString = prompt("Enter some string:").trim();

if (isNaN(someString) || someString === "") {
    console.log(someString.split(""));
} else {
    (someString % 2 == 0) ? console.log(`${someString} is Even.`) : console.log(`${someString} is Odd.`);
}