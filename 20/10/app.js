let arr = [];

let n = prompt("Enter an amount of elements:");

while (isNaN(n) || n <= 0 || n == '') {
    n = prompt("Incorrect amount. Try again:");
}

for (let i = 0; i < n; i++) {
    let someData = prompt("Enter a number:");
    if (!isNaN(someData)) arr.push(someData);
}

let result = arr.map(elem => {
    if (elem % 2 == 0) {
        return "чёт";
    } else return "нечёт";
});
console.log(result);