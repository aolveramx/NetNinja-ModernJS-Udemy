/*
-function expression -> NOT hoisting
-define your function before you use it
-better practice to declare everything
*/
const speak = function() {
  console.log('good day!')
};


greet()
greet()
greet()

speak()
speak()
speak()

// function declaration --> hoisting
// call your function, before you declare it
function greet() {
  console.log('hello there')
}