let someAmount = prompt("Enter an amount of elements of your array:");

let arr = [];
let result;

for (let i = 0; i < someAmount; i++) {
    arr.push(prompt("Enter some data of your array:"));
}

let firstFunc = (arr => {
    result = arr.every(elem => {
        if (!(isNaN(elem) || elem == "" || elem.includes(" "))) {
            return true;
        } else return false;
    })
    return result;
});

let secondFunc = (arr => {
    let max = -1000;
    for (let key of arr) {
        if (key > max) {
            max = key;
        }
    }
    return +max;
})

firstFunc(arr);

if (result == true) {
    secondFunc(arr);
} else console.log("Some element is incorrect.");