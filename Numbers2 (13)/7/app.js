let firstSpeed = prompt("Enter a speed of the first car (km per hour):").trim();

while (isNaN(firstSpeed) || firstSpeed == '' || firstSpeed.includes(" ")) {
    firstSpeed = prompt("Incorrect speed. Try again (km per hour):").trim();
}

let secondSpeed = prompt("Enter a speed of the second car (km per hour):");

while (isNaN(secondSpeed) || secondSpeed == '' || secondSpeed.includes(" ")) {
    secondSpeed = prompt("Incorrect speed. Try again (km per hour):").trim();
}

let distance = prompt("Enter a distance (km):");

while (isNaN(distance) || distance == '' || distance.includes(" ")) {
    distance = prompt("Incorrect distance. Try again (km):").trim();
}

let time = (+firstSpeed + +secondSpeed) / +distance;
console.log(`${time} hour(s)`);