/*  На вход подается число. Необходимо вывести все числа от 1 до введенного числа 
кратные 3. */

let someNumber = +prompt("Enter a number:");

for (let i = 1; i <= someNumber; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}