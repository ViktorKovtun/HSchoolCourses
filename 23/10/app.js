let someNumber = prompt("Enter a number:");

while (isNaN(someNumber) || someNumber == '' || someNumber.includes(" ") || someNumber < 0) {
    someNumber = prompt("It's not a number. Try again:");
}

let mult = 1;

let someFunc = (elem => {
    for (let i = 1; i <= elem; i++) {
        mult = mult * i;
    }
    return mult;
})

someFunc(someNumber);