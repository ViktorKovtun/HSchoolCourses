//reduce

let arr = [];
let mult = 1;

let n = prompt("Enter an amount of elements:");

while (isNaN(n) || n <= 0 || n == '') {
    n = prompt("Incorrect amount. Try again:");
}

for (let i = 0; i < n; i++) {
    let someData = prompt("Emter an element of array:");
    if (!(isNaN(someData)) || someData != '' || !someData.includes(' ')) {
        arr.push(someData);
    }
}

let result = arr.reduce((mult, elem) => {
    return mult * elem;
});
console.log(result);

/* forEach

let arr = [];

let n = prompt("Enter an amount of elements:");

while (isNaN(n) || n <= 0 || n == '') {
    n = prompt("Incorrect amount. Try again:");
}

for (let i = 0; i < n; i++) {
    let someData = prompt("Emter an element of array:");
    if (!(isNaN(someData)) || someData != '' || !someData.includes(' ')) {
        arr.push(someData);
    }
}

let mult = 1;

arr.forEach(elem =>{
mult = mult * elem;
});

console.log(mult);
*/

