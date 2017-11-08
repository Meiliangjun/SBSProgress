var http = require('http');
var url = require('url');

function start(route, handle) {
	function onRequest(request, response) {
		
		let pathname = url.parse(request.url).pathname;
		console.log('Request for ' + pathname + 'received.');
		// 转入路由器分发
		try {
			route(handle, pathname, request, response);
		} catch(error) {
			console.log('出现错误:' + error);
		}
	}
	// 创建服务器，并绑定接口和主机地址
	http.createServer(onRequest).listen(8090);
	console.log('Server has started.');
}
 
exports.start = start;
