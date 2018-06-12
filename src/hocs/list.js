const { withMaps } = require('./hoc')
const Item = require('data/item')
const { SORT_CONFLICT_DROP_LOG } = Item

const LIST_DIRECTION = 'LIST_DIRECTION';
const LIST_ADD = 'LIST_ADD';
const LIST_REMOVE = 'LIST_REMOVE';
const LIST_UPDATE = 'LIST_UPDATE';

const mapStateToProps = ({ main: { direction }, list}) => ({
	direction,
	list : Item.sort(list.map(item => Item.c(item)), (direction == 'up'), SORT_CONFLICT_DROP_LOG)
})


const listAction = (disp, type, payload) => disp({ type, payload})
const itemAction = (disp, type, data) => {
	try {
		const payload = List.c(data);
		listAction(disp, type, payload)
	} catch(e) {
		console.error(e)
	}
}

const mapDispatchToProps = disp => ({
	addItem : data => itemAction(disp, LIST_ADD, data),
	removeItem : name => listAction(disp, LIST_REMOVE, name),
	updateItem : data => itemAction(disp, LIST_UPDATE, data),
	toggleDirection : direction => listAction(disp, LIST_DIRECTION, direction == 'down' ? 'down' : 'up')
})



exports = module.exports = withMaps(mapStateToProps, mapDispatchToProps)

exports.LIST_DIRECTION = LIST_DIRECTION;
exports.LIST_ADD = LIST_ADD;
exports.LIST_REMOVE = LIST_REMOVE
exports.LIST_UPDATE = LIST_UPDATE

