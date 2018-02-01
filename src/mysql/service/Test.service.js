const Test = require("../model/Test.model").Test
class TestAction {
	static getInstance(mysqlConnect) {
		if (!TestAction.instance) {
			TestAction.instance = new TestAction();
			TestAction.prototype.mysqlConnect = mysqlConnect
		}
		return TestAction.instance;
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
			.where("test.id = :id", { id: id })
			.getOne();
	}

	delTestById(id) {
		return this.mysqlConnect.getRepository(Test)
			.createQueryBuilder()
			.delete()
			.from(Test)
			.where("id = :id", { id: id })
			.execute();
	}

	testAAA() {
		console.log("test single pattern")
	}
}

module.exports = TestAction
