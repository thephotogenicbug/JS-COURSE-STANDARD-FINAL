// Switch Case

let condition = 1;

// Syntax
// if condition value is 1 then case 1 will run
switch (condition) {
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  default:
    console.log("Default Behaviour");
}

console.log("----------------------------------------------");

/* PRATICAL APP USING JS 
  Grading System
  S - super grade
  A - Excellent
  B - 
  E
  U -
*/

let grade = "S";

switch (grade) {
  case "S":
    console.log("Super Grade");
    break;
  case "A":
  case "B": // satisfy multiple cases
    console.log("Excellent Grade");
    break;
  case "E":
    console.log("Just Pass!");
    break;
  case "U":
    console.log("Failed Grade");
    break;
  default:
    console.log("Unknown Grade");
}

console.log("----------------------------------------------");

/* PRATICAL APP */

let marks = 160;

// it should follow the order
switch (true) {
  case (marks > 90):
    console.log("Super Grad");
    break;
  case (marks > 50):
    console.log("Pass");
    break;
  case (marks < 50):
    console.log("Failed !");
    break;
  default:
    console.log("Unknown Grade");
}

/* Assignment 
  Example : Mobile Buying Suggestion
  If given saving amount is > 10k Buy Android Mobile
  Else If given amount is > 60k Buy Iphone Mobile
  Else If given amount is > 5 & < 10 Buy Basic Mobile
  Else Print "You cannot afford mobile phone now!"
*/