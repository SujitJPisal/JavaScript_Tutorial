// Let's play florist. Declare six variables, remembering to name them according to
// their purpose:
// the price of a single rose (8) and the number of roses you have (70)
// the price of a single lily (10) and the number of lilies you have (50)
// the price of a single tulip (2) and the number of tulips you have (120)
// Now declare three variables, one each for the roses, lilies, and tulips you have, in
// which you place their total price. Insert the corresponding values into the
// variables using the variables declared in the previous step. Finally, declare a
// variable in which you store the price of all your flowers (again, use the previous
// variables for initialization). Display all inventory information in the console in the
// following form:
// Rose – unit price: 8 , quantity: 70 , value: 560
// Lily – unit price: 10 , quantity: 50 , value: 500
// Tulip – unit price: 2 , quantity: 120 , value: 240
// Total: 1300

let roseCost = 8 ;
let lilyCost = 10 ;
let tulipCost = 2 ;

let n_rose = 70 ;
let n_lily = 50 ;
let n_tulip = 120 ; 

let value_Rose = roseCost * n_rose;
let value_lily = lilyCost * n_lily;
let value_tulip = tulipCost * n_tulip;

let totalValue = value_Rose + value_lily + value_tulip;

console.log("Rose – unit price: "+ roseCost +" , quantity: "+n_rose+" , value: "+value_Rose);
console.log("Lily – unit price: "+ lilyCost +" , quantity: "+n_lily+" , value: "+value_lily);
console.log("Tulip – unit price: "+ tulipCost +" , quantity: "+n_tulip+" , value: "+value_tulip);
console.log("Total: "+totalValue);