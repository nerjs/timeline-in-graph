const point = require('./point')

const parse = num => parseFloat(num.toFixed(4))

module.exports = (count, current) => {
	const height = 350,
		bottom = 50,
		top = 100,
		left = 50,
		right = 450,
		before = current,
		after = count - current - 1,
		result = [point(250, 50)];


	if (before > 0) {
		for (let i = 0; i < before; i++) {
			result.unshift(point(left, parse((height / before) * (i + 0.5) + top)))
		}
	}
	if (after > 0) {
		for (let i = 0; i < after; i++) {
			result.push(point(right, parse((height / after) * (i + 0.5) + top)))
		}
	}
	
	return result
}