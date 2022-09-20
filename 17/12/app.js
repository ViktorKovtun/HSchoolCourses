/* На вход программе подается натуральное число n. Напишите программу, которая 
печатает звездный треугольник.
7 -> *******
******
*****
****
***
**
*/

let someNumber = +prompt("Enter a number");

for (let i = someNumber; i >= 1; i--) {
    console.log("*".repeat(i));
}