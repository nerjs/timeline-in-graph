const React = require('react');

class CurrentBlock extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="current-block" style={{
				top: `-${this.props.radius}px`,
				left: (this.props.size * 0.8) / 2 - this.props.radius,
				width: this.props.radius * 2,
				height: this.props.radius * 2,
			}}>
			</div>
		);
	}
}

module.exports = CurrentBlock