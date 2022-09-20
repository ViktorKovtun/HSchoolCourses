let firstAmount = prompt("Enter a number:").trim();

while (isNaN(firstAmount) || firstAmount == '' || firstAmount.includes(" ") || firstAmount > 10 || firstAmount < 0) {
    firstAmount = prompt("Incorrect number. Try again:").trim();
}

let secondAmount = prompt("Enter a number:").trim();

while (isNaN(secondAmount) || secondAmount == '' || secondAmount.includes(" ") || secondAmount > 10 || secondAmount < 0) {
    secondAmount = prompt("Incorrect number. Try again:").trim();
}

(firstAmount == 0) ? console.log(`I'm ${secondAmount}`) : console.log(`I'm ${firstAmount}${secondAmount}`);