const React = require('react');

const CoreApp = require('./appfiles')
const options = require('./data/options')
const list = require('./data/list')

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="app-container">
				<CoreApp {...options} list={list} />
			</div>
		);
	}
}

module.exports = App