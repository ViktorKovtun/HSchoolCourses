let arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(prompt("Enter an element of array:"));
}
let result = arr.filter(elem => {
    if (!isNaN(elem)) return elem;
});
(result.length === 0) ? console.log("Empty array") : console.log(result);