const Test = require("../model/Test.model").Test
class TestAction {
    static getInstance(mysqlConnect) {
        if (!TestAction.instance) {
            TestAction.instance = new TestAction();
            TestAction.prototype.mysqlConnect = mysqlConnect
        }
        return TestAction.instance;
    }
    async addTest(test) {
        this.mysqlConnect
            .getRepository(Test)
            .save(test)
            .then(test => {
                console.log("Stu has been saved: ", test);
            });
    }
    testAAA() {
        console.log("test single pattern")
    }
}

module.exports = TestAction