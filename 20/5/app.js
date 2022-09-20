let arr = [];
let arr2 = [];
for (let i = 0; i < 10; i++) {
    let someData = prompt("Enter some data:");
    if (i < 5) {
        arr.push(someData);
    } else arr2.push(someData);
}

let counter = 0;
arr.forEach(elem => {
    if (arr2.includes(elem)) {
        counter += 1;
    }
});

console.log("Array 1:", arr);
console.log("Array 2:", arr2);

(counter === 5 && arr.length === arr2.length) ? console.log(true) : console.log(false);