const React = require('react');

const Controlls = ({ controll, reload, list, createList, ...props}) => (
	<div className="controlls">
		<div className="block reload" onClick={reload}>
			reload
		</div>
		<div className="block list">
			<div className="label">
				list
			</div>
			<div className="length">{list.length}</div>
			<div className="value">
				<input type="number" defaultValue={list.length} onChange={e => controll('list',createList(Number(e.target.value)))} />
			</div>
		</div>
		{Object.keys(props).map( key => (
			<div className="block" key={key}>
				<div className="label">{key}</div>
				<div className="value">
					<input type={(typeof props[key] == 'string') ? 'color' : 'number'}
						defaultValue={props[key]} 
						onChange={e => {
							let val = e.target.value;
							if (typeof props[key] == 'number') val = Number(val);
							controll(key, val)
						} }/>
				</div>
			</div>
		))}
	</div>
)

module.exports = Controlls