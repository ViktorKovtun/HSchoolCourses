let someAmount = prompt("Enter a number (1-4):").trim();

while (isNaN(someAmount) || someAmount == '' || someAmount.includes(" ") || someAmount > 4 || someAmount < 1) {
    someAmount = prompt("Incorrect number. Try again:").trim();
}
switch (someAmount) {
    case '1': {
        console.log("Winter");
        break;
    }
    case '2': {
        console.log("Spring");
        break;
    }
    case '3': {
        console.log("Summer");
        break;
    }
    case '4': {
        console.log("Autumn");
        break;
    }
    default: {
        console.log("Incorrect amount.");
        break;
    }
}