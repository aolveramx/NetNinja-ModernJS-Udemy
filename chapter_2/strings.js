// strings
console.log('hello, world')

let email = 'mario@thenetninja.co.uk'

console.log(email)

// concatenation
let fisrtName = 'Brandon' 
let lastName = 'Sanderson'

let fullName = fisrtName + ' ' + lastName

console.log(fullName)

// extract characters
console.log(fullName[0])

// string length
console.log(fullName.length) // .length it´s a property

/*
function: snippet of code which performs specific task
method: function associate with a particular object or data type
these methods do not altarete the original variable
*/
// string methods
console.log(fullName.toUpperCase())
let result = fullName.toLowerCase()
console.log(result, fullName);

/*
when we pass a value into a method is an argument
index = position
*/
let index = email.indexOf('@')
console.log(index)