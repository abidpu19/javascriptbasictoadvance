// your code goes here
let dtdc_charges:number = 10;
let firstFlight_charges:number = 5;
const service_charges:number = 0.1;

let dtdc_frieght:number = 1;
let fristFlight_frieght:number = 2;

let firstFght_cost:number = firstFlight_charges * fristFlight_frieght;
let dtdc_cost:number = dtdc_charges * dtdc_frieght;
let dtdc_cost_svc:number = dtdc_cost* service_charges;
let total_cost = firstFght_cost + dtdc_cost + dtdc_cost_svc;

console.log("FF Charges - "+firstFght_cost)
console.log("DTDC Charges - "+dtdc_cost)
console.log("DTDC Service Charges - "+dtdc_cost_svc)
console.log("Total Cost - "+total_cost);