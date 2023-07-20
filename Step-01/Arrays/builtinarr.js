var manufacturers = [
    { "id": "Samsung", "checked": false },
    { "id": "Motorola", "checked": false },
    { "id": "Apple", "checked": false },
    { "id": "Sony", "checked": false }
];
console.log("1. Displaying a message using forEach():");
function display() {
    console.log("Products to display...");
}
manufacturers.forEach(display);
console.log("2. Available Products using: forEach() array function:");
manufacturers.forEach(function (manufacturer) {
    console.log(manufacturer);
});
manufacturers = ["samsung", "motorola", "apple", "sony"];
console.log("====== Simple map() example =========");
function display_uppercase(manufacturer) {
    return manufacturer.toUpperCase();
}
var manufacturers_uppercase = manufacturers.map(display_uppercase);
console.log(manufacturers_uppercase);
console.log("====== Simple filter() example =========");
function filterManufacturerByLength(val) {
    if (val.length > 5)
        return true;
}
var filtered_manufacturers = manufacturers.filter(filterManufacturerByLength);
console.log(filtered_manufacturers);
// console.log("====== Simple find() example =========");
// EXAMPLE TO DEMOSTRATE THE USE OF find() built in function ----> This code should be executed in IDE using --target es6 option
// function findManufacturer(manufacturer: string) {
//     if (manufacturer.length > 5)  return true;
// }
// let foundManufacturer: string = manufacturers.find(findManufacturer);
// console.log(foundManufacturer);
var subjects = ["Mathematics-70", "Science-67", "English-88", "Geography-62", "ComputerSc-55"];
function display_subject_uppercase(subject) {
    return subject.toUpperCase();
}
var subjects_uppercase = subjects.map(display_subject_uppercase);
console.log(subjects_uppercase);
var data = [
    "English-85",
    "Mathematics-70",
    "Science-95",
    "History-75",
];
// Custom sorting function
var scoreComparator = function (a, b) {
    if (a.subject < b.subject) {
        return -1;
    }
    if (a.subject > b.subject) {
        return 1;
    }
    return a.score - b.score;
};
// Extract and sort the data
var sortedData = subjects_uppercase
    .map(function (item) {
    var _a = item.split("-"), subject = _a[0], score = _a[1];
    return { subject: subject, score: parseInt(score, 10) };
})
    .sort(scoreComparator);
var joinedData = sortedData
    .map(function (_a) {
    var subject = _a.subject, score = _a.score;
    return "".concat(subject, "-").concat(score);
})
    .join(", ");
// Display the sorted data
console.log(joinedData);
