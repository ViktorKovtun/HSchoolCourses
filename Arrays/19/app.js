let arr = [];

let n = prompt("Enter an amount of elements:");

while (isNaN(n) || n <= 0 || n == '') {
    n = prompt("Incorrect amount. Try again:");
}

for (let i = 0; i < n; i++) {
    let someData = prompt("Enter an element of array:");
    while (isNaN(someData) || someData == '' || someData.includes(" ")) {
        someData = prompt("Incorrect input. Try again:");
    }
    arr.push(+someData);
}

let sum = 0;

for (elem of arr) {
    if (elem !== 0) {
        sum += elem;
    } else break;
}
console.log(sum);