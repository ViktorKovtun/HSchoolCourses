let arr = [
    { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 },
]
let someID = prompt("Enter some ID to delete an object.");
let counter = 0;
let result = arr.filter(elem => {
    if (elem["id"] === someID) {
        return false;
    } else {
        counter++;
        return true;
    }
});
(counter === arr.length) ? console.log("No id match.") : console.log(result);