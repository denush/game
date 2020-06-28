import { units } from '../dependency';
import isPointInSightDirection from './isPointInSightDirection';

function getUnitsInSight(unit1) {
	// return units.list;

	const result = [];

	for (let unit2 of units.list) {
		const x = unit2.centerX;
		const y = unit2.centerY;

		if (isPointInSightDirection({ x, y }, unit1)) {
			result.push(unit2);
		}
	}

	return result;
}

export default getUnitsInSight;