var request = require("request");


class CommonUtil {
	constructor() {

	}

	//获取时间API
	static getCurrentTime() {
		let urlTaoBao = 'http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp'//淘宝
		let urlSuNing = 'http://quan.suning.com/getSysTime.do'//苏宁

		return new Promise((resolve, reject) => {
			request(
				urlTaoBao,
				function (error, response, body) {
					resolve(JSON.parse(body));
				}
			);
		});
	}

}

module.exports = CommonUtil
