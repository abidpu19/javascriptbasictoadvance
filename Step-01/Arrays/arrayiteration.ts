
// declaring an array named manufacturers that stores the details (id and checked) of manufacturers  
let manufacturers: any[] = [{ "id": "Samsung", "checked": true },
{ "id": "Motorola", "checked": false },
{ "id": "Apple", "checked": true },
{ "id": "Sony", "checked": false }
];

// USE of for loop
console.log("1. Available Products using Simple for loop:");
// iterates over the manufacturers array to display the id of all the manufacturers
for (let index = 0; index < manufacturers.length; index++) {
    console.log("Index--> ", index, " object at the index-->", manufacturers[index], "id of the object at the index--> ", manufacturers[index].id);
}

// USE OF for...of loop
console.log("2. Available Products using: for...of loop:");
// iterates over the manufacturers array to display all the manufacturer details
for (let manufacturer of manufacturers) {
    console.log(manufacturer);
}