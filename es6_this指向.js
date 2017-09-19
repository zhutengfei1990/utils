//this默认指向类的实例
class Logger{
	//绑定this
	// constructor(){
	// 	this.printName=this.printName.bind(this);
	// }
	//或者使用箭头函数
	constructor(){
		this.printName=(name='there')=>{
			this.print(`hello ${name}`)
		}
	}

	print(text){
		console.log(text)
	}
	printName(name='there'){
		this.print(`Hello ${name}`)
	}

	
}

const logger=new Logger();
// console.log(logger);
const {printName}=logger; //解构赋值
printName();