import getPointDirection from './getPointDirection';

function isPointInSightDirection(point, unit) {

	const pointDirection = getPointDirection(point, unit);
	// const pointDirection = 'north';

	let result = false;

	if (pointDirection === unit.sightDirection) {
		result = true;
	}

	return result;
}

export default isPointInSightDirection;