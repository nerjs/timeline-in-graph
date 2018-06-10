const createStore = require('create-redux-store')

const redusers = require('./redusers')
const mdw = require('./mdw')


module.exports = createStore(redusers,mdw)