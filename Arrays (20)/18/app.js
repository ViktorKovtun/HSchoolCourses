let arr = [];

let n = prompt("Enter an amount of elements:");

while (isNaN(n) || n <= 0 || n == '') {
    n = prompt("Incorrect amount. Try again:");
}

for (let i = 0; i < n; i++) {
    arr.push(prompt("Enter an element of array:"));
}

let result = arr.map(elem => {
    if (!(isNaN(elem))) {
        return Math.pow(elem, 2);
    } else return 'Incorrect data';

})
console.log(result);