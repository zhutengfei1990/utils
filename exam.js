function tempalte2(str){
    var r=str.match(/([a-z]+) <%= ([a-z]+) %>/);
	var str1=r[1];
	var key=r[2];
	return function(obj){
		return str.replace(/([a-z]+) <%= ([a-z]+) %>/,"$1 "+obj[key])
        // return str1+" "+obj[key];
    }
	
	// var key=r[]
	// var str1=(str.match(/([a-z]+)<%= ([a-z]+) %>/))[1];
 //    var key=(str.match(/([a-z]+)<%= ([a-z]+) %>/))[2];
    // return function(obj){
    //     return str1+obj[key.trim()];
    // }
}

// function tempalte(str){
//     var start=str.indexOf('<%=')+3;
//     var end=str.indexOf('%>');
//     var str1=str.slice(0,start-3);
//     var key=str.substring(start,end);
//     return function(obj){
//         return str1+obj[key.trim()];
//     }
// }
// var c=tempalte2('hello <%= user %>')
var c2=tempalte2('welcome to <%= location %>')
// console.log(c({'user':'world'}))
console.log(c2({'location':'c'}))

// console.log(tempalte2('hello <%= user %>'))