const path = require('path')
const express = require('express')
const http = require('http')
const app = express()
const fileUpload = require('express-fileupload');

app.use(fileUpload());
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
	let server = http.createServer(app).listen(3000);

}
