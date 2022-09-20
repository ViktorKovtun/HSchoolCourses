let someAmount = prompt("Enter an amount of elements of your array:");
let arr = [];
for (let i = 0; i < someAmount; i++) {
    arr.push(prompt("Enter some data of your array:"));
}
let someFunc = (arr => {
    let result = arr.every(elem => {
        if (!(isNaN(elem) || elem == "" || elem.includes(" "))) {
            return true;
        } else return false;
    })
    return result;
});
someFunc(arr);