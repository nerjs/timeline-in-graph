const { LIST_ADD, LIST_REMOVE, LIST_UPDATE } = require('hocs/list')

const defState = []



module.exports = (state=defState, { type, payload }) => {
	switch (type) {
		case LIST_ADD: return payload && payload.name ? [...state, payload] : state;
		case LIST_REMOVE: return state.filter( item => (item.name != payload));
		case LIST_UPDATE: return payload && payload.name ? state.map( item => (item.name == payload.name ? payload : item)) : state;
	}
	return state;
}