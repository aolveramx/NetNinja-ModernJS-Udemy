/*
Any methods that a particular object has access to
are listed inside __proto__ property

When we try to access a property ot method on a primitive type
like a number or a string, JS takes that primitive value and 
it wraps it temporalily in a wrapper object.

Once we´ve done JS unwraps the primitive value from the object
to it´s original state

Pretty much everything in JS can behave like an object
*/

// Arrays
const names = ['shaun', 'crystal']
const ages = new Array(20, 25)

// objects
const userOne = {}
const userTwo = new Object()

// example under the hood
const nameTwo = new String('ryu')
