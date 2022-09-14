let someNumber = prompt("Enter some number:").trim();
while (isNaN(someNumber) || someNumber == '' || someNumber.includes(" ")) {
    someNumber = prompt("Incorrect number. Try again:").trim();
}
console.log(someNumber);