// var start=Date.now()
// setTimeout(function(){
// 	console.log(Date.now()-start)
// 	// for(var i=0;i<100000;i++){}
// },1000)
// setTimeout(function(){
// 	console.log(Date.now()-start)
// },2000)

console.log(1)
process.nextTick(function(){
	console.log(3)
})
console.log(2)
