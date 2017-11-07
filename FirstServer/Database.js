const sqlite = require('sqlite3').verbose();

let memoryDB = sqlite.Database(":memory:");
let db = sqlite.Database('db.sqlite');

function createUserTable(callback) {
	console.log('create user table');
	db.run('create table user_table(id integer primary key autoincrement, name text, age integer)');
}

db.close();


