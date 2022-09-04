//spread

let arr = [];
let arr2 = [];

for (let i = 0; i < 6; i++) {
    if (i < 3) {
        arr.push(prompt("Enter an element of array:"));
    } else arr2.push(prompt("Enter an element of array:"));
}

let result = [...arr, ...arr2];
console.log(result);


//TODO: ASK ANNA ABOUT REST

/*rest 

let arr = [];
let arr2 = [];

for (let i = 0; i < 6; i++) {
    if (i < 3) {
        arr.push(prompt("Enter an element of array:"));
    } else arr2.push(prompt("Enter an element of array:"));
}

let result = [...arr, ...arr2];
console.log(result);

*/