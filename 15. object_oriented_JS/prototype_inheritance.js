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

function Admin(username, email, title) {
  User.call(this, username, email)
  this.title = title
}

Admin.prototype = Object.create(User.prototype)

Admin.prototype.deleteUser = function () {
  // delete a user
}

const userOne = new User('mario', 'mario@me.com')
const userTwo = new User('luigi', 'luigi@me.com')
const userThree = new Admin('shaun', 'shaun@me.com', 'black-belt-ninja')

console.log(userOne, userTwo, userThree)
userOne.login().logout()