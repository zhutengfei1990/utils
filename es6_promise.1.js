function timeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, ms,['done','done2']); //第三个参数以及后面的参数为回调函数的参数
    })
}

timeout(100).then((value)=>{
    console.log(value)
})

let promise = new Promise((resolve,reject)=>{
    console.log('Promise')
    resolve()
})

promise.then(()=>{
    console.log('resolved')
    return '第一个then的参数'  //第一个then的返回值传递给第二个then作为参数
}).then((param)=>{
    console.log('second resolved',param)
})

console.log('Hi')