const URL = require('url');
const User = require('./user.js');

function login(request, response) {
	// console.log('Request handler \'getUserInfo\' was called.');
	User.userInfo(function(err, data) {
		if (err) {
			throw(err);
		}
		// console.log('从文件中获取到的数据为：' + data);
	});

	let queryList = URL.parse(request.url, true).query;
	// console.log('get user name: ' + queryList.name);
	let name = queryList.name;
	let password = queryList.password;
	let dataSource = {'mei': 19, 'zhou': 32};

	response.writeHead(200, {'Content-Type': 'text/json'});

	if (!name || !password) {
		// throw(new Error('名字或者密码为空!'));
		response.write(JSON.stringify({'result': false, 'errorCode': 1001}));
		// console.log('名字或者密码为空');
	}
	else {
		response.write(JSON.stringify({'name':name, 'age':dataSource[name], 'result': true}));
		// console.log('名字或者密码不为空');
	}

	// console.log('name: ' + name + '\nage: ' + dataSource[name]);
	
	response.end();
}

// function test(request, response) {
// 	// console.log('Request handler test');

// 	let queryList = URL.parse(request.url, true).query;
// 	// console.log('loginName: ' + queryList.loginName + '\npassword: ' + queryList.password);
// }

function myLovely(request, response) {
	response.writeHead(200, {'Content-Type':'text/json'});
	response.write(JSON.stringify({'content':'You are my loverly!'}));
	response.end();
}

exports.login = login;
exports.myLovely = myLovely;
// exports.testUpload = test;