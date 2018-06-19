const React = require('react');
const propTypes = require('prop-types');


require('./timeline.css')

const Svg = require('./svg')
const Blocks = require('./blocks')

class Timeline extends React.Component {
	constructor(props) {
		super(props)

		const { list, onChange, onAnimate, ...state } = props

		this.state = { ...state, count : list.length, move : false, last: 0 }

		this.config = {...props}

		this.change = this.change.bind(this)
		this.stepAnimate = this.stepAnimate.bind(this)
	}

	change(i) {
		if (i < 0 || (i > this.state.count - 1) || i == this.state.current || this.state.move) return;

		this.setState({
			current : i,
			last : this.state.current
		})

		this.stepAnimate(true)

		if (this.config.onChange) {
			this.config.onChange(i)
		}
	}

	stepAnimate(t) {
		const type = !!t

		if (t == this.state.move) return;

		this.setState({
			move : type
		})

		if (this.config.onAnimate) {
			this.config.onAnimate(type)
		}
	}

	render() {
		const { strokeBefore, strokeAfter, strokeWidthBefore, strokeWidthAfter, fillAfter, fillBefore, fillNow, ...state } = this.state;
		return (
			<div id="timeline" style={{
				width: this.config.size,
				height: this.config.size
			}}>
				<Svg {...this.state} 
					change={this.change} 
					stepAnimate={this.stepAnimate} />
				<Blocks {...state} 
					list={this.config.list} 
					change={this.change} 
					currentContainer={this.props.currentContainer} 
					innerContainer={this.props.innerContainer} />
			</div>
		);
	}
}

Timeline.defaultProps = {
	current           : 0,
	now               : 0,
	duration          : 3000,
	size              : 500,
	strokeBefore      : '#333333',
	strokeWidthBefore : 4,
	strokeAfter       : '#555555',
	strokeWidthAfter  : 2,
	fillBefore        : '#222222',
	fillAfter         : '#444444',
	fillNow           : '#000000',
	radiusBefore: 10,
	radiusAfter: 10,
	radiusNow: 10
}

Timeline.propTypes = {
	current           : propTypes.number,
	now               : propTypes.number,
	list              : propTypes.array.isRequired,
	duration          : propTypes.number,
	size              : propTypes.number,
	strokeBefore      : propTypes.string,
	strokeWidthBefore : propTypes.number,
	strokeAfter       : propTypes.string,
	strokeWidthAfter  : propTypes.number,
	fillBefore        : propTypes.string,
	fillAfter         : propTypes.string,
	fillNow           : propTypes.string,
	radiusBefore      : propTypes.number,
	radiusAfter       : propTypes.number,
	radiusNow         : propTypes.number,
	onChange          : propTypes.func,
	onAnimate         : propTypes.func,
	innerContainer    : propTypes.func,
	currentContainer  : propTypes.func
}

module.exports = Timeline