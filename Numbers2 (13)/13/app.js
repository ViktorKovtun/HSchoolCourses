let someAmount = prompt("Enter a number:").trim();

while (isNaN(someAmount) || someAmount == '' || someAmount.includes(" ") || someAmount < 1000 || someAmount > 9999) {
    someAmount = prompt("Incorrect number. Try again:").trim();
}

for (let i = 0; i < someAmount.length; i++) {
    if (someAmount[i] % 2 === 0) {
        console.log(`${someAmount[i]} - even`);
    } else console.log(`${someAmount[i]} - odd`);
}
