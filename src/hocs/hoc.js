const { connect } = require('react-redux')


exports.withMapState = mapStateToProps => Component => connect(mapStateToProps)(Component)

exports.withMapDispath = mapDispatchToProps => Component => connect(null,mapDispatchToProps)(Component)

exports.withMaps = (mapStateToProps, mapDispatchToProps) => Component => connect(mapStateToProps, mapDispatchToProps)(Component)

exports.withState = exports.withMapState(state => state)


exports.withDispatch = exports.withMapDispath(dispatch => ({ dispatch }))

exports.withStore = Component => connect(state => ({state}), dispatch => ({ dispatch }))(Component)

