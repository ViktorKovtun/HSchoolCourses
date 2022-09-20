/*  На вход программе подается строка из букв А, Г, Ц, Т. Напишите программу, 
которая подсчитывает сколько букв
АааГГЦЦцТТтттА => А – 4 Г – 2 Ц – 3 Т – 5 */

let someString = prompt("Enter some string:").trim();

let aCounter = 0, gCounter = 0, cCounter = 0, tCounter = 0;

for (let i = 0; i < someString.length; i++) {
    if (someString.charAt(i).charCodeAt() === 1040 || someString.charAt(i).charCodeAt() === 1072) {
        aCounter++;
    } else if (someString.charAt(i).charCodeAt() === 1043 || someString.charAt(i).charCodeAt() === 1075) {
        gCounter++;

    } else if (someString.charAt(i).charCodeAt() === 1062 || someString.charAt(i).charCodeAt() === 1094) {
        cCounter++;
    } else if (someString.charAt(i).charCodeAt() === 1058 || someString.charAt(i).charCodeAt() === 1090) {
        tCounter++;
    }
}

console.log(`A - ${aCounter} Г - ${gCounter} Ц - ${cCounter} Т - ${tCounter}`);