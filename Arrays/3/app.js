let arr = [];
let n = +prompt("Enter an amount of elements:");
for (let i = 0; i < n; i++) {
    let someData = prompt("Enter an element:");
    if (!(isNaN(someData) || arr.includes(someData))) {
        arr.push(someData);
    }
}
(arr.length === 0) ? console.log("Empty array") : console.log(arr);