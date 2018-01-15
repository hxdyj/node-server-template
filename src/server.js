/**
 * server 端启动文件
 */
const path = require("path");
//引入redis数据库
const client = require('./redis/redis')
//引入mysql
const mysql = require('./mysql/mysql')((mysqlConnect) => {
	//引入express
	const route = require('./express/express')(client, mysqlConnect)
})
