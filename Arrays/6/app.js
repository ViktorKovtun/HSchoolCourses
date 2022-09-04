//some

let arr = [];
let n = prompt("Enter an amount of elements:");
while (isNaN(n) || n <= 0 || n == '') {
    n = prompt("Incorrect amount. Try again:");
}
for (let i = 0; i < n; i++) {
    arr.push(prompt("Enter some data:"));
}
let check = arr.some(elem => {
    if (!isNaN(elem) && elem != '' && !(elem.includes(" "))) {
        return true;
    } else return false;
})
console.log(check);

/*forEach

let arr = [];
let counter = 0;
let n = prompt("Enter an amount of elements:");
while (isNaN(n) || n <= 0 || n == '') {
    n = prompt("Incorrect amount. Try again:");
}
for (let i = 0; i < n; i++) {
    arr.push(prompt("Enter some data:"));
}
arr.forEach(elem => {
    if (!isNaN(elem) && elem != '' && !(elem.includes(" "))) {
        counter+=1;
    }
})
if (counter >= 1) {
    console.log(true);
} else console.log(false);
*/