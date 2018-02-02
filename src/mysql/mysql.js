const createConnection = require('typeorm').createConnection
const fs = require('fs')
const path = require('path')

let mysqlConfPath = path.join(__dirname, './mysql.conf')
if (typeof (PRODUCTION) != 'undefined') mysqlConfPath = './mysql.conf'
const mysqlConf = JSON.parse(fs.readFileSync(mysqlConfPath))

mysqlConf['entitySchemas'] = require('./entity.schemas')
module.exports = (func) => {
	createConnection(mysqlConf).then(connection => {
		let msg = 'connect mysql success.'
		console.log(clc.green.bold(msg))
		log4server.info(msg)
		func(connection);
	}).catch(error => {
		console.log(clc.red.bold("connect mysql error."), error)
		log4server.info(msg, error)
	});
}
