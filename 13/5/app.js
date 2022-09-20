let someNumber = prompt("Enter a number").trim();
while (isNaN(someNumber) || someNumber == '' || someNumber.includes(" ")) {
    someNumber = prompt("Incorrect number. Try again:").trim();
}
(someNumber > 0) ? console.log(`Number ${someNumber} is > 0. Consists of ${someNumber.length} number(s)`) :
    (someNumber < 0) ? console.log(`Number ${someNumber} is > 0. Consists of ${someNumber.length} number(s)`) :
        console.log(`Number ${someNumber} is = 0. Consists of ${someNumber.length} number(s)`);