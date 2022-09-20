let arr = [];

let someAmount = prompt("Enter an amount of elements of array:");

let firstFunc = (amountOfElements => {
    for (let i = 0; i < amountOfElements; i++) {
        arr.push(prompt("Enter an element of your array:"));
    }
    return arr;
});

let secondFunc = (arr => arr.length);

firstFunc(someAmount);

secondFunc(arr);