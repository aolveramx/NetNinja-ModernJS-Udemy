// variables & block scope
// the same rules of scope applies to const & let
const age = 30

// let age = 50

if (true) {
  // local scope
  const age = 40 // allowed to redifine inside code block
  const name = 'shaun'
  console.log('outside 1st code block: ', age, name)

  //nesting
  if (true) {
    const age = 50
    console.log('inside 2nd code block: ', age) // taking the most recently difined value
    var test = 'hello' //var ignores block scope
  }
}

console.log('outside code block: ', age, test)