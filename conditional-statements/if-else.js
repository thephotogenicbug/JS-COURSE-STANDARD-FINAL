// Conditional Statement

let condition = true;

// If-Else Syntax
if (condition) {
  console.log("Condition: True");
} else {
  console.log("Condition: False");
}

console.log("----------------------------------");

let weather = "cold";

if (weather === "hot") {
  console.log("Weather is Hot!");
} else {
  console.log("Weather is Cold!");
}

console.log("----------------------------------");

let isRaining = false;
let isCloudy = true;

// Logical OR (||)
// return TRUE if any one operands are TRUE
if (isRaining || isCloudy) {
  console.log("Don't forget to take Umbrella..!");
} else {
  console.log("Sky is Normal! Enjoy the weather");
}

console.log("----------------------------------");

/* PRATICAL APP USING JS 
   if hour is between 12AM(00hrs) to 12PM(12hrs) -> Good Morning
   Else if hour is between 1PM(13hrs) to 5PM(17hrs) -> Good Afternoon
   Else hour is between 5PM(17hrs) to 12AM(00hrs) -> Good Evening
*/

// Static Code
// let hour = 11;

// if (hour >= 0 && hour <= 12) {
//   console.log("Good Morning");
// } else if (hour >= 13 && hour <= 17) {
//   console.log("Good Afternoon");
// } else {
//   console.log("Good Evening");
// }

// Dynamic Code
let hour = new Date().getHours()

 console.log(hour)

if (hour >= 0 && hour <= 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour <= 17) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}