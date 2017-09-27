let util = require('util')

function Person(){
    this.name = '1'
    this.toString = function(){
        return this.name
    }
}

var obj = new Person()
console.log(util.inspect(obj))
console.log(util.inspect(obj,true,true)) //showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。