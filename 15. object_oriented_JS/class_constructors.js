/*
constructor: builds object and set properties on it
*/

class User {
  constructor(username, email) {
    // set up properties
    this.username = username
    this.email = email
  }
}

/*
the 'new' keyword
1- it creates a new empty object {}
2- it binds the value of 'this' to the new empty object
3- it calls the constructor function to 'build' the object

instance refer to individual objects that we create
*/


const userOne = new User('mario', 'mario@me.com')
const userTwo = new User('luigi', 'luigi@me.com')
console.log(userOne)
console.log(userTwo)