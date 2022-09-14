let someNumber = prompt("Enter a number of month:").trim();
switch (+someNumber) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Incorrect number of month.");
        break;
}


/*
let someNumber = +prompt("Enter a number of month:");

(someNumber === 12 || someNumber === 1 || someNumber === 2) ? console.log("Winter"):
(someNumber === 3 || someNumber === 4 || someNumber === 5) ? console.log("Spring"):
(someNumber === 6 || someNumber === 7 || someNumber === 8) ? console.log("Summer"):
(someNumber === 9 || someNumber === 10 || someNumber === 11) ? console.log("Autumn"):console.log("Incorrect number of month");
*/