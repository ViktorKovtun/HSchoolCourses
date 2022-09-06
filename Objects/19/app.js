let arr = [
    { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 },
]
let obj = {
    "id": "test",
    "label": "Test",
    "category": "test",
    "priority": 1,
}
let checkCounter = 0;

for (let key in arr) {
    if (arr[key]["id"] === obj["id"]) {
        arr[key] = obj;
    } else checkCounter++;
}

(checkCounter === arr.length) ? console.log("No id match.") : console.log(arr);
