let obj = {
    name: prompt("Enter you name:").trim(),
    surname: prompt("Enter you surname:").trim(),
    age: +prompt("Enter you age:").trim(),
    height: +prompt("Enter you height:").trim(),
    city: prompt("Enter you city").trim(),
}
let arr = [];
for (let key in obj) {
    if (!isNaN(obj[key]) && obj[key] != '') {
        arr.push(obj[key]);
    }
}
console.log(arr);
