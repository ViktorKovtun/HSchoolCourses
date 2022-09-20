let name = prompt("Enter your name:").trim();
let surname = prompt("Enter your surname:").trim();
let someFunc = (name, surname) => console.log(`Hi, ${name} ${surname}!`);
someFunc(name, surname);