function getDistanceBetweenUnits(unit1, unit2) {

	const a = unit1.centerX - unit2.centerX;
	const b = unit1.centerY - unit2.centerY;

	const distance = Math.sqrt(a * a + b * b);

	return distance;
}

export default getDistanceBetweenUnits;