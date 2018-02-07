var { Entity, PrimaryGeneratedColumn, Column } = require("typeorm")
@Entity()
class Test {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	@PrimaryGeneratedColumn()
	id = undefined

	@Column("varchar")
	name = ""

	@Column("int")
	age = 0
}

module.exports = Test


