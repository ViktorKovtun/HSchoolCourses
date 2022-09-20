let someData = prompt("Enter a string:");

if (isNaN(someData) || someData == '' || someData.includes(" ")) {
    (someData == "hschool") ? console.log(true) : console.log(false);
} else {
    (someData % 2 == 0) ? console.log("Even") : console.log("Odd");
}