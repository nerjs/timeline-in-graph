const React = require('react');


const Animate = require('./animate')

const CircleAnim = ({ x, y, lx, ly, r, id, fill, duration }) => (
	<circle 
		id={id}
		r={r} 
		fill="blue" 
		cx={lx} 
		cy={ly}
		>
		<Animate {...{ x, y, lx, ly, r, id, duration }} />
	</circle>
)



module.exports = CircleAnim