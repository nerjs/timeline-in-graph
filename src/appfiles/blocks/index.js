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
	change,
	currentContainer,
	innerContainer
}) => {
	const itemId = move ? last : current
	const points = gp(count, itemId).map( ({ y }, i) => ({
		index : i,
		offset :  (y / 500) * size - (size / 10),
		radius : i == now ? radiusNow : ( i < now ? radiusBefore : radiusAfter),
		duration,
		move,
		item: list[i],
		last,
		currentId : itemId,
		now,
		change: () => change(i)
	}))


	const left = points.filter((p,i)=>(i < itemId))
	const right = points.filter((p,i)=>(i > itemId))

	return (
		<div id="timeline-blocks" style={{
			left: size / 10,
			right: size / 10,
			top: size / 10
		}}>
			<Current item={list[itemId]}
				now={now} 
				current={current}
				last={last}
				move={move} 
				duration={duration} 
				size={size}  
				radius={points[itemId].radius} 
				container={currentContainer} 
				nearby={Math.min.apply(null,points.filter(p => p.index != itemId).map(p => p.offset))} />
			{ left.map((p,i)=>(
					<Moves key={p.index} {...p} countIn={left.length} type="left" container={innerContainer} />
				))}
			{ right.map((p,i)=>(
					<Moves key={p.index} {...p} countIn={right.length} type="right" container={innerContainer} />
				))}
		</div>
	)
}



module.exports = Blocks