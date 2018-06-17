const React = require('react');

const cp = require('../helpers/calculate_points')


class Circles extends React.Component {
	constructor(props) {
		super(props) 

		this.state = {
			move: false,     // is Move
			cx : 0,          // current X point
			cy : 0,          // current Y point
			lx : 0,          // enter(last) X point
			ly : 0,          // enter(last) Y point
			nx : 0,          // exit(next) X point
			ny : 0,          // exit(next) Y point
			d  : 0,          // duration
			et : Date.now()  // exit Date point
		}
	}

	componentDidUpdate() {
		if (this.state.move) {
			this.tid = setTimeout(()=> {
				this.loop()
			},5)
		}
	}

	componentWillUnmount() {
		clearTimeout(this.tid)
	}

	componentWillReceiveProps({ move, x, y, lx, ly }) {
		if (move && !this.state.move) {
			const { duration } = this.props;

			this.state.move = true
			this.state.lx = this.state.cx = lx
			this.state.ly = this.state.cy = ly
			this.state.nx = x;
			this.state.ny = y;
			this.state.d = x == lx ? parseInt(duration * 0.5, 10) : duration;
			this.state.et = Date.now() + this.state.d;
		} else if (!move && this.state.move) {
			this.state.move = false;
		} 
	}

	stop() {
		this.setState({
			move : false
		})

		this.props.stop()
	}

	loop() {
		if (Date.now() >= this.state.et) return this.stop()
		const { x, y } = cp(this.state);
		if (x == this.state.nx && y == this.state.ny) return this.stop();

		this.setState({
			cx : x,
			cy : y
		})
	}

	getProps() {
		if (!this.state.move) return this.props;

		const { id, fill, r } = this.props
		const { cx: x, cy: y} = this.state;
		const onClick = () => {};

		return { id, fill, r, x, y, onClick}
	}

	render() {
		const { id, r, x, y, fill, onClick} = this.getProps()
		return (
			<circle
				id={`${id}`} 
				className="circle-static" 
				r={r} 
				cx={x} 
				cy={y} 
				fill={fill} 
				onClick={onClick}
			/>	
		)
	}
}

// const Circles = ({ x, y, lx, ly, r, id, move, fill, duration, onClick}) => (
// 	<React.Fragment>
// 		{move && console.log('move') && ' '}
// 		<circle
// 			id={`${id}`} 
// 			className="circle-static" 
// 			r={r} 
// 			cx={x} 
// 			cy={y} 
// 			fill={fill} 
// 			onClick={onClick}
// 			/>
// 		{ move && <CircleAnim id={`${id}_anim_${getIndex()}`} {...{ x, y, lx, ly, r, fill, duration }} />}
// 	</React.Fragment>
// )


module.exports = Circles