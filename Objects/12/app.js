let obj = {}
let arr = [];
let n = +prompt('Enter an amount of elements:');
for (let i = 0; i < n; i++) {
    let someData = +prompt("Enter an element:");
    if (!isNaN(someData)) {
        arr.push(someData);
    }
}
let result = arr.reduce((sum, elem) => {
    return sum + elem;
})
obj.sum = result;
console.log(obj);