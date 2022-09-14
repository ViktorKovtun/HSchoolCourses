let firstNumber = +prompt("Enter the first number:");
let secondNumber = +prompt("Enter the second number:");
if (firstNumber > secondNumber) {
    console.log(`Max number is: ${firstNumber}`);
} else if (secondNumber > firstNumber) {
    console.log(`Max number is: ${secondNumber}`);
} else console.log(`First number = second number = ${firstNumber}`);


/*
let firstNumber = +prompt("Enter the first number:");
let secondNumber = +prompt("Enter the second number:");
console.log(Math.max(firstNumber,secondNumber));
*/