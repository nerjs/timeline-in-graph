module.exports = count => {
	const res = [];
	for (let i = 0; i < count; i++) {
		res.push({
			name : `name ${i}`,
			field1 : `data field 1 ${i}`,
			field2 : `data field 2 ${i}`,
			field3 : `data field 3 ${i}`,
			field4 : `data field 4 ${i}`,
		})
	}

	return res
}