const React = require('react');

const CurrentBlock = ({
	container : Container,
	...props
}) => (
	<div className="current-block" style={{
		top: `-${props.radius}px`,
		left: (props.size * 0.8) / 2 - props.radius,
		width: props.radius * 2,
		height: props.radius * 2,
	}}>
		{Container && <Container {...props} />}
	</div>
)


module.exports = CurrentBlock