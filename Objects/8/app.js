let obj = {
    name: "Viktor",
    surname: "Kovtun",
    age: 20,
    height: 173,
    220125: "index",
    327: "flat",
}
let counter = 0;
for (let key in obj) {
    counter++;
}
console.log(counter);
