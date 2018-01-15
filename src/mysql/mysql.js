const createConnection = require('typeorm').createConnection
const fs = require('fs')
const path = require('path')

let mysqlConfPath = path.join(__dirname, './mysql.conf')
if (typeof (PRODUCTION) != 'undefined') mysqlConfPath = './mysql.conf'
const mysqlConf = JSON.parse(fs.readFileSync(mysqlConfPath))

mysqlConf['entitySchemas'] = require('./entity.schemas')
module.exports = (func) => {
  createConnection(mysqlConf).then(connection => {
    func(connection);
  }).catch(error => console.log("Error: ", error));
}
