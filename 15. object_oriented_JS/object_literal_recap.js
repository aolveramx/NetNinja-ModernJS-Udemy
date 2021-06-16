//object_literal notation
//best aproach to create objects

const userOne = {
  username: 'ryu',
  email: 'ryu@me.com',
  login() {
    console.log('the user logged in')
  },
  logout() {
    console.log('the user logged out')
  }
}

console.log(userOne.email, userOne.username)
userOne.login()

const userTwo = {
  username: 'chun li',
  email: 'chun.li@me.com',
  login() {
    console.log('the user logged in')
  },
  logout() {
    console.log('the user logged out')
  }
}

console.log(userTwo.email, userTwo.username)
userTwo.login()