// let i = 10 is inline variable
for (let i = 10; i >= 1; i--) {
  // i remainder of division by 2 is not equal to (!== 0)
  // inline variable will only be accessable here
  if (i % 2 !== 0) {
    console.log("Reverse Odd Number #" + i);
  }
}
console.log("--------------------------------------------------------");

//old way this method is not readable
// let i = 15;

// for (; i >= 1; ) {
//   if (i % 2 !== 0) {
//     console.log("Reverse Odd Number #" + i);
//   }
//   i--;
// }

// console.log("--------------------------------------------------------");

// while loop
let i = 25;
while (i >= 1) {
  if (i % 2 !== 0) {
    console.log("While loop Odd Number #" + i);
  }
  // need to add step otherwise it will fall into infinite loop
  i--;
}
