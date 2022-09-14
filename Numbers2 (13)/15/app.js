let someData = prompt("Enter a string:");

while (!(isNaN(someData) || someData == '' || someData.includes(" "))) {
    someData = prompt("It's not a string. Try again:");
}
console.log(someData.length);