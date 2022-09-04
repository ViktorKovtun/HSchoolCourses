let arr = [];

let n = prompt("Enter an amount of elements:");

while (isNaN(n) || n <= 0 || n == '') {
    n = prompt("Incorrect amount. Try again:");
}

for (let i = 0; i < n; i++) {
    arr.push(prompt("Enter an element of array:"));
}

let result = arr.filter(elem => {
    return elem > 0;
});

(result.length === 0) ? console.log("Empty array.") : console.log(result);