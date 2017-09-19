console.log(...[1, 2, 3]) //1 2 3
console.log(1, ...[2, 3, 4], 5)//1 2 3 4 5

function push(array, ...items) {
    array.push(...items);
}
var arr = [];
var items = [1, 2, 3, 4];
push(arr, items)
console.log(arr)

function add(x, y) {
    return x + y;
}
var numbers = [4, 38];
console.log(add(...numbers))

const [first, ...rest] = [1, 2, 3, 4, 5]
console.log(first)
console.log(rest);

//转为真正的数组
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
}
//es5
var arr1 = [].slice.call(arrayLike);
//es6
let arr2 = Array.from(arrayLike);
console.log(arr1, arr2);

console.log(Array.from([1,2,,,3],(n)=>n||0));

console.log(Array.of(1,2,3,4))

console.log([1, 2, 3, 4, 5].copyWithin(0, 2))

console.log([1,2,3,4,5].find(n=>n>2))//找出第一个符合条件的元素

console.log([NaN].indexOf(NaN))
console.log([NaN].includes(NaN))
