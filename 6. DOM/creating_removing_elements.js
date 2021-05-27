const ul = document.querySelector('ul')

const button = document.querySelector('button')

button.addEventListener('click', () => {
  // ul.innerHTML += '<li>something new</li>'
  const li = document.createElement('li')
  li.textContent = 'something new to do'
  ul.prepend(li)
  // ul.append(li)
})

const items = document.querySelectorAll('li')

items.forEach(item => {
  item.addEventListener('click', e => {

    e.target.remove()
  })
})