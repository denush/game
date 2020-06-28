import getDistanceBetweenUnits from './getDistanceBetweenUnits';

function isUnitInRange(unit1, unit2, range) {

	const distance = getDistanceBetweenUnits(unit1, unit2);

	if (distance <= range) {
		return true;
	}
	else {
		return false;
	}
}

export default isUnitInRange;