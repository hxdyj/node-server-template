/**---------------------------  NOTE:  ----------------------------
 *
 *             This is test route for redis and mysql.
 *
 * ----------------------------------------------------------------
 */

/**---------------------------------------------------------------
 *  ROUTES:
 *
 *  1.redis
 *  	http://localhost:3000/set/redis/:key/:value
 *  	http://localhost:3000/get/redis/:key
 *  	http://localhost:3000/del/redis/:key
 *
 *  2.mysql
 * 		http://localhost:3000/set/mysql/test/:name/:age
 *  	http://localhost:3000/get/mysql/:id
 *  	http://localhost:3000/del/mysql/:id
 *
 * ----------------------------------------------------------------
 */



const Test = require("../../mysql/model/Test.model").Test
const cli = require('cli-color')
module.exports = (app, client, mysqlConnect) => {
	var TestService = require('../../mysql/service/Test.service').getInstance(mysqlConnect)

	app.put('/set/redis/:key/:value', function (req, res) {
		client.multi().set(req.params.key, req.params.value).execAsync()
			.then(resp => {
				res.send(resp)
			})
	})

	app.get('/get/redis/:key', function (req, res) {
		client.get(req.params.key, (err, resp) => {

			let result = {}
			result[req.params.key] = resp

			res.send(JSON.stringify(result))
		})
	})

	app.delete('/del/redis/:key', function (req, res) {
		client.del(req.params.key, (err, resp) => {

			if (err) console.log(cli.red.bold('delete error.'), err)
			res.send('delete success.')
		})
	})

	app.put('/set/mysql/test/:name/:age', function (req, res) {
		let test = new Test(req.params.name, req.params.age);
		TestService.addTest(test).then(resp => {
			res.send(resp)

		})
	})

	app.get('/get/mysql/:id', function (req, res) {
		TestService.getTestById(req.params.id).then(resp => {
			res.send(resp)
		})
	})

	app.delete('/del/mysql/:id', function (req, res) {
		TestService.delTestById(req.params.id).then(resp => {
			res.send(resp)
		})
	})

	app.post('/test/upload', function (req, res) {
		if (!req.files)
			return res.status(400).send('No files were uploaded.');
		// The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
		console.log('test upload files:', req.files)
		let sampleFile = req.files.sampleFile;

		// Use the mv() method to place the file somewhere on your server
		sampleFile.mv(`./upload/${sampleFile.name}`, function (err) {
			if (err)
				return res.status(500).send(err);
			res.send('File uploaded!');
		});

	})
}


/**
 *
 * 增：PUT
 *
 * 删：DELETE
 *
 * 改：POST
 * POST表示可能修改变服务器上的资源的请求。
 * POST没有限制，可传较大量的数据
 *
 * 查：GET
 * 用于信息获取，而且应该是安全的和幂等的。
 * 1.幂等：幂等的意味着对同一URL的多个请求应该返回同样的结果
 * 2.安全：它仅仅是获取资源信息，就像数据库查询一样，不会修改，增加数据，不会影响资源的状态。
 * GET请求的数据会附在URL之后（就是把数据放置在HTTP协议头中），以?分割URL和传输数据，参数之间以&相连，
 * 如：login.action?name=hyddd&password=idontknow&verify=%E4%BD%A0%E5%A5%BD。如果数据是英文字母/数字，
 * 原样发送，如果是空格，转换为+，如果是中文/其他字符，则直接把字符串用BASE64加密，得出如：%E4%BD%A0%E5%A5%BD，
 * 其中％XX中的XX为该符号以16进制表示的ASCII。
 * GET方式提交的数据最多只能是1024字节
 *
 *
 */
