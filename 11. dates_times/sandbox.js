const now = new Date()

// console.log(dateFns.isToday(now))

// formatting options
console.log(dateFns.format(now, 'YYYY'))
console.log(dateFns.format(now, 'MMM'))
console.log(dateFns.format(now, 'ddd'))
console.log(dateFns.format(now, 'Do'))
console.log(dateFns.format(now, 'dddd, Do, MMMM, YYYY'))

// comparing dates
const before = new Date('February 1 2019 7:30:59')

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}))