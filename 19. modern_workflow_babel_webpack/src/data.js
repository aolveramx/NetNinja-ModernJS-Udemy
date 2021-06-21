const users = [
  {name: 'shaun', premium: true},
  {name: 'yoshi', premium: false},
  {name: 'mario', premium: false},
  {name: 'chun-li', premium: true},
]

// export const getPremUsers = users => {
//   return users.filter(user => user.premium)
// }

const getPremUsers = users => {
  return users.filter(user => user.premium)
}

// export default users

export { getPremUsers, users as default }  