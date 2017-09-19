var foo = 10;

function bar() {} // // 函数声明
(function baz() {}); // 函数表达式

console.log(
  this.foo == foo, // true
  window.bar == bar // true
);

console.log(baz); // 引用错误，baz没有被定义