const React = require('react');

const Svg = require('./svg')
const Blocs = require('./blocks')

class Timeline extends React.Component {
	constructor(props) {
		super(props)

		this.state = {...this.props}
	}

	render() {
		return (
			<div className="Timeline">
				
			</div>
		);
	}
}

module.exports = Timeline