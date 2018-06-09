const createStore = require('create-redux-store')

const reduser = ()=>({_v:1})
const mdw = () => n => a => n(a)

module.exports = createStore(reduser,mdw)