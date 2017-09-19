//Number强制类型转换的过程

var obj={x:1}

//过程如下：
//1.调用valueOf
//2.toString
//3.Number()
if(typeof obj.valueOf()==='object'){
    Number(obj.toString())
}
else{
    Number(obj.valueOf())
}

console.log(Number({
    valueOf:function(){
        return [1,2,3];
    },
    toString:function(){
        return [3];
    }
}))
