const { withMaps } = require('./hoc')

const OPTION_UPDATE = 'OPTION_UPDATE'
const OPTION_DROP = 'OPTION_DROP'
const TYPE_STRING = 1;
const TYPE_NUMBER = 2;
const TYPE_BOOL = 3;
const TYPES_SCHEMA = {
	string : TYPE_STRING,
	number : TYPE_NUMBER,
	bool : TYPE_BOOL
}

const parseTypeValue = (value, to) => {
	switch (to) {
		case TYPE_STRING: return value && value.toString ? value.toString() : '';
		case TYPE_NUMBER: return value && !isNaN(Number(value)) ? Number(value) : 0;
		case TYPE_BOOL: return !!value;
	}
	return value;
}


parseTypeValue.TYPE_STRING = TYPE_STRING;
parseTypeValue.TYPE_NUMBER = TYPE_NUMBER;
parseTypeValue.TYPE_BOOL = TYPE_BOOL;
parseTypeValue.TYPES_SCHEMA = TYPES_SCHEMA

const mapStateToProps = ({ options }) => ({
	options,
	TYPE_STRING,
	TYPE_NUMBER,
	TYPE_BOOL,
	TYPES_SCHEMA
})

const mapDispatchToProps = disp => ({
	updateOption : (name, value, to) => disp({
		type : OPTION_UPDATE,
		payload : { name, value : parseTypeValue(value, to) }
	}),
	dropOption : name => disp({
		type : OPTION_DROP,
		payload : name
	})
})

exports = module.exports = withMaps(mapStateToProps, mapDispatchToProps)

exports.OPTION_UPDATE = OPTION_UPDATE
exports.OPTION_DROP = OPTION_DROP
exports.parseTypeValue = parseTypeValue
exports.TYPE_STRING = TYPE_STRING;
exports.TYPE_NUMBER = TYPE_NUMBER;
exports.TYPE_BOOL = TYPE_BOOL;
exports.TYPES_SCHEMA = TYPES_SCHEMA;