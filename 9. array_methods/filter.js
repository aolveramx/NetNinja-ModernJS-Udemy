/*
it´s non destructive, doesn´t alter the original array
conditions: true - in array false - out of array
*/

// const scores = [10, 30, 15, 25, 50, 40, 5]

// const filteredScores = scores.filter(score => {
//   return score > 20
// })

// console.log(scores)
// console.log(filteredScores);

const users = [
  {name: 'shaun', premium: true},
  {name: 'yoshi', premium: false},
  {name: 'mario', premium: false},
  {name: 'chun-li', premium: true},
]

const premiumUsers = users.filter(user => user.premium)

console.log(premiumUsers)