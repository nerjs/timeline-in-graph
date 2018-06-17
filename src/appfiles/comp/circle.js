const React = require('react');

let i = 0;
const getName = () => i++

class Circle extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			x : props.x,
			y : props.y,
			nx : null,
			ny : null,
			animete: [{x:200, y:200, d:2000}],
			move : false,
			name : `c_${getName()}`
		}
	}

	componentDidUpdate(prevProps) {
		if (this.state.move) return;
	}



	render() {
		console.log('state:',this.state, this.refs.c && this.refs.c.cy)
		// const style = {
		// 	transition: '20s',
		// 	transform: `
		// 			translateX(${this.state.nx == this.state.x ? 0 : this.state.nx - this.state.x}px) 
		// 			translateY(${this.state.ny == this.state.y ? 0 : this.state.ny - this.state.y}px)
		// 		`
		// }
		return (
			<g>
				
				<circle id={this.state.name} {...this.props}
					r={10} 
					cx={this.state.x} 
					cy={this.state.y} />

				<animate xlinkHref={`#${this.state.name}`}
					fill="freeze" 
					repeatCount={1} 
					attributeName="cy" 
					values="100; 200; 300; 250; 350" 
					keyTimes="0; 0.4; 0.6; 0.9; 1"
					dur="3s" 
					id={`${this.state.name}_y`}/>
				<animate xlinkHref={`#${this.state.name}`}
					fill="freeze" 
					repeatCount={1} 
					attributeName="cx" 
					values="50; 200; 250; 200; 50; 50" 
					keyTimes="0; 0.7; 0.75; 0.8; 0.9; 1"
					dur="3s" 
					begin="0.1s"
					id={`${this.state.name}_x`}/>
			</g>
		)
	}
}

// const Circle = ({ x, y, r, ...props}) => (
// 	<g>
// 		<circle id="c" cx={x} cy={y} r={r} {...props} >
// 		<animate 
// 			id="c1" 
// 			attributeName="cx" 
// 			from={x} 
// 			to={x+100}  
// 			dur="1.2s" 
// 			repeatCount={5} 
// 			fill="freeze"  />
// 		<animate 
// 			id="c2" 
// 			attributeName="cy" 
// 			from={y} 
// 			to={y+100}  
// 			dur="1.2s" 
// 			repeatCount={5} 
// 			fill="freeze" 
// 			begin="c1.end"  />		
// 		<animate 
// 			id="c3" 
// 			attributeName="cx" 
// 			from={x+100} 
// 			to={x}  
// 			dur="1.2s" 
// 			repeatCount={5} 
// 			fill="freeze" 
// 			begin="c2.end"  />
// 		<animate 
// 			id="c4" 
// 			attributeName="cy" 
// 			from={y+100} 
// 			to={y}  
// 			dur="1.2s" 
// 			repeatCount={5} 
// 			fill="freeze" 
// 			begin="c2.end"  />
// 		</circle>
// 	</g>
// )

module.exports = Circle