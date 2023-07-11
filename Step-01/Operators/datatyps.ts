//DECLARING VARIABLES USING let Keyword

//Declaring a numeric variable
let productId: number = 1045;

// productId="AS132"; ====> This throws an error as data type for productId has been explicitly mentioned as number

// displays the type of variable productId as number
console.log("The type of productId is " + typeof productId);

//Declaring a string variable
let productName: string = "Samsung Galaxy J7";
// displays the type of variable productId as string
console.log("The type of productName is " + typeof productName);

//Declaring a boolean variable
let productAvailable: boolean = true;
// displays the type of variable productId as boolean
console.log("The type of productAvailable is " + typeof productAvailable);

//DECLARING VARIABLES USING const Keyword

const discountPercentage: number = 15;
// discountPercentage=20 =====>throws error saying Cannot assign to 'discountPercentage' because it is a constant
console.log("Discount percentage is:" + discountPercentage);

// defining an array using const Keyword
const productNameArray = ["Apple", "Sony", "Samsung", "LG"];
// productNameArray = ['Nokia','Motorolla'] =====> throws error saying Cannot assign to 'productNameArray' because it is a constant
console.log(productNameArray); // Apple,Sony,Samsung,LG

productNameArray[1] = "Nokia";
console.log(productNameArray); // Apple,Nokia,Samsung,LG

// productNameArray[2] = 123; ====> throws an error Type '123' is not assignable to type 'string'

// TO avoid this error we have to explicitly mention the type of productNameArray as "any"
// Here a new array has been created so as to observe the difference in declaring the array with and without mentioning the type
const productArray: any = ["Apple", "Sony", "Samsung", "LG"];
productArray[2] = 123;
console.log(productArray); // Apple,Sony,123,LG
