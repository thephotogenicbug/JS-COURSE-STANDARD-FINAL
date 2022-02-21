const numbers = [1, 2, 3, 4, 5];

// u can use map function based on ur logic
let map = numbers.map(function (val) {
  // logic
  return val * 2;
});

console.log(map);
console.log("-----------------------");
// map function using Object
const people = [
  { id: 1, firstName: "Naveen", lastName: "Kumar" },
  { id: 2, firstName: "Vijay", lastName: "Kumar" },
  { id: 3, firstName: "Trisha", lastName: "Grace" },
];

// Map only firstName
let map1 = people.map(function(val){
    return val.firstName;
})
console.log(map1)
console.log("-----------------------");

// Map firstName and lastName
let map2 = people.map(function(val){
    return val.firstName + val.lastName;
})
console.log(map2);
console.log("-----------------------");
// Map firstName and lastName using array
let map3 = people.map(function(val){
    return [val.firstName, val.lastName].join(" ");
})
console.log(map3);
console.log("-----------------------");

// Map only id and fullName
// {id: 1, fullName:"Naveen Kumar"}
let map4 = people.map(function (val) {
  // save [val.firstName, val.lastName].join(" "); in a variable
  let fullName = [val.firstName, val.lastName].join(" ");
  //create an Object, id is a key  if key : value pair is same use {id: val.id, fullName};
  let obj = { id: val.id, fullName: fullName };
  //   return fullName;
  // return obj
  return obj;
});
console.log(map4);
console.log("-----------------------");