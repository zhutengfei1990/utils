//判断一个NaN
function myisNaN(value) {
	return typeof value === 'number' && isNaN(value); //isNaN('字符串')也为true
}
//NaN是JavaScript之中唯一不等于自身的值
function myIsNaN2(value) {
	return value !== value;
}
//浏览器环境下，global改为window
if ('x' in global) {
	return 1;
}
//inb不能识别继承的属性
var o = new Object();
console.log(o.hasOwnProperty('toString'));//false
console.log('toString' in o)//true,toString是o的继承属性

// for...in遍历所有属性
//name是Person本身的属性
function Person(name) {
	this.name = name
}

Person.prototype.describe = function () {
	return 'Name：' + this.name
}

var person = new Person('Jane');

for (var key in person) {
	console.log(key);
}
//with语句
var obj = {}
// Object.defineProperties(obj,{
// 	'p1':{
// 		configurable:true,
// 	},
// 	'p2':{
// 		configurable:true
// 	}
// })
//var obj={}
//Object.defineProperty(obj, 'key', {
//enumerable: false,
//configurable: false,
//writable: false,
//value: 'static'
//});
Object.defineProperties(obj, {
	'property1': {
		value: true,
		writable: true
	},
	'property2': {
		//  value: 'Hello',
		writable: false
	}
});
with (obj) {
	property1 = 1;
	property2 = 2;
}
console.log(obj.property1)
console.log(obj.property2)


function f() {

	console.log(Array.prototype.slice.call(arguments))
}
f('a')

