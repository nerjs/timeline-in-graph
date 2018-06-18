const React = require('react');

const Timeline = require('./timeline')
const Controlls = require('./controlls')
const list = require('../data/list')
const options = require('../data/options')

class CoreTimeline extends React.Component {
	constructor(props) {
		super(props)

		this.state = {...options, list : list(5), _is: true}

		this.controll = this.controll.bind(this)
		this.reload = this.reload.bind(this)
	}

	controll(name, value) {
		this.setState({
			[name] : value
		})
	}

	reload() {
		this.setState({
			_is : false
		})

		setTimeout(()=>this.setState({
			_is : true
		}),100)
	}

	componentDidCatch(err) {
		console.error(err)
	}

	render() {
		const { _is, ...state} = this.state;
		return (
			<div className="app-core">
				<Controlls {...state} controll={this.controll} reload={this.reload} createList={list}/>
				<div className="work-dir">
					{this.state._is && <Timeline {...state} />}
				</div>
			</div>
		);
	}
}

module.exports = CoreTimeline