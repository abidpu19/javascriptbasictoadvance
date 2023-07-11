// your code goes here
var dtdc_charges = 10;
var firstFlight_charges = 5;
var service_charges = 0.1;
var dtdc_frieght = 1;
var fristFlight_frieght = 2;
var firstFght_cost = firstFlight_charges * fristFlight_frieght;
var dtdc_cost = dtdc_charges * dtdc_frieght;
var dtdc_cost_svc = dtdc_cost * service_charges;
var total_cost = firstFght_cost + dtdc_cost + dtdc_cost_svc;
console.log("FF Charges - " + firstFght_cost);
console.log("DTDC Charges - " + dtdc_cost);
console.log("DTDC Service Charges - " + dtdc_cost_svc);
console.log("Total Cost - " + total_cost);
