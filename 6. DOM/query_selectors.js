// querySelector

const para = document.querySelector('.error')
const para = document.querySelector('div.error')
const para = document.querySelector('body > div:nth-child(2) > p.error')

console.log(para)

// querySelectorAll

const paras = document.querySelectorAll('p')
const errors = document.querySelectorAll('.error')

paras.forEach(para => {
  console.log(para)
})

console.log(paras[0])

console.log(errors)