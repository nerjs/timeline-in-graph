const React = require('react');

const gp = require('../helpers/get_points')
const Circles = require('./circles')

let index = 0;

class TimelineApp extends React.Component {
	constructor(props) {
		super(props)

		this.countUnswers = 0;
		this._name = `tla_${index++}`
		this.stopAnimate = this.stopAnimate.bind(this)
	}



	stopAnimate() {
		if (!this.props.isMove) return;
		this.countUnswers = this.countUnswers + 1;

		if (this.countUnswers >= this.props.count) {
			this.props.stopMove();
			this.countUnswers = 0;
		}
	}

	render() {

		const points = gp(this.props.count, this.props.current)
		const lastPoints = gp(this.props.count, this.props.last)
		return (
			<g id={this._name} className={`circles_app ${this.props.isMove ? 'ismove' : ''}`}>
				{points.map( (p, i) => (
					<Circles 
						key={i} 
						id={`circle_${i}`} 
						move={this.props.isMove} 
						x={p.x} 
						y={p.y} 
						lx={lastPoints[i].x} 
						ly={lastPoints[i].y} 
						r={this.props.view[i].r} 
						fill={this.props.view[i].fill} 
						duration={this.props.duration} 
						stop={this.stopAnimate}
						onClick={()=>this.props.setCurrent(i)} />
				))}
			</g>
		);
	}
}

module.exports = TimelineApp