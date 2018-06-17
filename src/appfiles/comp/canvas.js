const React = require('react');

const Canvas = ({ children, length, ...props }) => (
	<svg {...props} viewBox={`0 0 500 500`} >
		{children}
	</svg>
)

module.exports = Canvas