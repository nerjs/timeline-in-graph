const React = require('react');
const { connect } = require('react-redux')
const Inspector = require('react-json-inspector');
require('react-json-inspector/json-inspector.css');
const { withState } = require('hocs')
class Content extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="Content">
				<Inspector data={this.props} />
			</div>
		);
	}
}

module.exports = withState(Content)