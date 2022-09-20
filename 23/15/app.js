let arr = [];
let result;

let someAmount = prompt("Enter an amount of elements of array:");

let firstFunc = (amountOfElements => {
    for (let i = 0; i < amountOfElements; i++) {
        arr.push(prompt("Enter an element of your array:"));
    }
    return arr;
});

let secondFunc = (arr => {
    result = arr.every(elem => {
        if (!(isNaN(elem) || elem == "" || elem.includes(" "))) {
            return true;
        } else return false;
    })
    return result;
});

let thirdFunc = (arr => {
    let finalResult = arr.filter(elem => elem % 2 == 0);
    finalResult = finalResult.map(elem => Math.pow(+elem, 2));
    return finalResult;
})

firstFunc(someAmount);
secondFunc(arr);
thirdFunc(arr);