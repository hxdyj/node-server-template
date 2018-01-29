var request = require("request");
class CommonUtil {
	constructor() {

	}

	static getCurrentTime() {
		//获取时间API
		//淘宝：http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp
		//苏宁：http://quan.suning.com/getSysTime.do
		return new Promise((resolve, reject) => {
			request(
				"http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
				function (error, response, body) {
					resolve(JSON.parse(body));
				}
			);
		});
	}

}

module.exports = CommonUtil
