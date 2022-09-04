//every

let arr = [];
let n = prompt("Enter an amount of elements:");
while (isNaN(n) || n <= 0 || n == '') {
    n = prompt("Incorrect amount. Try again:");
}

for (let i = 0; i < n; i++) {
    arr.push(prompt("Enter an element of array:"));
}
let result = arr.every(elem => {
    if (!(isNaN(elem) || elem == '' || elem.includes(" "))) {
        return true;
    } else return false;
})
console.log(result);

/*forEach

let arr = [] ;
let n = prompt("Enter an amount of elements:");
while (isNaN(n) || n <= 0 || n == '') {
    n = prompt("Incorrect amount. Try again:");
}

for (let i = 0; i < n; i++) {
    arr.push(prompt("Enter an element of array:"));
}
let counter = 0;
arr.forEach(elem =>{
    if (!(isNaN(elem) || elem == '' || elem.includes(" "))) {
        counter +=1;
    }
});
if (counter == n){
    console.log(true);
} else console.log(false);
*/