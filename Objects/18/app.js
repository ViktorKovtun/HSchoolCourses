let arr = [
    { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 },
]
let obj = {
    "label": "Test",
    "category": "test",
    "priority": 1,
}

let counter = 0;

for (let key in arr) {
    if (obj["label"] != arr[key]["label"]) {
        counter++;
    }
}
if (counter === arr.length) {
    obj["id"] = obj["label"].toLowerCase();
    arr.push(obj);
}
console.log(arr);