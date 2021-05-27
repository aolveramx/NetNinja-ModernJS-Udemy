// parent ref
const article = document.querySelector('article')

// get children 
console.log(article.children)

// turn HTMLCollection into array
// doesn´t alter the original value
console.log(Array.from(article.children))
console.log(article.children)

Array.from(article.children).forEach(child => {
  child.classList.add('article-element')
})

const title = document.querySelector('h2')

// find elements parent
 console.log(title.parentElement)
 console.log(title.parentElement.parentElement)

 // sibling 
 console.log(title.nextElementSibling);
 console.log(title.previousElementSibling);

 // chaining
 console.log(title.nextElementSibling.parentElement.children);