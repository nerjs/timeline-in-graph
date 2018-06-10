
module.exports = store => next => action => {
	switch (action.type) {
		case 'RELOAD_EL':
			store.dispatch('INACTIVE_EL')
			setTimeout(()=>store.dispatch('ACTIVE_EL'),1000)
		break;
		default: return next(action)
	}
}