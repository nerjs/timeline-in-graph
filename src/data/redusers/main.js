const { actions: { TAB_TOGGLE }} = require('hocs/tabs')

const defState = {
	openTab : 'options',
	active : true
}

module.exports = (state=defState, action) => {
	switch (action.type) {
		case TAB_TOGGLE : return {...state, openTab: action.payload};
		case 'INACTIVE_EL': return {...state, active: false};
		case 'ACTIVE_EL': return {...state, active: true};
	}
	return state;
}