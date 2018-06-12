const { actions: { TAB_TOGGLE }} = require('hocs/tabs')
const { LIST_DIRECTION } = require('hocs/list')

const defState = {
	openTab : 'list',
	active : true,
	direction : 'up'
}

module.exports = (state=defState, action) => {
	switch (action.type) {
		case TAB_TOGGLE : return {...state, openTab: action.payload};
		case 'INACTIVE_EL': return {...state, active: false};
		case 'ACTIVE_EL': return {...state, active: true};
		case LIST_DIRECTION: return {...state, direction: action.payload}
	}
	return state;
}