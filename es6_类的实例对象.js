//类必须通过new调用

//实例的属性除非显示定义在this对象上，否则就是定义 在原型上

class Point2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	toString() {
		return this.x;
	}
}

var p = new Point2(1, 2)
console.log(p.hasOwnProperty('x'))
console.log(p.hasOwnProperty('toString'))
console.log(p.__proto__.hasOwnProperty('toString'))
