let someAmount = prompt("Enter an amount of elements of your array:");

let result;
let arr = [];

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
    let sum = arr.reduce((elem, sum) => {
        return +sum + +elem;
    }, 0);
    return sum;
})

firstFunc(arr);

if (result == true) {
    secondFunc(arr);
} else console.log("Some element is incorrect.");