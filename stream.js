var fs=require('fs')
// var stream=fs.createReadStream('')
var files=fs.readdirSync(process.cwd())
files.forEach(function(file){
    if(/\.js/.test(file)){
        fs.watchFile(process.cwd()+'/'+file,function(){
            console.log(' - '+file+' changed!') 
        })
    }
})