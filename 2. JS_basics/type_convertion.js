// type conversion
let score = '100'

//
score = Number(score)
console.log(score + 1);

//
console.log(typeof score)

// Explicit type conversion
let result = Number('hello') // NAN
console.log(result)

//
result = String(50, typeof result)

//
result = Boolean(0) // falsy
result = Boolean(100) // truty 
result = Boolean('0') // truty 
result = Boolean('') // falsy 