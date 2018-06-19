const React = require('react');

require('./current.css')

class CurrentContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="current-container">
				CurrentContainer
			</div>
		);
	}
}

module.exports = CurrentContainer