let a = +prompt("Enter the first number (a):");
let b = +prompt("Enter the second number (b):");
let c = +prompt("Enter the third number (c):");
let discriminant = Math.pow(b, 2) - 4 * a * c;
console.log(discriminant);
if (discriminant < 0) {
    console.log("There are no any roots of the equation");
} else if (discriminant > 0) {
    let answer1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let answer2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    if (answer1 > answer2) {
        console.log(answer2, answer1)
    } else console.log(answer1, answer2);
} else {
    let answer = -b / (2 * a);
    console.log(answer);
}
