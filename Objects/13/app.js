let obj = {}
let arr = [];
let n = +prompt('Enter an amount of elements:');
for (let i = 1; i <= n; i++) {
    arr[i] = Math.random() * (10);
    obj[i] = +arr[i].toFixed(0);
}
console.log(obj);