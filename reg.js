var rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?([^?#]*))?/;
var href="http://www.cnblogs.com/myvin/p/4907318.html?query=abc#aa";

console.log(rurl.exec(href));
