// syntax: - Array.map(callback) callback is the function that gets invoked for each item of the array
console.log("====== Simple map() example =========");
let manufacturers:string[] = ["samsung","motorola","apple","sony"];
function display_uppercase(manufacturer:string) {
    return manufacturer.toUpperCase();
}
let manufacturers_uppercase:string[] = manufacturers.map(display_uppercase);
console.log(manufacturers_uppercase);
