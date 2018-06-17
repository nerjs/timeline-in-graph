const pt = require('./parse_time').parse

module.exports = (f, t) => {
	let res = [];
	let r = Math.abs(t - f)
	if (f > t) {
		res = [
			pt(f),
			pt(t - (r*0.15)),
			pt(t + r*0.1),
			pt(t)
		]
	} else if (f < t) {
		res = [
			pt(f),
			pt(t + r*0.15),
			pt(t - r*0.1),
			pt(t)
		]
	}
	console.log(res)
	return res.join('; ');
}