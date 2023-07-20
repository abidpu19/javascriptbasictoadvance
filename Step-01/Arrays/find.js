// Syntax:-  Array.find(callback)
console.log("====== Simple find() example =========");
var manufacturers = ["apple", "sony", "motorola", "samsung"];
function findManufacturer(manufacturer) {
    if (manufacturer.length > 5) {
        return true;
    }
}
var foundManufacturer = manufacturers.find(findManufacturer);
console.log(foundManufacturer);
