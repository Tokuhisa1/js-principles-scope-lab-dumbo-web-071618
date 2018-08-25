// Write your solution in this file!
// Declare a variable in global scope called customerName using the var keyword.
var customerName = 'bob';
// Write a function that accesses that global customerName variable, and
// uppercases it.
function upperCaseCustomerName() {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
  customerName = customerName.toUpperCase();
}
// Write a function that when called, declares a variable called bestCustomer
// in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
  bestCustomer = 'not bob';
}
// See the consequences of declaring a variable in global scope, by writing a
// new function called overwriteBestCustomer() that changes that bestCustomer
// variable.
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}
// Now declare a constant in global scope called leastFavoriteCustomer, be sure
// to assign it some initial value.
const leastFavoriteCustomer = '';
// Ok, now write a function called changeLeastFavoriteCustomer() that attempts
// to change that constant - notice what JavaScript does when you try to change
// the constant.
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob';
}
