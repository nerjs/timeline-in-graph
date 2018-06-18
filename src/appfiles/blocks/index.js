const React = require('react');

const Current = require('./current')
const Moves = require('./moves_blocks')
const gp = require('../svg/helpers/get_points')

const Blocks = ({
	current,
	count,
	list,
	now,
	last,
	move,
	duration,
	radiusBefore,
	radiusAfter,
	radiusNow,
	size,
	change
}) => {
	const itemId = move ? last : current
	const points = gp(count, itemId).map( ({ y }, i) => ({
		offset :  (y / 500) * size,
		radius : i == now ? radiusNow : ( i < now ? radiusBefore : radiusAfter),
		duration,
		move,
		item: list[i],
		last,
		currentId : itemId,
		change: () => change(i)
	}))

	const left = points.filter((p,i)=>(i < itemId))
	const right = points.filter((p,i)=>(i > itemId))

	return (
		<div id="timeline-blocks" style={{
			left: size / 10,
			right: size / 10
		}}>
			<Current item={list[itemId]}
				now={now} 
				current={current}
				last={last}
				move={move} 
				duration={duration} />
			{ left.map((p,i)=>(
					<Moves key={`left_${i}`} {...p} countIn={left.length} type="left" />
				))}
			{ right.map((p,i)=>(
					<Moves key={`right_${i}`} {...p} countIn={right.length} type="right" />
				))}
		</div>
	)
}



module.exports = Blocks