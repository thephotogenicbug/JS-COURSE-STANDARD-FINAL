/* Manual way to show numbers in js using console.log()
   console.log("Number #1")
   console.log("Number #2")
   console.log("Number #3")
   console.log("Number #4")
   console.log("Number #5")
*/

// Syntax
//step can be increment, decrement
// for(initalExpression; condition; step){
//code
//     console.log("Number #1")
// }

// for Loop
// i means index  initial variable is 0 so it starts with 0
//  i less then 5
for (let i = 0; i < 5; i++) {
  console.log("Number #", i);
}
console.log("--------------------------------------------------------");
// i means index  initial variable is 1 so it starts with 1
// i less then 5
for (let i = 1; i < 5; i++) {
  console.log("Number #", i);
}
console.log("--------------------------------------------------------");
// i means index  initial variable is 1 so it starts with 1
// i less than or equal to 5
for (let i = 1; i <= 5; i++) {
  console.log("Number #" + i);
}
console.log("--------------------------------------------------------");
// for loop display only odd numbers
for (let i = 1; i <= 10; i++) {
   // i remainder of division by 2 is not equal to (!== 0)  
  if (i % 2 !== 0) {
    console.log("Odd Number #" + i);
  }
}
console.log("--------------------------------------------------------");
// Infinite loop
// i >= 1 wont become false and it will start infinite loop to fix use decrement step i--
for (let i = 10; i >= 1; i++) {
  // i remainder of division by 2 is not equal to (!== 0)
  if (i % 2 !== 0) {
    console.log("Reverse Odd Number #" + i);
  }
}
console.log("--------------------------------------------------------");

// For loop even numbers
for (let i = 10; i >= 1; i--) {
  // i remainder of division by 2 is not equal to (!== 0)
  if (i % 2 == 0) {
    console.log("Reverse Even Number #" + i);
  }
}
console.log("--------------------------------------------------------");