function Point(x, y) {
	this.x = x;
	this.y = y;
}

Point.prototype.toString = function () {
	return this.x + this.y;
}

var p = new Point(1, 2);

//类本身指向构造函数
class Point1 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	//类的所有方法都是定义在类的prototype属性上
	toString() {
		return this.x + this.y;
	}
}

console.log(typeof Point1)

console.log(Point1 === Point1.prototype.constructor)

let p1 = new Point1()
//通过实例调用方法实际上就是调用类原型的方法
console.log(p1.toString === Point1.prototype.toString);
//通过assign给对象原型批量添加方法
Object.assign(Point1.prototype, {
	toString() { },
	toValue() { }
})

const methodName = 'getArea'

class Square {
	constructor() {

	}
	[methodName]() {
		console.log('abc');
	}
}
getArea();