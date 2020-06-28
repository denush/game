function getPointDirection(point, unit) {

	let direction = null;

	const x = point.x;
	const y = point.y;

	/* primary line */
	const y1 = -x + unit.centerX + unit.centerY;

	/* primary line */
	const y2 = x - unit.centerX + unit.centerY;

	if (y < y1 && y < y2) {
		direction = 'north';
	}
	else if (y > y1 && y > y2) {
		direction = 'south';
	}
	else if (y < y1 && y > y2) {
		direction = 'west';
	}
	else if (y > y1 && y < y2) {
		direction = 'east';
	}

	return direction;
}

export default getPointDirection;