const path = require('path')
const express = require('express')
const http = require('http')
const app = express()

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

module.exports = (client, mysqlConnect) => { // Redis 和 Mysql 连接对象

  const routeParam = [app, client, mysqlConnect]

  app.get('/', function (req, res) {
    res.send('lalalaalal');
  })
  require('./todo/route.js')(...routeParam)
  let server = http.createServer(app).listen(3000);

}