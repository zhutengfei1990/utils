let util = require('util')

console.log(util.isArray(1))
console.log(util.isArray([]))

console.log(util.isRegExp(/ /))
console.log(util.isRegExp({}))

console.log(util.isDate(new Date()))

console.log(util.isError(new Date()))