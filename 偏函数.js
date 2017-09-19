//偏函数是指创建一个函数，且该函数调用另外一部分（参数或者变量已经预置的函数）
var toString = Object.prototype.toString
var isType = function (type) {
	return function (obj) {
		return toString.call(obj) == '[object ' + type + ']';
	}
}

console.log(isType('String')(1))