// // Creating an array of strings
// let manufacturers: string[] = ["Samsung", "Apple", "Sony"]
// // Adding values into an array using push() method
// manufacturers.push("Motorola"); // Adds the elements at the end of array
// // Adding multiple elements to an array using push() method
// manufacturers.push("Panansonic", "LG")
// //["Samsung", "Apple", "Sony","Motorola""Panansonic", "LG"]
// // Adding elements at a specific index
// manufacturers[4] = "Micromax";
// // Removing Elements from an Array using pop() method
// manufacturers.pop(); // removes the Last element from the array
// // Use Of splice method:
// // Removing a specified number of elements from the specified postion and adding elements in its place
// manufacturers.splice(2, 1, "Google", "Videocon")
// // adding elements at a specified index without removing any element
// manufacturers.splice(3, 0, "iBall") // This adds 'iBall' at the 3rd index and shifts the other elements by one index position
// console.log(manufacturers); // displays the final list of manufacturers
// Excerices
function getCars() {
    var carList = ["Aston Martin", "BMW", "Ford", "Honda", "Volvo", "Toyota", "Nissan"];
    return carList;
}
function displayCars(carlist) {
    /* Display the list of cars */
    console.log("Available Cars:");
    for (var i = 0; i < carlist.length; i++) {
        console.log((i + 1) + ". " + carlist[i]);
    }
}
function addCars(carList, carName) {
    /* Add car to the last position in the list */
    /*  carList - The list of cars
        carName - Car that is to be added */
    carList.push(carName);
    console.log(carList);
}
function removeCar(carList) {
    /* Remove car from the last position in the list */
    carList.pop();
}
var addCarAtIndex = function (carList, carName, pos) {
    /* Add car to the specified position in the list */
    /*  pos - specifies the position in the list */
    carList.splice(pos, 0, carName);
};
var removeCarFromIndex = function (carList, pos, noToRemove) {
    /* Remove car from the  specified position in the list */
    /* noToRemove - specifies the number of cars that needs to be removed
        from the specified position */
    carList.splice(pos, noToRemove);
};
var carlist = getCars();
displayCars(carlist);
addCars(carlist, "Hyundai");
displayCars(carlist);
addCarAtIndex(carlist, "Lamborgini", 3);
displayCars(carlist);
removeCarFromIndex(carlist, 4, 1);
displayCars(carlist);
