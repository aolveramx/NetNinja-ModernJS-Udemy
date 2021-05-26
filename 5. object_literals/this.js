// arrow function work differently with this keyword
// this keyword a context object where the current code it´s executed

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: ['why mac & cheese rules', '10 things to make with marmite'],
  login: function() {
    console.log('the user logged in')
  },
  logout: function() {
    console.log('the user logout')
  },
  // regular function a short hand version 
  logBlogs() {
    // console.log(this.blogs)
    console.log('his user has written the following blogs')
    this.blogs.forEach(blog => {
      console.log(blog)
    })
  }
}

user.logBlogs()

// Global object called Window
console.log(this) 