function getPointDirection(point, unit) {

	// console.log('point:', point);
	// console.log('unit:', unit);

	let direction = null;

	const x = point.x;
	const y = point.y;

	/* primary line */
	const y1 = -x + unit.centerX + unit.centerY;

	/* primary line */
	const y2 = x - unit.centerX + unit.centerY;

	console.log('x: ', x);
	console.log('y: ', y);
	console.log('y1: ', y1);
	console.log('y2: ', y2);

	if (y < y1 && y < y2) {
		direction = 'north';
	}
	else if (y >= y1 && y >= y2) {
		direction = 'south';
	}
	else if (y < y1 && y >= y2) {
		direction = 'west';
	}
	else if (y >= y1 && y < y2) {
		direction = 'east';
	}

	// console.log(direction);
	return direction;
}

export default getPointDirection;