//class表达式
const MyClass = class Me {

}
//立即执行class
const person = new class {
	constructor(name) {
		this.name = name;
	}
	sayName() {
		console.log(this.name);
	}
}('张三')
person.sayName();

