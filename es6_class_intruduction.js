//传统方式
function Person(x, y) {
	this.x = x;
	this.y = y;
}

Person.prototype.toString = function () {
	return this.x + this.y
}

//es6的写法

class Person1 {
	constructor(x, y) {
		this.x = x;//定义在实例上
		this.y = y;
	}
	//原型定义方法
	toString() {

	}
}

console.log('toString' in Person1);