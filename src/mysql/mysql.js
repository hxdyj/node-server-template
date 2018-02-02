const createConnection = require('typeorm').createConnection
const fs = require('fs')
const path = require('path')

let mysqlConfPath = path.join(__dirname, './mysql.conf')
if (typeof (PRODUCTION) != 'undefined') mysqlConfPath = './mysql.conf'
const mysqlConf = JSON.parse(fs.readFileSync(mysqlConfPath))

mysqlConf['entitySchemas'] = require('./entity.schemas')
module.exports = (func) => {
	createConnection(mysqlConf).then(connection => {
		console.log(clc.green.bold("Connect Mysql Success."))
		func(connection);
	}).catch(error => console.log(clc.red.bold("Connect Mysql Error."), error));
}
