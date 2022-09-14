let someAmount = prompt("Enter a number:").trim();

while (isNaN(someAmount) || someAmount == '' || someAmount.includes(" ") || someAmount < 100 || someAmount > 999) {
    someAmount = prompt("Incorrect number. Try again:").trim();
}

let sot = Math.trunc(someAmount / 100);
let des = Math.trunc((someAmount - sot * 100) / 10);
let ed = Math.trunc(someAmount - sot * 100 - des * 10);

console.log("Sum =", sot + des + ed);
console.log("Mult =", sot * des * ed);