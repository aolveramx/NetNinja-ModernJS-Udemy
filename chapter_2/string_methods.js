// common string methods
let email = 'mario@thenetninja.co.uk'

// 
let result = email.lastIndexOf('n')

// cut a section of the string (from, to)
result = email.slice(0, 5)

// (from, how many characters)
result = email.substr(4, 10)

// replace one character to another
result = email.replace('m', 'w')

// just first character that mached. Not for REGEX
result = email.replace('n', 'w')

console.log(result)