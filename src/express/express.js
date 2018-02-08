const path = require('path')
const express = require('express')
const http = require('http')
const app = express()
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }))
app.locals.title = "wing's express server template"

//config static file preview server
app.use('/upload/', express.static(path.join(__dirname, '../../upload'), {
	dotfiles: 'allow'
}));
app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

module.exports = (client, mysqlConnect) => { // Redis 和 Mysql 连接对象

	const routeParam = [app, client, mysqlConnect]

	app.get('/', function (req, res) {
		res.send('lalalaalal');
	})
	require('./test/route.js')(...routeParam)

	let msg = 'server start success.'

	let server = http.createServer(app).listen(3000);


	//require socket util to test.
	require('../util/socket')(server)

	console.log(clc.green.bold(msg))
	log4server.info(msg)



}
