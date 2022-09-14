// reduce

let arr = [];
let n = prompt("Enter an amount of elements:");
while (isNaN(n) || n == '' || n.includes(' ')) {
    n = prompt("Incorrect input. Try again:");
}
for (let i = 0; i < n; i++) {
    let someData = prompt("Enter an element of array:");
    if (!(isNaN(someData) || someData == '' || someData.includes(' '))) {
        arr.push(+someData);
    }
}

let result = arr.reduce((sum, elem) => {
    return sum + elem;
}, 0);
console.log(result);

/*forEach

let arr = [];

let n = prompt("Enter an amount of elements:");

while (isNaN(n) || n == '' || n.includes(' ')) {
    n = prompt("Incorrect input. Try again:");
}

for (let i = 0; i < n; i++) {
    let someData = prompt("Enter an element of array:");
    if (!(isNaN(someData) || someData == '' || someData.includes(' '))) {
        arr.push(+someData);
    }
}

let sum = 0;
arr.forEach(elem =>{
    sum = sum +elem;
})
console.log(sum);
*/