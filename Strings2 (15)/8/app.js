/* На вход подается 1 слово. Необходимо преобразовать слово в хештег. Добавить 
проверку на ввод текстовых значений
hSСhOol -> #hschool */

let someWord = prompt("Enter a word:").trim().toLowerCase();

console.log(`#${someWord}`);