let arr = [];

let n = prompt("Enter an amount of elements:");

while (isNaN(n) || n <= 0 || n == '') {
    n = prompt("Incorrect amount. Try again:");
}

for (let i = 0; i < n; i++) {
    arr.push(prompt("Emter an element of array:"));
}

let result = arr.filter(elem => {
    if (elem.startsWith("a") || elem.startsWith("h")) {
        return true;
    } else return false;
});

console.log(result);