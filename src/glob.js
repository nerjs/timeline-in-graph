require('normalize.css')
require('bootstrap/dist/css/bootstrap.min.css')
require('react')
require('react-dom')
require('redux')
require('react-redux')
require('konva')
require('react-konva')


// insert babel transform-runtime functions in /common.js
// classes
class A {}
class B extends A {}

// Promise
const a = Promise.resolve()

// Object literals

const name = 'name'
const obj = {
	[name] : 'test'
}