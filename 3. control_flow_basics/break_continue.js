// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10]

for (let i = 0; i < scores.length; i++) {

  if (scores[i] === 0) {
    continue // ignores current loop and continue iteration
  }

  console.log('your score: ', scores[i])

  if (scores[i] === 100 ) {
    console.log('congrats, you got the top score')
    break // no more iteration
  }
}