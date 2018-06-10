const { withMaps } = require('./hoc')

const TAB_TOGGLE = 'TAB_TOGGLE',
	  RELOAD_EL = 'RELOAD_EL';

const mstp = ({ main }) => ({ ...main })
const mdtp = disp => ({
	tabOpen : tab => disp({type:TAB_TOGGLE,payload:tab}),
	reloadEl : () => disp(RELOAD_EL)
})

module.exports = withMaps(mstp, mdtp)
module.exports.actions = {
	TAB_TOGGLE,
	RELOAD_EL,
}