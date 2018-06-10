const React = require('react');

const Sidebar = require('app/sidebar')
const Content = require('app/content')

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-sm-3 col-lg-2 sidebar">
						<Sidebar/>
					</div>
					<div className="col-12 col-sm-9 col-lg-10 content">
						<Content/>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = App