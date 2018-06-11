const React = require('react');
const FormOptions = require('./form_options')
const { getNameType } = FormOptions
const IconDrop = require('react-icons/lib/fa/check')

const SidebarListOption = ({
	options,
	current,
	update,
	drop,
	toggle
}) => (
	<div className="sidebar-list-options">
		{Object.keys(options).map( key => (
			<div key={key} className={`sidebar-list-option ${getNameType(options[key])}`}>
				<div className="name" onClick={()=>toggle(current == key ? null : key)}>
					{key}
					<IconDrop size={14} onClick={ e => {
						e.stopPropagation();
						drop(key)
					}}/>
				</div>
				{current != key &&  (<div className="value">
														{`${options[key]}`}
													</div>)}
				{current == key && <FormOptions name={key} value={options[key]} setOption={update} />}
			</div>
		) )}
	</div>
)

module.exports = SidebarListOption