let obj = {
    name: "Viktor",
    surname: "Kovtun",
    age: 20,
    height: 173,
    220125: "index",
    327: "flat",
}
for (let key in obj) {
    if (obj[key] % 2 === 0) {
        console.log(obj[key]);
    }
}
