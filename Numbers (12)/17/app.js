let a = +prompt("Enter the first number:");
let b = +prompt("Enter the second number:");
if (a % b === 0) {
    console.log("Is Divisible. The result is:", a / b);
} else console.log("Is Divisible with a remainder. The remainder is:", a % b)