const path = require('path');
const express = require('express');
const http = require('http');
const app = express();
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

app.use(fileUpload());
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.locals.title = "wing's express server template";

//config static file preview server
app.use(
	'/upload/',
	express.static(path.join(__dirname, '../../upload'), {
		dotfiles: 'allow'
	})
);
app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Methods',
		'PUT, GET, POST, DELETE, OPTIONS'
	);
	res.header('Access-Control-Allow-Headers', 'X-Requested-With');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

module.exports = (client, mysqlConnect) => {
	// Redis 和 Mysql 连接对象

	// const routeParam = [app, client, mysqlConnect]

	app.get('/', function(req, res) {
		res.send('lalalaalal');
	});
	app.post('/test/upload', function(req, res) {
		if (!req.files) return res.status(400).send('No files were uploaded.');
		// The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
		console.log('test upload files:', req.files);
		let sampleFile = req.files.sampleFile;

		// Use the mv() method to place the file somewhere on your server
		sampleFile.mv(
			path.join(__dirname, `./upload/${sampleFile.name}`),
			function(err) {
				if (err) return res.status(500).send(err);
				res.send('File uploaded!');
			}
		);
	});
	// require('./test/route.js')(...routeParam)

	let msg = 'server start success.';

	let server = http.createServer(app).listen(3000);

	//require socket util to test.
	// require('../util/socket')(server)

	console.log(clc.green.bold(msg));
	log4server.info(msg);
};
