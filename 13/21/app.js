let someData = prompt("Enter a string:").trim().toLowerCase();

while (!(isNaN(someData) || someData == '' || someData.includes(" "))) {
    someData = prompt("It's not a string. Try again:").trim().toLowerCase();
}

let arr = someData.split("");

let newData = arr.join("-");

console.log(newData);