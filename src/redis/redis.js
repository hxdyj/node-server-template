const fs = require('fs')
const path = require("path")
const bluebird = require("bluebird")//promise化

const redis = require("redis")
const client = redis.createClient(JSON.parse(fs.readFileSync(path.join(__dirname, './redis.conf'))))

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

client.on("error", function (err) {
  console.log("Error " + err)
})
redis.client = client
module.exports = redis.client