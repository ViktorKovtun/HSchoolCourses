let someAmount = prompt("Enter a number:").trim();

while (isNaN(someAmount) || someAmount == '' || someAmount.includes(" ") || someAmount < 0) {
    someAmount = prompt("Incorrect number. Try again:").trim();
}

console.log(Math.trunc(someAmount / 100));