var MongoClient=require('mongodb').MongoClient
var DB_CONN_STR='mongodb://localhost:27017/runoob'

var updateData=function(db,callback){
	var collection=db.collection('site')
	var whereStr={"name":'菜鸟教程'}
	var updateStr={$set:{"url":"https://www.runoob.com"}}
	collection.update(whereStr,updateStr,function(err,result){
		if(err){
			console.log('Error'+err)
			return
		}
		callback(result)
	})
}

MongoClient.connect(DB_CONN_STR,function(err,db){
	console.log('连接成功')
	updateData(db,function(result){
		console.log(result)
		db.close()
	})
})
