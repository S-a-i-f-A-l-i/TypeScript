function addShipping(price, snipping) {
  console.log(price + snipping);
}
addShipping(10, 5);
// addShipping("10",5) // this is gives error =>Argument of type 'string' is not assignable to parameter of type 'number'.
function addShippingVoid(price, snipping) {
  console.log(price + snipping);
  // return price + snipping; // this will give error bcz return type is void but it's returning a number
}
addShipping(10, 5);
// addShipping("10",5) // this is gives error =>Argument of type 'string' is not assignable to parameter of type 'number'.
function returnTypeNumber(price, snipping) {
  // return "Test";   // This is gives error
  return price + snipping;
}
console.log(typeof returnTypeNumber(10, 5));
function returnTypeString(price, snipping) {
  return price + snipping;
  // return +price + +snipping; // this is give error bcz it's returning number
}
console.log(typeof returnTypeString("p", "s"));
// Union Type
function returnTypeUnion(price, snipping) {
  return "Test"; // not giving error
  return price + snipping; // not giving any error
}
console.log(typeof returnTypeUnion(10, 5));
