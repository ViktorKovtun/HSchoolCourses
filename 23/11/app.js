let someString = prompt("Enter a word:").trim().toLowerCase();

let str1 = "";
let str2 = "";

let someFunc = (str => {
    for (let i = 0; i < str.length; i++) {
        str1 = str1 + str[i];
    }
    for (let i = str.length - 1; i >= 0; i--) {
        str2 = str2 + str[i];
    }
    if (str1 === str2) {
        return true;
    } else return false;
})

someFunc(someString);
