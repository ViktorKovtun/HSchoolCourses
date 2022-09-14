let arr = [];
let arr2 = ['javascript', 'c#', 'c', 'java'];

let n = prompt("Enter an amount of elements:");

while (isNaN(n) || n <= 0 || n == '') {
    n = prompt("Incorrect amount. Try again:");
}

for (let i = 0; i < n; i++) {
    let someData = prompt("Enter an element of array:");
    if (isNaN(someData)) arr.push(someData);
}

let result = arr.filter((elem) => {
    for (let i = 0; i < arr2.length; i++) {
        if (elem.includes(arr2[i])) {
            return true;
        }
    }
});

console.log(result);