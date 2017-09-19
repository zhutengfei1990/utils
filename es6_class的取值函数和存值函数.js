class MyClass {
	constructor() {

	}
	get prop() {
		return 'getter';
	}
	set prop(value) {
		console.log('setter:' + value)
	}
}

let inst = new MyClass();
// console.log(inst.prop = 123)
inst.prop = 123
console.log(inst.prop)