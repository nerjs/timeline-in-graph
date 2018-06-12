const React = require('react');
const withList = require('hocs/list')

const Header = require('./list_header')
const NewItem = require('./new_item')
const ListItems = require('./list_items')

class SidebarList extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			openNew : false,
			openItem : null
		}

		this.openItemHandler = this.openItemHandler.bind(this)
		this.openNewHandler = this.openNewHandler.bind(this)
		this.itemUpdate = this.itemUpdate.bind(this)
		this.itemAdd = this.itemAdd.bind(this)
		this.itemRemove = this.itemRemove.bind(this)
	}

	openItemHandler(type) {
		
	}

	openNewHandler(type) {
		this.setState({
			openNew : !!type,
			openItem : null
		})
	}

	itemUpdate(data) {
		
	}
	itemAdd(data) {
		
	}
	itemRemove(data) {

	}

	render() {
		return (
			<div className="SidebarList">
				<Header direction={this.props.direction} 
					toggle={this.props.toggleDirection} 
					openNew={this.state.openNew} 
					openNewHandler={this.openNewHandler} />

				{this.state.openNew && <NewItem add={this.itemAdd} /> }

				<ListItems 
					open={this.state.openItem}
					list={this.props.list} 
					toggle={this.openItemHandler} 
					update={this.itemUpdate} 
					remove={this.itemRemove} />
			</div>
		);
	}
}

module.exports = withList(SidebarList)