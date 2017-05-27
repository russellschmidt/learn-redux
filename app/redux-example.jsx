var React = require('react');

console.log("starting redux example");

// pure function
function add (a, b) {
  return a + b;
}

var a = 3;
// impure function w outside var dependency
function add (b) {
  return a + b;
}

var result;
// impure has outside var change--side effect
function add (a,b) {
  result = a + b;
  return result;
}

// impure bc changes all the time even w same inputs
function add (a, b) {
  return a + b + new Date().getSeconds();
}

function changeProp(obj) {
  // if you comment out return and uncomment this, you mutate the passed in object 
  // obj.name = 'Jen';
  // return obj;
  return {
    ...obj,
    name: 'Jen'
  }
}

var startingValue = {
  name: 'Andrew',
  age: 25
}

var res = changeProp(startingValue);

console.log(res); // return mutated value
console.log(startingValue); // return starting object proving it was not mutated
