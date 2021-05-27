const ul = document.querySelector('ul')

const button = document.querySelector('button')

button.addEventListener('click', () => {
  const li = document.createElement('li')
  li.textContent = 'something new to do'
  ul.prepend(li)
})

ul.addEventListener('click', e => {
  // console.log('event in UL')
  if (e.target.tagName === 'LI') {
    e.target.remove()
  }
})