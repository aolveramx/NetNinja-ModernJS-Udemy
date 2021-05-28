// submit events
const form = document.querySelector('.signup-form')
// const username = document.querySelector('#username')

form.addEventListener('submit', e => {
  e.preventDefault()
  // console.log(username.value);
  console.log(form.username.value)
})

// testing RegEx
const username = 'shauwnp'
const pattern = /^[a-z]{6,}$/

let result = pattern.test(username)

if (result) {
  console.log('regex test passes :)')
} else {
  console.log('regex test failed :(')
}

let result = username.search(pattern)
console.log(result)