const Test = require("../../mysql/model/Test.model").Test

module.exports = (app, client, mysqlConnect) => {
  var TestService = require('../../mysql/service/Test.service').getInstance(mysqlConnect)
  app.get('/set/test/:name', function (req, res) {
    client.multi().set('test', req.params.name).execAsync()
      .then(resp => {
        res.json(resp)
      })
  })

  app.get('/get/test/:name', function (req, res) {
    client.get(req.params.name, (err, resp) => {
      let test = new Test("sl", 16);
      TestService.addTest(test)
      res.send(JSON.stringify({
        "name": resp
      }))
    })
  })
  app.delete('/get/test/:name', function (req, res) {
    client.get(req.params.name, (err, resp) => {
      let test = new Test("sl", 16);
      TestService.addTest(test)
      res.send(JSON.stringify({
        "name": resp
      }))
    })
  })
}