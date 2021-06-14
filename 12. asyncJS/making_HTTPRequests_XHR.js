const request = new XMLHttpRequest()
const url = 'http://jsonplaceholder.typicode.com/posts'

request.addEventListener('readystatechange', () => {
  // console.log(request, request.readyState)
  if (request.readyState === 4) {
    console.log(request.responseText)
  }
})


request.open('GET', url)
request.send()