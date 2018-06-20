const parse = num => parseFloat(num.toFixed(3))

exports = module.exports = num => `${parse(num / 1000)}s`

exports.parse = parse