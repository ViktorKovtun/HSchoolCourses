let arr = [];
let arr2 = [];

for (let i = 0; i < 7; i++) {
    let someData = prompt("Enter some data:");
    if (i < 5) {
        arr.push(someData);
    } else arr2.push(someData);
}
let result = [];
arr.forEach(elem => {
    if (!arr2.includes(elem) && !isNaN(elem)) {
        result.push(elem);
    }
});

(result.length === 0) ? console.log("Array is empty") : console.log(result);