// when a method doesn´t explicity returns value, JS assigns it as undefined value

class User {
  constructor(username, email) {
    // set up properties
    this.username = username
    this.email = email
    this.score = 0
  }
  login() {
    console.log(`${this.username} just logged in`)
    return this
  }
  logout() {
    console.log(`${this.username} just logged out`)
    return this
  }
  incScore() {
    this.score += 1
    console.log(`${this.username} has a score of ${this.score}`)
    return this
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter(u => u.username != user.username)
  }
}

const userOne = new User('mario', 'mario@me.com')
const userTwo = new User('luigi', 'luigi@me.com')
const userThree = new Admin('shaun', 'shaun@me.com')

console.log(userOne, userTwo, userThree)

let users = [userOne, userTwo, userThree]
console.log(users)

userThree.deleteUser(userTwo)
console.log(users)

userOne.deleteUser(userThree)