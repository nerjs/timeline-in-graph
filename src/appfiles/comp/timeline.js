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

		this.props.onStopMove()
	}


	setCurrent(id) {
		if (this.state.isMove || id < 0 || (id > this.state.count - 1) || id == this.state.current) return;
		this.setState({
			current : id,
			last : this.state.current,
			isMove: true
		})

		this.props.onChangeCurrent(id)

	}

	

	render() {
		return (
			<Canvas width={400} height={400}>
				<Path colorLeft="#000" sizeLeft={5} colorRight="#555" sizeRight={3}/>
				<TimeLineApp {...this.state} 
					stopMove={this.stopMove} 
					setCurrent={this.setCurrent} 
					radius={this.props.radius} 
					color={this.props.color} />
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
	
	// ~ = React.propTypes || require('prop-types')
	// key       : ~.[ string | number | array | bool | func | object | symbol | node | any ]
	// Any_and_isRequired : ~.any.isRequired
	// reactElement : ~.element
	// inherit   : ~.instanceOf(Class)
	// oneOf     : ~.oneOf([ 'first', 'second' ])
	// oneOfType : ~.oneOfType([ ~.number, ~.string, ... ])


	// массив, состоящий из определенных типов
	// arrayOf   : ~.arrayOf(~.any)

	// Объект со значениями свойств определенного типа
	// objectOf  : ~.objectOf(~.any)

	// Обьект-схема с четко указаными ключ-тип
	// shape : ~.shape({
	// 	  string : ~.string,
	//    number : ~.number,
	//    any    : ~.any
	// })
}

module.exports = TimeLine