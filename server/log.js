require('colors')


exports.info = str => console.log(str.green)

exports.log = str => console.log(str.yellow)

exports.error = err => {
	console.log(err.message.red)
	err.stack && err.stack.red && console.log(err.stack.red)
}

exports.dir = (obj, name, dipth=3) => {
	name && console.log(name)

	console.dir(obj, {
		colors: true,
		dipth
	})
}