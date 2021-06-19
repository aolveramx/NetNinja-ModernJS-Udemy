const symbolOne = Symbol('a generic name')
const symbolTwo = Symbol('a generic name')

console.log(symbolOne, symbolTwo, typeof symbolOne)

// not two symbols are ever be the same
console.log(symbolOne === symbolTwo)

const ninja = {}

ninja.age = 30
ninja['belt'] = 'orange'
ninja['belt'] = 'black' // overwrites

ninja[symbolOne] = 'ryu'
ninja[symbolTwo] = 'shaun'

console.log(ninja)