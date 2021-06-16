// Thew only type of data allowed in localStorage are strings

// store data in local storage
localStorage.setItem('name', 'mario')
localStorage.setItem('age', 50)

// get data local storage
let names = localStorage.getItem('name')
let age = localStorage.getItem('age')

console.log(names, age)

// updating data
localStorage.setItem('name', 'luigi')
localStorage.age = '40'

names = localStorage.getItem('name')
age = localStorage.getItem('age')
console.log(names)

// deleting data from local storage
//localStorage.removeItem('name')
localStorage.clear()

names = localStorage.getItem('name')
age = localStorage.getItem('age')
console.log(names, age)