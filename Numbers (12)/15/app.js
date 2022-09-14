let amount = +prompt("Enter a amount:");
(amount > 0 && amount <= 18) ?
    console.log("Childhood") :
    (amount >= 19 && amount <= 40) ?
        console.log("Youth") :
        (amount >= 41 && amount <= 100) ?
            console.log("Old age") : console.log("Incorrect input");