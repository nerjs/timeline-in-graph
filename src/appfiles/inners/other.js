const React = require('react');
const cl = require('classnames') 

require('./inner.css')

// class OtherContainer extends React.Component {
// 	constructor(props) {
// 		super(p)
// 	}
// }


const OtherContainer = ({
	now,
	move,
	type,
	item : { name, field1, field2, field3, field4 },
	countIn
}) => (
	<div className={cl('inner-container', type, {
		now,
		move,
		small : countIn > 8,
		middle : countIn > 5
	})}>
		<div className="first">
			<div className="name">{name}</div>
			<div className="f1">{field1}</div>
		</div>
		<div className="last">
			<div className="f2">{field2}</div>
			<div className="f3">{field3}</div>
			<div className="f4">{field4}</div>
		</div>
	</div>
)



module.exports = OtherContainer