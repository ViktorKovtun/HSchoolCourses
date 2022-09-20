let amount = +prompt("Enter an amount:");
if (Math.sqrt(amount) % Math.sqrt(amount).toFixed(0) === 0) {
    console.log("The result is:", Math.sqrt(amount));
} else console.log("The result is:", Math.sqrt(amount).toFixed(2));
