let amount = +prompt("Enter an amoumt:");
if (Math.sqrt(amount) % Math.sqrt(amount).toFixed(0) === 0) {
    console.log(Math.sqrt(amount));
} else console.log(Math.sqrt(amount).toFixed(2));