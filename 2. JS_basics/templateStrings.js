// template strings
const title = 'Best reads of 2019'
const author = 'Mario'
const likes = 30

// contatenation way
let result = 'The blog called ' + title + ' by' + ' has ' + likes + ' likes'

// template string or template literals
result = `The blog called ${title} by ${author} has ${likes} likes`
console.log(result)

// creating html templates
let html = `
  <h2>${title}</h2>
  <p>${author}</p>
  <span>This blog has ${likes} likes</span>
`