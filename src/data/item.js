
const SORT_CONFLICT_THROW            = 1;
const SORT_CONFLICT_RETURN_DATA      = 2;
const SORT_CONFLICT_RETURN_DATA_LOG  = 3;
const SORT_CONFLICT_RETURN_NULL      = 4;
const SORT_CONFLICT_RETURN_NULL_LOG  = 5;
const SORT_CONFLICT_RETURN_EMPTY     = 6;
const SORT_CONFLICT_RETURN_EMPTY_LOG = 7;
const SORT_CONFLICT_DROP             = 8;
const SORT_CONFLICT_DROP_LOG         = 9;


class ListItem {
	constructor(name, st, et, data) {
		this.data = data
		this.name = name;
		this.startTime = new Date(st);
		this.endTime = new Date(et);

		if (isNaN(this.startTime.getTime()) || isNaN(this.endTime.getTime())) throw new Error('(name, startTime, endTime,...) startTime & endTime must be Date');

		this.st = this.startTime.getTime();
		this.et = this.endTime.getTime();

		if (this.st > this.et) throw new Error('(name, startTime, endTime,...) startTime should be less than endTime')


		if (typeof this.data != 'object') this.data = {};

		this.interval = this.et - this.st;
	}
// текущий
	get active() {
		return this.st < Date.now() && this.et > Date.now();
	}
// прошедший
	get past() {
		return this.et < Date.now()
	}
// будущий
	get future() {
		return this.st > Date.now()
	}
// осталось
	get remained() {
		if (this.past) return -1;
		let time = this.active ? this.et : this.st;
		return time - Date.now();
	}
// прошло
	get passed() {
		if (this.future) return -1;
		let time = this.active ? this.st : this.et;
		return Date.now() - time
	}

	conflict(item) {
		let err = null
		if (!(item instanceof ListItem)) {
			err = new Error('item must be instanceof ListItem')
		} 
		if (item.name == this.name) {
			err = new Error(`item.name must be unique (${item.name})`)
		} 
		if ((item.st < this.st && item.et > this.st) 
			|| (item.et > this.et && item.st < this.et) 
			|| (item.st > this.st && item.et < this.et) 
			|| item.st == this.st 
			|| item.et == this.et) {
			err = new Error(`diapazon conflict (${this.name} - ${item.name})`); 
		}

		if (err) {
			err.itemName = item.name;
		}

		return err;
	}

	getObject() {
		const { name, startTime, endTime, data } = this;
		return { name, startTime, endTime, data}
	}

}

ListItem.conflict = (item1, item2=true, log=true) => {
	if (Array.isArray(item1)) {
		log = item2;
		let err = [];
		item1.reduce((arr, item) => {
			arr.forEach(it => {
				let e = ListItem.conflict(item, it)
				if (e) {
					err.push(e);
					if (log) console.error(e)
				}
			})

			return [...arr, item]
		}, [])
		if (err.length == 0) {
			err = null;
		} 
		return err;
	}
	if (!(item1 instanceof ListItem)) {
		const error = new Error('item must be instanceof ListItem')
		error.itemName = item1.name;
		return error
	}
	return item1.conflict(item2)
}

const isLog = isType => ([SORT_CONFLICT_RETURN_DATA_LOG, SORT_CONFLICT_RETURN_NULL_LOG, SORT_CONFLICT_RETURN_EMPTY_LOG, SORT_CONFLICT_DROP_LOG].indexOf(isType) >= 0)

ListItem.sort = (arr=[], napr=true, isType=SORT_CONFLICT_THROW) => {
	if (!Array.isArray(arr)) throw new Error('(items, ...) item must be Array');

	const errors = ListItem.conflict(arr, isLog(isType)) 
	if (errors) {
		switch (isType) {
			case SORT_CONFLICT_THROW: throw new Error('list has conflicts')
			case SORT_CONFLICT_RETURN_DATA: return arr;
			case SORT_CONFLICT_RETURN_EMPTY: return [];
			case SORT_CONFLICT_RETURN_NULL: return null;
		}
		let errNames = errors.map( e => e.itemName)
		const items = arr.filter( it => errNames.indexOf(it.name) < 0)

		return ListItem.sort(items, napr, isType)
	}

	const sorted = arr.sort((prev, next) => prev.st > next.st ? 1 : -1)
	if (!napr) sorted.reverse()
	return sorted
}

ListItem.c = item => {
	if (!item || typeof item != 'object') throw new TypeError('data in ListItem must be Object');
	return new ListItem(item.name, item.startTime, item.endTime, item.data)
}

ListItem.SORT_CONFLICT_THROW = SORT_CONFLICT_THROW
ListItem.SORT_CONFLICT_DROP = SORT_CONFLICT_DROP
ListItem.SORT_CONFLICT_RETURN_NULL = SORT_CONFLICT_RETURN_NULL
ListItem.SORT_CONFLICT_RETURN_EMPTY = SORT_CONFLICT_RETURN_EMPTY
ListItem.SORT_CONFLICT_RETURN_DATA = SORT_CONFLICT_RETURN_DATA
ListItem.SORT_CONFLICT_DROP_LOG = SORT_CONFLICT_DROP_LOG
ListItem.SORT_CONFLICT_RETURN_EMPTY_LOG = SORT_CONFLICT_RETURN_EMPTY_LOG
ListItem.SORT_CONFLICT_RETURN_NULL_LOG = SORT_CONFLICT_RETURN_NULL_LOG
ListItem.SORT_CONFLICT_RETURN_DATA_LOG = SORT_CONFLICT_RETURN_DATA_LOG

module.exports = ListItem