var {
    Entity,
    PrimaryGeneratedColumn,
    Column
} = require("typeorm");

var Test = require('../model/Test.model').Test

module.exports = {
    target: Test,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        },
        age: {
            type: "int"
        }
    }
};