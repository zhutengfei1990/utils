class Foo {
	constructor(...args) {
		this.args = args;
	}
	//Symbol.iterator返回Foo的默认遍历器
	*[Symbol.iterator]() {
		for (let arg of this.args) {
			yield arg;
		}
	}
}

for (let x of new Foo('hello', 'world'))
	console.log(x)