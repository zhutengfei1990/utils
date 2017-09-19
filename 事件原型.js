function Emitter(){
	this._listenter=[];
}

Emitter.prototype.bind=function(eventName,callback){
	var listener=this._listenter[eventName]||[];
	listener.push(callback)
	this._listenter[eventName]=listener;
}

Emitter.prototype.trigger=function(eventName){
	var args=Array.prototype.slice.call(arguments,1);
	var listener=this._listenter[eventName];

	if(!Array.isArray(listener)) return;
	listener.forEach(function(callback){
		try{
			callback.apply(this,args)
		}
		catch(e){
			console.log(e)
		}
	})
}


var emitter=new Emitter();
emitter.bind('myevent',function(args1,args2){
	console.log(args1,args2);
})
emitter.bind('myevent',function(args1,args2){
	console.log(args2,args1);
})

emitter.trigger('myevent','a','b')
