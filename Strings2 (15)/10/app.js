/* На вход подается число произвольной длины. Необходимо обратиться к каждому 
значению числа и выявить четность/нечетность 
1234 -> 1 неч 2 чет 3 неч 4 чет
7 -> 7 – неч
444444 -> 4 чет 4 чет 4 чет 4 чет 4 чет 4 чет */

let someNumber = prompt("Enter a number:").trim();

while (isNaN(someNumber) || someNumber.includes(" ") || someNumber == "") {
    someNumber = prompt("Incorrect input. Try again:").trim();
}

for (let i = 0; i < someNumber.length; i++) {
    if (someNumber[i] % 2 === 0) {
        console.log(`${someNumber[i]} - Even`);
    } else console.log(`${someNumber[i]} - Odd`);
}