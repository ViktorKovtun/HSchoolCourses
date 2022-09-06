let obj = {
    1: 1,
    2: 2,
    3: 2,
    4: 3,
    5: 4,
    6: 4,
    7: 4,
    8: 4,
    9: 5,
};
let arr = [];
let arr2 = [];
for (let key in obj) {
    if (!arr.includes(key) && !arr2.includes(obj[key])) {
        arr.push(key);
    }
    if (!arr2.includes(obj[key])) {
        arr2.push(obj[key]);
    }
}
obj = {};
for (let i = 0; i < arr2.length; i++) {
    obj[arr[i]] = arr2[i];
}
console.log(obj);