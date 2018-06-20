const React = require('react');
const cl = require('classnames') 

require('./current.css')


const CurrentContainer = ({
	move,
	now,
	nearby,
	item : { name, field1, field2, field3, field4, field5}
}) => (
	<div className={cl('current-container', {
		now,
		move,
		small : nearby < 90
	})}>
		<div className="top">
			<div className="f2">{field2}</div>
			<div className="f3">{field3}</div>
			<div className="f4">{field4}</div>
			<div className="f5">{field5}</div>
		</div>
		<div className="bottom">
			<div className="name">{name}</div>
			<div className="f1">{field1}</div>
		</div>
	</div>
)



module.exports = CurrentContainer