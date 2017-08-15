//字符方法
var v='hello'
console.log(v.charAt(0)) //h
console.log(v.charCodeAt(0))//h的字符编码
console.log(v[0])//h
//字符串方法 concat + 
console.log('v:',v,'result:',v.concat(' world')) //hello world
console.log('v:',v,'result:',v+' world') //hello world
//slice substr substring 基于字符串创建新字符串的方法
console.log(v.slice(1,3)) //start:1 end:3（不包括end）
console.log(v.substring(1,3)) //start:1 end:3（不包括end）
console.log(v.substr(1,3)) //start:1 length:3
//位置方法
console.log(v.indexOf('l')) //第一次出现的位置 2
console.log(v.lastIndexOf('l')) //最后一次出现的位置 3
console.log(v.indexOf('l',3)) //第一次出现的位置 3
console.log(v.lastIndexOf('l',3)) //最后一次出现的位置 3
//trim方法
console.log('  hello word '.trim())  //hello word
//大小写转换方法
console.log('hello WORLD'.toLowerCase())         //转为小写 hello world
console.log('hello WORLD'.toLocaleLowerCase()) 
console.log('hello word'.toUpperCase())        //转为大写 HELLO WORD
console.log('hello word'.toLocaleLowerCase())        //转为大写 HELLO WORD
//字符串的模式匹配 match search 
var text='cat,bat'
var pattern=/.at/g //.表示匹配除换行符之外的任何单个字符
console.log(text.match(pattern)) //[ 'cat', 'bat' ]
console.log(text.search(pattern)) //0 第一个匹配项的索引
