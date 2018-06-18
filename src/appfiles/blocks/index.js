const React = require('react');

class Blocs extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="Blocs" onClick={()=>this.props.change(this.props.current + 1)}>
				{this.props.count} | {this.props.current} | {this.props.last} | {`${this.props.move}`} 
			</div>
		);
	}
}

module.exports = Blocs