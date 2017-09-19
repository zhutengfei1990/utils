//位运算符只对整数起作用
//虽然JavaScript中所有的数值型都是以64位浮点数存储的
//但是做位运算的时候，是以32位带符号的整数进行运算
function toInt32(x) {
    return x | 0; //将x（不管是整数还是小数）转换成32位整数
}

console.log(toInt32(1.001))
console.log(toInt32(66))
console.log(toInt32(Math.pow(2, 32) + 1))
console.log(-2.9 | 0)

console.log(~3) //-4 一个数与自身取反相加等于-1