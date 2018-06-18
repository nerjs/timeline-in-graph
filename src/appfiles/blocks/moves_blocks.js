const React = require('react');

class MovesBlocks extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const style = {
			width: this.props.radius * 2,
			height : this.props.radius * 2,
			top: this.props.offset - this.props.radius
		}

		if (this.props.type == "left") {
			style.left = 0;
			style.marginLeft = `-${this.props.radius}px`
		} else {
			style.right = 0
			style.marginRight = `-${this.props.radius}px`
		}

		return (
			<div className="moves-block" 
				style={style} 
				onClick={this.props.change} > 
			</div>
		);
	}
}

module.exports = MovesBlocks