const { OPTION_UPDATE, OPTION_DROP } = require('hocs/options')

const defState = {
	test1 : true,
	test2 : 'qwerty',
	test3 : 123,
	test4 : null
}

module.exports = (state=defState, action) => {
	switch (action.type) {
		case OPTION_UPDATE: return {
			...state,
			[action.payload.name] : action.payload.value
		};
		case OPTION_DROP: 
			if (state[action.payload] === undefined) return state;
			const ns = {...state};
			delete ns[action.payload];
			return ns;
		break;
	}
	return state;
}