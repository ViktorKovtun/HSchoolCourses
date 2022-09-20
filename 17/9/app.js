/* На вход программе подается натуральное число n. Напишите программу, которая 
печатает звездный прямоугольник размерами n×10 несколькими способами.
2 -> **********
********** */

let someNumber = +prompt("Enter a number");
let someString = "**********\n";

someString = someString.repeat(someNumber);

console.log(someString);
console.log("\n");

someString = "**********\n";

for (let i = 0; i < someNumber - 1; i++) {
    someString = someString + "**********\n";
}


console.log(someString);
