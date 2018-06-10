const React = require('react');
const cl = require('classnames')
const IconOnClose = require('react-icons/lib/fa/plus')
const IconOnOpen = require('react-icons/lib/fa/chevron-up')
const FormOption = require('./form_options')

const SidebarNewOption = ({
	active,
	toggle,
	setOption
}) => (
	<div className={cl('new-option',{
		open : active
	})}>
		<div className="new-option-header" onClick={toggle} >
			{active ? <IconOnOpen size={15} /> : <IconOnClose size={15} />}
		</div>
		{ active && <FormOption setOption={setOption} />}
	</div>
)

module.exports = SidebarNewOption