const React = require('react');

class TimerComponent extends React.Component {
	constructor(props) {
		super(props)

		this._timers = []
	}
	clear(id) {
		if (this._timers.indexOf(id) < 0) return;
		
		this._timers = this._timers.filter( i => {
			if (i == id) {
				clearInterval(i)
				clearTimeout(i)
				return false
			}
			return true;
		})
	}

	componentWillUnmount() {
		this._timers.forEach(id=>this.clear(id))
	}

	timer(fn,t=0) {
		const id = setTimeout(()=> {
			fn()
			this.clear(id)
		},t)
		this._timer.push(id)
	}

	interval(fn,t=0) {
		const id = setInterval(()=> {
			fn()
			this.clear(id)
		},t)
		this._timer.push(id)
	}
}

module.exports = TimerComponent