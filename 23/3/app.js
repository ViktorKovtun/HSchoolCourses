let arr = ["by", "belarus", "de", "ru", "germany"];
let someFunc = (arr) => {
    let result = arr.filter(elem => {
        if (elem.length <= 2) {
            return true;
        } else return false;
    });
    return result;
}
someFunc(arr);
