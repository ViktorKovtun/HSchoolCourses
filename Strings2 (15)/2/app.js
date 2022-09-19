/* На вход подается строка из 2 и более слов. Необходимо добавить тире между 
словами */

let someString = prompt("Enter some string:").trim();

while (!(isNaN(someString)) || someString == "") {
    someString = prompt("Incorrect input. Try again:").trim();
}

console.log(someString.split(" ").join("-"));