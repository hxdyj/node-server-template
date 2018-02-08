const Test = require("../entity/Test.entity")
class TestService {
	static getInstance(mysqlConnect) {
		if (!TestService.instance) {
			TestService.instance = new TestService();
			TestService.prototype.mysqlConnect = mysqlConnect
		}
		return TestService.instance;
	}
	addTest(test) {
		return this.mysqlConnect
			.getRepository(Test)
			.save(test)
			.then(test => {
				console.log("Stu has been saved: ", test);
				return test
			});
	}

	getTestById(id) {
		return this.mysqlConnect.getRepository(Test)
			.createQueryBuilder("test")
			.where("test.id = :id", {
				id: id
			})
			.getOne();
	}

	delTestById(id) {
		return this.mysqlConnect.getRepository(Test)
			.createQueryBuilder()
			.delete()
			.from(Test)
			.where("id = :id", {
				id: id
			})
			.execute();
	}

	testAAA() {
		console.log("test single pattern")
	}
}

module.exports = TestService
