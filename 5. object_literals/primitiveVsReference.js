// How they stored and used in memory

let scoreOne = 50
let scoreTwo = scoreOne

console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`)

scoreOne = 100
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`)

// reference value

const userOne = { name: 'ryu', age: 30 }
const userTwo = userOne // just copies the pointer

console.log(userOne, userTwo)

userOne.age = 40
console.log(userOne, userTwo)