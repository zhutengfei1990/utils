function isArray(o){
	console.log(typeof o) 
	return Object.prototype.toString.call(o)=='[object Array]'
}

console.log(Object.prototype.toString)