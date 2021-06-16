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

const userOne = new User('mario', 'mario@me.com')
const userTwo = new User('luigi', 'luigi@me.com')

console.log(userOne, userTwo)

// chaining methods works because we´re explicityreturning the instance at the end "this"
userOne.login().incScore().incScore().logout()