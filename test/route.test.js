const assert = require('power-assert');
var request = require('request');
var baseUrl = 'http://localhost:3000/'
describe('TEST 接口测试', () => {
	it('set redis test key', (done) => {
		request({
			method: 'PUT',
			uri: baseUrl + 'set/redis/test/wolp',
		}, function (error, response, body) {
			console.log(body)
			done()
		})

	});
	it('get redis test key', (done) => {
		request.get(baseUrl + 'get/redis/test', function (error, response, body) {
			console.log(body)
			done()
		})
	});

	it('del redis test key', (done) => {
		request.del(baseUrl + 'del/redis/test', function (error, response, body) {
			console.log(body)
			request.get(baseUrl + 'get/redis/test', function (error, response, body) {
				console.log(body)
				done()
			})
		})
	});

	it('set mysql', (done) => {
		request({
			method: 'PUT',
			uri: baseUrl + 'set/mysql/test/sl/24',
		}, function (error, response, body) {
			console.log(body)
			let deleteId = JSON.parse(body).id
			console.log('delete id:', deleteId)
			request.del(baseUrl + 'del/mysql/test/' + deleteId, function (error, response, body) {
				request.get(baseUrl + 'get/mysql/test/' + deleteId, function (error, response, body) {
					console.log(body)
					done()
				})
			})

		})

	});
	it('get mysql', (done) => {
		request.get(baseUrl + 'get/mysql/test/1', function (error, response, body) {
			console.log(body)
			done()
		})
	});

	it('post mysql', (done) => {
		request.post(baseUrl + 'update/mysql/test/', { form: { id: 1, name: 'sl', age: 24 } }, function (error, response, body) {
			console.log(body)
			done()
		});
	});


});
