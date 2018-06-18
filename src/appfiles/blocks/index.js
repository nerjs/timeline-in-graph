const React = require('react');

class Blocs extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="Blocs">
				{this.props.count} | {this.props.current} | {`${this.props.move}`} 
			</div>
		);
	}
}

module.exports = Blocs