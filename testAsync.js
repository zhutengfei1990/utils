var async = require('async')
//利用async.auto完成以下几件事
//1.取数据 2.新建目录 3.将数据写到目录中的文件 4.发送邮件
async.auto({
	getData:function(callback){
		setTimeout(function(){
			console.log('1.1:got data')
			callback(null,'mydata')
		},300)
	},
	makeFolder:function(callback){
		setTimeout(function(){
			console.log('1.1:made folder')
			callback(null,'myfolder')
		},200)
	},
	writeFile:['getData','makeFolder',function(callback){
		setTimeout(function(){
			console.log('1.1:wrote file')
			callback(null,'myfile')
		},300)
	}],
	emailFiles:['writeFile',function(callback,results){
		console.log('1.1 emailed file:',results.writeFile)
		callback(null,results.writeFile)
	}]
},function(err,results){
	console.log('1.1 err:',err)
	console.log('1.1 results:',results)
})
