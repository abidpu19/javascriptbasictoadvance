// MobilePrice is an enum that stores the price values of different variants of a mobile
var MobilePrice;
(function (MobilePrice) {
    MobilePrice[MobilePrice["Black"] = 25000] = "Black";
    MobilePrice[MobilePrice["Gold"] = 28000] = "Gold";
    MobilePrice[MobilePrice["White"] = 30000] = "White";
})(MobilePrice || (MobilePrice = {}));
;
// function to calculate the price after applying the discount
function calculateAmount(price) {
    var discount;
    var totalAmount;
    if (price == MobilePrice.Gold)
        discount = 5;
    else if (price == MobilePrice.White)
        discount = 8;
    else
        discount = 10;
    totalAmount = price - price * discount / 100;
    return totalAmount;
}
// displays the price of black variant of mobile without discount
console.log("Actual price of the Mobile is " + MobilePrice.Black);
// displays the price of black variant of mobile with discount
console.log("The final price after discount is " + calculateAmount(MobilePrice.Black));
//enum Excercise
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["Febraury"] = 1] = "Febraury";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["Octobar"] = 9] = "Octobar";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
function perdiction(month) {
    var output = "";
    if (month.toString() == months.March.toString() || month.toString() == months.April.toString() || month.toString() == months.May.toString()) {
        output = "Yes! It is spring!  - Month is " + month.valueOf.toString();
    }
    else if (month.toString() == months.June.toString() || month.toString() == months.July.toString() || month.toString() == months.August.toString()) {
        output = "It's summer, who wants ice cream?!  - Month is " + month;
    }
    else if (month.toString() == months.September.toString() || month.toString() == months.Octobar.toString() || month.toString() == months.November.toString()) {
        output = "I am enjoying autumn, aren't you?  - Month is " + month;
    }
    else {
        output = "It is very cold outside! It's winter - Month is " + month;
    }
    return output;
}
var result = perdiction("April");
console.log(result);
