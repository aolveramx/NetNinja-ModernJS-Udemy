/*
returns the first value inside an array
that passes a certain condition in a call back function
*/

const scores = [10, 5, 0, 40, 30, 10, 90, 70]

const firstHighScore = scores.find(score => score > 50)

console.log(firstHighScore)