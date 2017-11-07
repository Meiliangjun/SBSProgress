let server = require('./server.js');
let router = require('./router.js');
let requestHandle = require('./requestHandle.js');

// 映射到对应方法解析
var handle = {};
handle['/login'] = requestHandle.login;
handle['/testUpload'] = requestHandle.testUpload;

server.start(router.route, handle);