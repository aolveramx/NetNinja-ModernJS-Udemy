// submit events
const form = document.querySelector('.signup-form')
const username = document.querySelector('#username')

form.addEventListener('submit', e => {
  e.preventDefault()
  // console.log(username.value);
  console.log(form.username.value)
})

// testing RegEx
const username = 'shaun'
const pattern = /[a-z]{6,}/

let result = pattern.test(username)
console.log(result)