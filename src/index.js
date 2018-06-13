const React = require('react')
const render = require('react-dom').render 

const App = require('./app')
require('normalize.css')
require('./css/core.css')


const root = document.getElementById('root')


render(<App/>, root)