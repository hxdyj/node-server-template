/**
 * server 端启动文件
 */

const path = require("path");
const clc = require("cli-color")

const log4js = require("log4js")
log4js.configure(require('./config/log4js.config'));



global.log4server = log4js.getLogger('server')
global.clc = clc
global._ = require('lodash')


//引入redis数据库
const client = require('./redis/redis')
//引入mysql
const mysql = require('./mysql/mysql')((mysqlConnect) => {
	//引入express
	const route = require('./express/express')(client, mysqlConnect)
})
