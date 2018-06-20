const React = require('react');
const cl = require('classnames')

const MovesBlocks = ({
	container : Container,
	...props
}) => {
	const style = {
		width: props.radius * 2,
		height : props.radius * 2,
		top: props.offset - props.radius
	}

	if (props.type == "left") {
		style.left = 0;
		style.marginLeft = `-${props.radius}px`
	} else {
		style.right = 0
		style.marginRight = `-${props.radius}px`
	}

	return (
		<div className={cl('moves-block', {
			move : props.move
		})} 
			style={style} 
			 > 
			<div className="change-move" onClick={props.change}/>
			{ Container && <Container {...props} />}
		</div>
	);
}



module.exports = MovesBlocks