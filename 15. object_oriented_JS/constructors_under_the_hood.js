function User(username, email) {
  this.username = username
  this.email = email
  this.login = function() {
    console.log(`${this.username} has logged in`)
  }
}

const userOne = new User('mario', 'mario@me.com')
const userTwo = new User('luigi', 'luigi@me.com')

console.log(userOne, userTwo)
userOne.login()