/*
   PRATICAL APP USING JS
   If Person's age is more than 18, They are 'Adult Ticket' category 
   Otherwise They are 'Child Ticket' category
*/

// Syntax
// condtion ? 'value1' : 'value2'

let age = 14;

let type = age > 18 ? "Adult Ticket" : "Child Ticket"

console.log(type)

console.log("------------------------------------");

// Before ternary operatory
let condtion ;

if (condtion) {
  // condition runs
  let type = "Adult Ticket";
} else {
  // else runs
  let type = "Child Ticket";
}
