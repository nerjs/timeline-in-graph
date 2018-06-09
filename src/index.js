const React = require('react')
const render = require('react-dom').render 
const { Provider } = require('react-redux')

const store = require('./data/store')
const App = require('./app')
require('normalize.css')
require('./styles.js')


const root = document.getElementById('root')


render((
	<Provider store={store}>
		<App/>
	</Provider>
), root)