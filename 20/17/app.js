let arr = [];
let arr2 = [];
let arr3 = [];

let n = prompt("Enter an amount of elements:");

while (isNaN(n) || n <= 0 || n == '') {
    n = prompt("Incorrect amount. Try again:");
}

for (let i = 0; i < n; i++) {
    arr.push(prompt("Enter an element of array:"));
}

arr.forEach(elem => {
    if (!(isNaN(elem) || elem == '' || elem.includes(" "))) {
        arr2.push(+elem);
    } else if (elem != '') {
        arr3.push(elem);
    }
})
console.log(arr2);
console.log(arr3);