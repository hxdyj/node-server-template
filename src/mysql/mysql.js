const createConnection = require('typeorm').createConnection
const fs = require('fs')
const path = require('path')
//let mysqlConf = JSON.parse(fs.readFileSync(path.join(__dirname, './mysql.conf')))
let mysqlConf = JSON.parse(fs.readFileSync('./mysql.conf'))
mysqlConf['entitySchemas'] = require('./entity.schemas')
module.exports = (func) => {
	createConnection(mysqlConf).then(connection => {
		func(connection);
	}).catch(error => console.log("Error: ", error));
}
