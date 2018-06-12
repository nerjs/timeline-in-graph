const React = require('react');
const IconOnClose = require('react-icons/lib/fa/plus')
const IconOnOpen = require('react-icons/lib/fa/close')
const IconUp = require('react-icons/lib/io/arrow-up-b')
const IconDown = require('react-icons/lib/io/arrow-down-b')

const SidebarListHeader = ({
	direction,
	openNew,
	toggle,
	openNewHandler
}) => (
	<div className="list-header">
		<div className="toggle-direction" 
			onClick={()=>toggle(direction == 'up' ? 'down' : 'up')} 
			title="toggle direction">
			{direction == 'down' ? <IconDown size={15} /> : <IconUp size={15} />}
		</div>
		<div className="open-new" 
			onClick={()=>openNewHandler(!openNew)} 
			title="new list item">
			{openNew ? <IconOnOpen size={15} /> : <IconOnClose size={15} />}
		</div>
	</div>
)

module.exports = SidebarListHeader