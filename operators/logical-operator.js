// Logical Operators

// Logical AND (&&)
// returns TRUE if both operands are TRUE
console.log(true && true);
console.log("------------------------------")

// Logical OR (||)
// return TRUE if any one operands are TRUE
console.log(true || false);
console.log("------------------------------");

// NOT (!) exclamation mark
// returns false if you give true
console.log(!true)
 console.log("-------------end of example-----------------");

/*
   PRATICAL APP USING JS
   If a person is having highIncome, CIBILScore => Loan Eligible, OR Ineligible
*/

// Logical AND (&&)
// returns TRUE if both operands are TRUE
let highIncome1 = true;
let CIBILScore1 = true;

let eligiblePerson1 = highIncome1 && CIBILScore1

console.log("Status :", eligiblePerson1)
console.log("--------------------------------------")

// Logical OR (||)
// return TRUE if any one operands are TRUE
let highIncome2 = false;
let CIBILScore2 = true;

let eligiblePerson2 = highIncome2 || CIBILScore2;

console.log("Status :", eligiblePerson2);
console.log("--------------------------------------");

// NOT (!) exclamation mark
// returns false if you give true
let highIncome3 = false;
let CIBILScore3 = true;

let eligiblePerson3 = highIncome3 || CIBILScore3;

// if manager doesnt approve then print false
let applicationStatus = !eligiblePerson3

console.log("Loan Status: " + eligiblePerson3)
console.log("Application Status: " + applicationStatus);
console.log("--------------------------------------");