// Syntax - Array.filter(callback) --> Here callback is the function that gets invoked for each item of the array
// let manufacturers: string[] = ["samsung", "motorola", "apple", "sony"];
// function filterManufacturerByLength(val: string) {
//     if (val.length > 5) {
//         return true;
//     }
// }
// let filtered_manufacturers: string[] = manufacturers.filter(filterManufacturerByLength);
// console.log(filtered_manufacturers);
// const mobilePriceArray: number[] = [25000, 15499, 27500, 18799];
// const filteredPriceArr =
//     mobilePriceArray.filter(
//         (number) => {
//             return number % 2 !== 0
//         });
// const incrementedPriceArr =
//     filteredPriceArr.map( (number) => {
//         return number + 400
//     });
// console.log(incrementedPriceArr); // => [15899,19199]
//Instead of creating two different variables and performing the operations, 
//we can use Chaining of Array functions to achieve the same result as shown below
var mobilePriceArray = [25000, 15499, 27500, 18799];
var incrementedPriceArr = mobilePriceArray.filter(function (number) {
    return number % 2 !== 0;
}).map(function (number) {
    return number + 400;
});
console.log(incrementedPriceArr); // => [15899,19199]
