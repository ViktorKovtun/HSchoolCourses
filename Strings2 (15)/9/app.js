/* На вход подается строка из нескольких строк. Необходимо преобразовать слово в 
хештег. Добавить проверку на ввод текстовых значений
hSСhOol СomPAnY-> #hschoolcompany */

let someString = prompt("Enter some string:").trim().toLowerCase();

while (!(isNaN(someString)) || someString == "") {
    someString = prompt("Incorrect input. Try again:").trim().toLowerCase();
}

someString = someString.replaceAll(" ", "");

console.log(`#${someString}`);