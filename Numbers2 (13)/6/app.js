let someNumber = prompt("Enter some number:");
while (isNaN(someNumber) || someNumber == '' || someNumber.includes(" ")) {
    someNumber = prompt("Incorrect number. Try again:").trim();
}
if (Math.sqrt(+someNumber) % (+someNumber).toFixed(0) === 0) {
    console.log(Math.sqrt(+someNumber));
} else console.log(Math.sqrt(+someNumber).toFixed(0) + " Full square root: " + Math.sqrt(+someNumber));