// Syntax:-  Array.find(callback)
console.log("====== Simple find() example =========");
let manufacturers: string[] = ["apple", "sony","motorola","samsung"];
function findManufacturer(manufacturer: string) {
    if (manufacturer.length > 5) {
        return true;
    }
}
let foundManufacturer: string |undefined = manufacturers.find(findManufacturer);
console.log(foundManufacturer);
