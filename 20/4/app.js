// for

let arr = [];

for (; ;) {
    let someData = prompt("Enter an element:");
    if (!(isNaN(someData) || someData == '' || someData.includes(" "))) {
        arr.push(+someData);
    } else alert("Incorrect data. Try again.");
    if (arr.length === 5) break;
}
console.log(arr);


/*while 

let arr = [];

while (1) {
    let someData = prompt("Enter an element:");
    if (!(isNaN(someData) || someData == '' || someData.includes(" "))) {
        arr.push(+someData);
    } else alert("Incorrect data. Try again.");
    if (arr.length === 5) break;
}
console.log(arr);

*/