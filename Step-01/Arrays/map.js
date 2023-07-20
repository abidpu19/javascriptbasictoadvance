// syntax: - Array.map(callback) callback is the function that gets invoked for each item of the array
console.log("====== Simple map() example =========");
var manufacturers = ["samsung", "motorola", "apple", "sony"];
function display_uppercase(manufacturer) {
    return manufacturer.toUpperCase();
}
var manufacturers_uppercase = manufacturers.map(display_uppercase);
console.log(manufacturers_uppercase);
