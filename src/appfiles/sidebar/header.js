const React = require('react');
const withTabs = require('hocs/tabs')
const cl = require('classnames')
const Circle = require('react-icons/lib/io/android-refresh')

const SidebarHeader = ({ 
	active,
	openTab,
	tabOpen,
	reloadEl
}) => (
	<header>
		<div className={cl('tab',{ active : openTab == 'options'})} 
			onClick={()=>tabOpen('options')} >
			options
		</div>
		<div className={cl('tab',{ active : openTab == 'list'})} 
			onClick={()=>tabOpen('list')} >
			list
		</div>
		<div className="tab">
			<Circle className={cl({ spin: !active})} 
				onClick={()=>active && reloadEl()}/>
		</div>
	</header>
)

module.exports = withTabs(SidebarHeader)