var http=require('http')
var url=require('url')
function start(){
	function onRequest(req,res){
		var pathname=url.parse(req.url).pathname
		console.log("req for ",pathname," received")
		res.writeHead(200,{"Content-Type":"text/plain"})
		res.write("hello world")
		res.end();
	}
	http.createServer(onRequest).listen(8888);
}

exports.start=start;
