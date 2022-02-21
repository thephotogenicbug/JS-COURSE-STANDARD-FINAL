// Synatax
// let variableName =  [...arrayname]

// Spread Operator 
// Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.
const shopping_cart = ["Maggie", "Beans", "Masala"]
const additional_cart = ["Matchbox", "Salt"]

// ... this means copy all the values inside the shopping cart and put inside recipe array
let recipe = [...shopping_cart, ...additional_cart]

console.log(recipe)