let someString = prompt("Enter a string:").trim();
let someFunc = (str) => {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    str = arr.join(" ");
    return str;
}
someFunc(someString);