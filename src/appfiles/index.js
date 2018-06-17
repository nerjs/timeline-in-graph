const React = require('react');

const list = require('../data/list')
const options = require('../data/options')

const TimeLine = require('./comp/timeline')



class AppCore extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 4,
			current:0,
			is : true
		}
	}

	toggle() {
		this.setState({is:false})
		setTimeout(()=>this.setState({is:true}),100)
	}

	getControll() {
		return (
			<div className="controll">
				<div className="info" 
					onClick={()=>this.toggle()}>
					<b>{this.state.count}</b>
					 - 
					<b>{this.state.current}</b>
				</div>
				<div className="btns">
					<div className="minus" 
						onClick={()=>this.setState({current:this.state.current == 0 ? 0 : this.state.current-1})}>-</div>
					<input type="number" defaultValue={this.state.count} 
						onChange={e=>this.setState({count:(Number(e.target.value) < 0 ? 0 : Number(e.target.value))})}/>
					<div className="plus" 
						onClick={()=>this.setState({current:this.state.current == (this.state.count - 1) ? this.state.current : this.state.current+1})}>+</div>
				</div>
			</div>
		)
	}

	render() {
		const { count, current } = this.state
		return (
			<div className="app-core" onKeyDown={e => console.log(e)}>
				{this.getControll()}
				{this.state.is && <TimeLine duration={1000} onChangeCurrent={cur=>this.setState({current:cur})} count={this.state.count} current={this.state.current} />}
			</div>
		);
	}
}

module.exports = AppCore