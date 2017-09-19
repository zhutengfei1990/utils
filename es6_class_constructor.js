//constructor是类的默认方法
class Point{
	//默认添加空的构造方法
}

class Foo{
	constructor(){
		return Object.create(null);
	}
}
//返回的是别的对象
console.log(new Foo() instanceof Foo)

