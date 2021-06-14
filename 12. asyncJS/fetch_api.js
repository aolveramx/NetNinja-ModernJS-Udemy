/*
fetch api only rejects code when network trouble
1. fetch data
2. take the respond and return it
3. resolve promise
*/

fetch('todos/luigi.json').then(response => {
  console.log('resolved', response)
  return response.json() // returns a promise
}).then(data => {
  console.log(data)
}).catch((err) => {
  console.log('rejected', err)
})