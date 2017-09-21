let promise = new Promise((resolve,reject)=>{
    throw new Error('test')
})
promise.catch((error)=>{
    console.log(error)
})