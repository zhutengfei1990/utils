var getJSON = function(url){
    var promise = new Promise((resolve,reject)=>{
        var client = new XMLHttpRequest()
        client.open('get',url)
        client.onreadystatechange = handler
        client.responseType = "json"
        client.setRequestHeader("Accept","application/json")
        client.send()
        function handler(){
            if(this.readystate !==4){
                return;
            }
            if(this.status === 200){
                resolve(this.response)
            }else{
                reject(new Error(this.statusText))
            }
        }
    })
    return promise
}

getJSON("package.json").then((json)=>{
    console.log('Contents:',json)
},(error)=>{
    console.error('error',error)
})