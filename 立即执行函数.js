//()表示执行某个函数
//定义立即执行函数的时候，要以下面两种形式定义
//不能以function开头，因为function开头，
//解释器会认为是函数定义（函数定义不应该以括号结尾），而不是一个表达式，
(function(){}());
(function(){})();
var i=function(){return 10}()
console.log(i)

console.log(eval('a=2'))