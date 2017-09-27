let util = require('util')

function Base(){
    this.name = 'base'
    this.sayHello = function(){
        console.log('Hello '+this.name)
    }
} 

Base.prototype.showName = function(){
    console.log(this.name);
}

function Sub(){
    this.name = 'sub'
}

util.inherits(Sub,Base)

var objBase = new Base()
objBase.showName()

var objSub = new Sub()
objSub.showName()
// objSub.sayHello(); //仅仅继承了原型链上的函数和属性