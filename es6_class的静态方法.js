class Foo {
	//静态方法
	static bar() {
		//this指向类
		this.baz();
	}
	static baz() {
		console.log('hello')
	}
	baz() {
		console.log('wrold')
	}
}
Foo.bar() //调用时静态方法的baz