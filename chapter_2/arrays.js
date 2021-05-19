// Arrays: for save collection of things
let ninjas = ['shaun', 'ryu', 'chun-li']

console.log(ninjas[1])

// overwrite
ninjas[1] = 'ken'
console.log(ninjas)

let ages = [20, 25, 30, 35]
console.log(ages[2])

let random = ['shaun', 'crystal', 30, 20]
console.log(random)

// properties
console.log(ninjas.length)

// array methods

//
let result = ninjas.join(',')
console.log(result)

//
result = ninjas.indexOf('chun-li')

// join things together
result = ninjas.concat(['ken', 'crystal'])
console.log(result)

// desctructive: alters original value
result = ninjas.push('ken')

// destructive. Takes off the end value
result = ninjas.pop()

console.log(result)
