const React = require('react');
const Header = require('./header')
const Loader = require('./loader')
const List = require('./list')
const Options = require('./options')
const withTabs = require('hocs/tabs')

require('./sidebar.css')


const Sidebar = ({ active, openTab }) => (
	<div id="sidebar">
		<Header /> 
		<div className="sidebar-content">

			{!active ? (
				<Loader/>
			) : openTab == 'list' ? (
				<List/>
			) : (
				<Options/>
			)}
		</div>
	</div>
)



module.exports = withTabs(Sidebar)