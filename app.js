const express 	= require('express');
const mysql		= require('mysql');
const app		= express();

const db = mysql.createConnection({
	host 	 : 'localhost',
	user	 : 'root',
	password : '',
	database : 'socka'
});
const {getHomePage} = require('./routes/index');
db.connect((error) => {
	if(error){
		throw error;
	}
	console.log('db connected');
});

global.db = db;
const port = 5000;
app.get('/', getHomePage);
app.listen(port,()=>{
	console.log('connect to ${port}');
});