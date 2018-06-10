const React = require('react');

const withOptions = require('hocs/options')
const NewOptions = require('./new_option')
const ListOptions = require('./list_options')

class SidebarOptions extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isNew : false,
			newType : props.TYPE_BOOL,
			updateOptionName : null
		}

		this.isNewToggle = this.isNewToggle.bind(this);
		this.newOption = this.newOption.bind(this);
		this.dropOption = this.dropOption.bind(this);
		this.updateOption = this.updateOption.bind(this)
		this.toggleUpdateOption = this.toggleUpdateOption.bind(this)
	}

	isNewToggle() {
		this.setState({
			isNew : !this.state.isNew,
			updateOptionName : null
		})

	}

	newOption(name, value, to) {
		this.setState({ isNew: false })
		this.updateOption(name, value, to)
	}

	dropOption(name) {
		if (confirm(`Удалить ${name}?`)) return;
		this.props.dropOption(name)
	}

	updateOption(name, value, to) {
		this.toggleUpdateOption(null)
		this.props.updateOption(name, value, to)
	}

	toggleUpdateOption(name) {
		this.setState({ 
			updateOptionName: name || null,
			isNew: false
		})
	}

	render() {
		return (
			<div className="sidebar-options">
				<NewOptions active={this.state.isNew} 
					toggle={this.isNewToggle} 
					setOption={this.newOption} />
				<ListOptions/>
			</div>
		);
	}
}

module.exports = withOptions(SidebarOptions)