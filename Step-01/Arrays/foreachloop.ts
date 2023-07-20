let  manufacturers:any[] = [
    { "id": "Samsung", "checked": false },
    { "id": "Motorola", "checked": false },
    { "id": "Apple", "checked": false },
    { "id": "Sony", "checked": false }
];
console.log("1. Displaying a message using forEach():");
function display(){
    console.log("Products to display...");
}
manufacturers.forEach(display);
console.log("2. Available Products using: forEach() array function:");
manufacturers.forEach( function(manufacturer) {
    console.log(manufacturer);
});
