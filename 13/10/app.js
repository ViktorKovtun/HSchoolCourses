let someAmount = prompt("Enter a number:").trim();

while (isNaN(someAmount) || someAmount == '' || someAmount.includes(" ")) {
    someAmount = prompt("Incorrect number. Try again:").trim();
}

if (!(someAmount == 0)) {
    console.log(1 / someAmount);
} else console.log("There is no reverse number.");

