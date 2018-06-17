const React = require('react');

const pt = require('../helpers/parse_time')
const sv = require('../helpers/simple_vector')

const Simple = ({ id, name, f, t, duration}) => (
	<set xlinkHref={`#${id}`}
		id={`${id}_simple`}
		fill="remove"
		repeatCount={1} 
		attributeName={`c${name}`} 
		values={sv(f, t)} 
		keyTimes="0; 0.8; 0.9; 1"
		dur={pt(duration)}
	/>
)

const Animate = ({ x, y, lx, ly, r, id, duration }) => {
	const res = []
	console.log(pt(duration))
	if (x == lx) return <Simple id={id} name="y" f={ly} t={y} duration={duration} />;
	if (y == ly) return <Simple id={id} name="x" f={lx} t={x} duration={duration} />;


	return res;
}

module.exports = Animate