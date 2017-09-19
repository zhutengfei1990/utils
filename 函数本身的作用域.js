var a=1;
function x(){
	console.log(a)
}

function f(){
	var a=2;
	x();
}

f();