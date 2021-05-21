// arguments & parameters

const speak = function(name, time) { // parameters - when we receive argument into a function
  console.log(`good ${time}! ${name}`)
}

speak('Mario', 'morning') // argument - value passed to a function

const speak2 = function(name = 'luigi', time = 'night') { // default parameters
  console.log(`good ${time}! ${name}`)
}

speak2()
speak2('shaun', 'day') // overwrite default value