const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun']
console.log(namesArray)

// sets - unique values, don´t allow duplicates
//const namesSet = new Set(['ryu', 'chun-li', 'ryu', 'shaun'])
// const namesSet = new Set(namesArray)
// console.log(namesSet)

// const uniqueNames = [...namesSet]
const uniqueNames = [...new Set(namesArray)]
console.log(uniqueNames)

const ages = new Set()
ages.add(20)
ages.add(25).add(30)
ages.add(25) // disregards this one
ages.delete(25)

console.log(ages, ages.size)
console.log(ages.has(30), ages.has(25))

ages.clear()
console.log(ages)

const ninjas = new Set([
  { name: 'shaun', age: 30 },
  { name: 'crystal', age: 29 },
  { name: 'chun-li', age: 32 }
])

ninjas.forEach(ninja => {
  console.log(ninja.name, ninja.age)
})