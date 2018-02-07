"use strict";

var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var _require = require("typeorm"),
    Entity = _require.Entity,
    PrimaryGeneratedColumn = _require.PrimaryGeneratedColumn,
    Column = _require.Column;

var Test = (_dec = Entity(), _dec2 = PrimaryGeneratedColumn(), _dec3 = Column("varchar"), _dec4 = Column("int"), _dec(_class = (_class2 = function Test(name, age) {
	_classCallCheck(this, Test);

	_initDefineProp(this, "id", _descriptor, this);

	_initDefineProp(this, "name", _descriptor2, this);

	_initDefineProp(this, "age", _descriptor3, this);

	this.name = name;
	this.age = age;
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
	enumerable: true,
	initializer: function initializer() {
		return undefined;
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec3], {
	enumerable: true,
	initializer: function initializer() {
		return "";
	}
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "age", [_dec4], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
})), _class2)) || _class);


module.exports = Test;