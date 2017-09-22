var o = {}
var val = ""
// Object.defineProperty 第三个参数成为资源描述符（数据描述符和存取描述符，且不能同时存在）
//数据描述符和存储描述符共有的：enumerable、configurable
//数据描述符：value writable
//存储描述符：get set
Object.defineProperty(o, 'a', {
    enumerable: true,
    configurable: true,
    // value: 100,
    get() {
        return val
    },
    set(newVal) {
        val = newVal
    }
})
o.a = 100
console.log(o.a)
