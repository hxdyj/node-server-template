const fs = require('fs')
const path = require("path")
const bluebird = require("bluebird") //promise化
const redis = require("redis")

let redisConfPath = path.join(__dirname, './redis.conf')
if (typeof (PRODUCTION) != 'undefined') redisConfPath = './redis.conf'
let client = redis.createClient(JSON.parse(fs.readFileSync(redisConfPath)))

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

client.on("error", function (err) {
	console.log(clc.red.bold('Redis Connect Error.'), err)
})
client.on("connect", function (err) {
	let msg = 'Redis Connect Success.'
	console.log(clc.green.bold(msg))
	log4server.info(msg)
})
redis.client = client
module.exports = redis.client
