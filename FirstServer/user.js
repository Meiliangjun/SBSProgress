const fs = require('fs');

function handleUserInfo(callback) {
	console.log('handle user info from file.');
	fs.readFile('UserInfo.json', callback);
	// fs.open('UserInfo.json', 'r+', (err, fd) {
	// 	if (err) {
	// 		if (err.code == 'ENOENT') {
	// 			console.log('UserInfo.json 文件不存在');
	// 			return;
	// 		}

	// 		throw(err);
	// 	}
	// 	console.log('读取文件内容')

	// 	// 读取文件内容
	// 	fs.readFile('UserInfo.json', 'utf8', callback);
	// })
}

exports.userInfo = handleUserInfo;