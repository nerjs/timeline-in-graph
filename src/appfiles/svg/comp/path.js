const React = require('react');

const point = require('../helpers/point')

const Path = ({colorLeft, colorRight, sizeLeft, sizeRight }) => (
	<g> 
		<path 
			d="M 250, 50 L 55, 50 C 53, 50, 51, 53, 50, 55 L 50, 500" 
			stroke={colorLeft} 
			strokeWidth={sizeLeft} 
			fill="none" />
		<circle 
			fill={colorRight}
			stroke={colorLeft}
			strokeWidth={sizeLeft > sizeRight ? sizeRight : sizeLeft} 
			r={sizeLeft > sizeRight ? sizeLeft : sizeRight}
			cx={250}
			cy={50} 
			/>
		<path 
			d="M 250, 50 L 445, 50 C 447, 50, 449, 53, 450, 55 L 450, 500" 
			stroke={colorRight} 
			strokeWidth={sizeRight} 
			fill="none" />
	</g>
)

module.exports = Path