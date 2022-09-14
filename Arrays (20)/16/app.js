let arr = [];
let arr2 = [];

let amountOfElements = +prompt("Enter an amount of elements:");

while (isNaN(amountOfElements) || amountOfElements <= 0 || amountOfElements == '') {
    amountOfElements = +prompt("Incorrect amount. Try again:");
}

for (let i = 0; i < amountOfElements; i++) {
    let someData = +prompt("Enter an element of array;");
    if (!isNaN(someData)) {
        arr.push(someData);
    }
}

let n = +prompt("Enter a number:");

while (isNaN(n) || n <= 0 || n == '' || n > arr.length) {
    n = +prompt("Incorrect number. Try again:");
}

if (amountOfElements / n === 1) {
    arr2.push(arr);
} else if (amountOfElements / n === amountOfElements) {
    for (let i = 0; i < arr.length; i++) {
        let el = arr.slice(i, i + 1);
        arr2.push([el]);
    }
} else {
    let el = arr.slice(0, n);
    let el2 = arr.slice(n, amountOfElements);
    arr2.push([el]);
    arr2.push([el2]);
}
console.log(arr2);