let someString = prompt("Enter a word:").trim().toLowerCase();

let someFunc = (str => {
    for (let i = 0; i < str.length; i++) {
        let firstWord = str[0].split("").sort().join("");
        if (str[i].split("").sort().join("") == firstWord) {
            return true;
        } else return false;
    }
})
someFunc(someString);