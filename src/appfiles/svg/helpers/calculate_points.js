const pt = require('./parse_time').parse

module.exports = ({ lx, ly, cx, cy, nx, ny, d, et }) => {
	let x = 0,
		y = 0,
		dist = 0,
		distLeft = 0,
		timeLeft = pt((et - Date.now()) / d);

	if (lx == nx) {
		x = nx;
		dist = Math.abs(ny - ly);
		distLeft = pt(dist * timeLeft)
		y = ly > ny ? ny + distLeft : ny - distLeft;

		return { x, y }
	}

	let fy = ly - 50,
		ty = ny - 50;
	dist = fy + ty;
	dist = dist + ((nx == 250 || lx == 250) ? 200 : 400)
	distLeft = pt(dist * timeLeft)

	if (distLeft < 2) return { x: nx, y: ny};

	switch (true) {
		case (nx == 250 && distLeft > 197 && distLeft < 203 ):
			x = lx == 50 ? 52 : 448;
			y = 52
		break;
		case (nx == 250 && distLeft > 200):
			x = lx;
			y = distLeft - 200 + 50;
		break;
		case (nx == 250 && distLeft < 200):
			x = lx == 50 ? 250 - distLeft : 250 + distLeft;
			y = 50;
		break;
		case (lx == 250 && distLeft > (ty - 3) && distLeft < (ty + 3) ):
			x = nx == 50 ? 52 : 448;
			y = 52;
		break;
		case (lx == 250 &&  distLeft > ty):
			x = nx == 50 ? (distLeft - ty) + 50 : 450 - (distLeft - ty)
			y = 50;
		break;
		case (lx == 250 && distLeft < ty):
			x = nx
			y = ty - distLeft + 50;
		break;
		case (distLeft > (ty + 397) && distLeft < (ty + 403)):
			x = lx == 50 ? 52 : 448;
			y = 52
		break;
		case (distLeft > (ty - 3) && distLeft < (ty + 3)):
			x = nx == 50 ? 52 : 448;
			y = 52;
		break;
		case (distLeft > (ty + 400)):
			x = lx;
			y = 50 + (distLeft - (ty + 400))
		break;
		case (distLeft < ty):
			x = nx;
			y = 50 + (ty - distLeft)
		break;
		case (distLeft > ty && distLeft < (ty + 400)):
			x = lx == 50 ? 450 - (distLeft - ty) : 50 + (distLeft - ty);
			y = 50;
		break;
	}


	return { x, y };
}