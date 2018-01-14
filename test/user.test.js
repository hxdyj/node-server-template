const assert = require('power-assert');
const obj = {
    arr: [1, 2, 3],
    number: 10
};
var request = require('request');


describe('User接口测试', () => {
    it('redis get user by user id', (done) => {
        request.get('http://localhost:3000/get/test/test', function (error, response, body) {
            assert.equal(JSON.parse(body).name, "WOPL2")
            done()
        });
    });
});