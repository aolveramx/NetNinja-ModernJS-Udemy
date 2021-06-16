function User(username, email) {
  this.username = username
  this.email = email
}

User.prototype.login = function() {
  console.log(`${this.username} has logged in`)
  return this
}

User.prototype.logout = function() {
  console.log(`${this.username} has logged out`)
  return this
}

const userOne = new User('mario', 'mario@me.com')
const userTwo = new User('luigi', 'luigi@me.com')

console.log(userOne, userTwo)
userOne.login().logout()