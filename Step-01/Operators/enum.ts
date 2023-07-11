// MobilePrice is an enum that stores the price values of different variants of a mobile
enum MobilePrice{Black=25000,Gold=28000,White=30000};

// function to calculate the price after applying the discount
function calculateAmount(price:number):number{
    let discount: number;
    let totalAmount: number;
if(price==MobilePrice.Gold)
      discount=5;
else if(price==MobilePrice.White)
  discount=8;
else
    discount = 10;
totalAmount =price-price * discount / 100;
return totalAmount;
}

// displays the price of black variant of mobile without discount
console.log("Actual price of the Mobile is " + MobilePrice.Black);

// displays the price of black variant of mobile with discount
console.log("The final price after discount is "+calculateAmount(MobilePrice.Black));

//enum Excercise
enum months {
    January, Febraury, March, April, May, June, July, August, September, Octobar, November, December
}

function perdiction(month:string):string{
    let output = "";
if(month.toString() == months.March.toString() || month.toString() == months.April.toString() || month.toString() == months.May.toString() )
{
    output = "Yes! It is spring!  - Month is "+month;
}
else if(month.toString() == months.June.toString() || month.toString() == months.July.toString() || month.toString() == months.August.toString()) {
 output = "It's summer, who wants ice cream?!  - Month is "+month;
}
else if(month.toString() == months.September.toString() || month.toString() == months.Octobar.toString() || month.toString()  == months.November.toString()){
    output = "I am enjoying autumn, aren't you?  - Month is "+month;
}
else {
    output = "It is very cold outside! It's winter - Month is "+month;
}
return output;
}

let result = perdiction("April");
console.log(result)