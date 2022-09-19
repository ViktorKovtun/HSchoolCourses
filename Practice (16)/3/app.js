/* Напишите скрипт, который будет находить факториал числа. Факториал – это 
произведение всех целых чисел, меньше данного, и его самого.
5 -> 1*2*3*4*5 */

let someNumber = +prompt("Enter a number:");

if (someNumber >= 0) {
    let mult = 1;

    for (let i = someNumber; i > 0; i--) {
        mult = mult * i;
    }

    console.log(mult);
} else console.log("Incorrect number (has to be >= 0");

