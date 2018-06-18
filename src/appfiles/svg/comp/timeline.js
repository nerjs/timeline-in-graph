const React = require('react');
const pt = require('prop-types')

const Canvas = require('./canvas')
const TimeLineApp = require('./timeline_app')
const Path = require('./path')

class TimeLine extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isMove : false,
			duration: this.props.duration,
			count : this.props.count,
			current: this.props.current,
			last : this.props.current
		}

		this.stopMove = this.stopMove.bind(this)
		this.setCurrent = this.setCurrent.bind(this)
	}


	stopMove() {
		if (this.state.move) return;
		this.setState({
			isMove : false
		})

		this.props.stepAnimate(false)
	}

	componentDidUpdate() {
		if (this.props.current != this.state.current) this.setCurrent(this.props.current, true)
	}


	setCurrent(id, not) {
		if (this.state.isMove || id < 0 || (id > this.state.count - 1) || id == this.state.current) return;
		this.setState({
			current : id,
			last : this.state.current,
			isMove: true
		})

		if (!not) this.props.change(id)

	}

	getCirclesView() {
		const { now, count, radiusBefore, radiusAfter, radiusNow, fillAfter, fillBefore, fillNow } = this.props
		const arr = [];

		for (let i = 0; i < count; i++) {
			if (i > now) arr.push({ fill: fillAfter, r: radiusAfter });
				else if (i < now) arr.push({ fill: fillBefore, r: radiusBefore });
				else arr.push({ fill: fillNow, r: radiusNow });
		}

		return arr;
	}

	render() {
		const { duration, count } = this.props
		return (
			<Canvas id="timeline-svg" width={this.props.size} height={this.props.size}>
				<Path colorLeft={this.props.strokeBefore} 
					sizeLeft={this.props.strokeWidthBefore} 
					colorRight={this.props.strokeAfter} 
					sizeRight={this.props.strokeWidthAfter}/>
				<TimeLineApp {...this.state} 
					duration={duration} 
					count={count} 
					stopMove={this.stopMove} 
					setCurrent={this.setCurrent}
					view={this.getCirclesView()} 
					/>
			</Canvas>
		);
	}
}

TimeLine.defaultProps = {
	count: 0,
	current: 0,
	radius: 10,
	duration: 1000,
	color: '#333',
	onChangeCurrent: new Function(),
	onStopMove: new Function()
}

TimeLine.propTypes = {
	count : pt.number.isRequired,
	current: pt.number.isRequired,
	onChangeCurrent: pt.func,
	onStopMove: pt.func,
	radius: pt.number,
	duration: pt.number,
	color: pt.string
	
}

module.exports = TimeLine