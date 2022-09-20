let obj = {};
let arr = [];
let n = +prompt('Enter an amount of elements:');
for (let i = 0; i < n; i++) {
    arr[i] = +(Math.random() * (10)).toFixed(0);
    if (arr[i] % 2 === 0) {
        obj[arr[i]] = true;
    } else obj[arr[i]] = false;
}
console.log(arr);
console.log(obj);
