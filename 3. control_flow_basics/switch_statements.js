// switch statements uses strict comparison
const grade = 'P'

// using if statements
if ( grade === 'A') {

} else if (grade === 'B') {
  
} else if (grade === 'C') {
  
} else if (grade === 'D') {
  
} else if (grade === 'E') {
  
} else {

}

// when checking multi poisible values for a single variable

switch(grade) {
  case 'A':
    console.log('you got an A!')
    break
  case 'B':
    console.log('you got an B!')
    break
  case 'C':
    console.log('you got an C!')
    break
  case 'D':
    console.log('you got an D!')
    break
  case 'E':
    console.log('you got an E!')
    break
  default:
    console.log('not a valid grade')
}