// var rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?([^?#]*))?/;
// ajaxLocation="https://www.cnblogs.com/breakdown/archive/2012/12/18/2823646.html"
// urlParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
// console.log(urlParts);
// function baseDomain() {
// 	var parts = urlParts[2].split('.');
// 	return parts.length > 2 ? parts[parts.length - 2] + '.' + parts[parts.length - 1] : urlParts[2];
// }
// console.log(baseDomain());

// var index=1;
// var a+index=3;
// console.log(a+index);

function max(){
	console.log(JSON.stringify(arguments));
	var max=Number.NEGATIVE_INFINITY;
	for(var i=0;i<arguments.length;i++){
		if(arguments[i]>max) max=arguments[i]
	}
	return max;
}

var largest=max(1,20);
console.log(largest);