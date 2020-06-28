import { getUnitsInSight } from '../auxiliary';
import { isUnitInRange } from '../auxiliary';

function attack(unit1) {

	const units = getUnitsInSight(unit1);

	for (let unit2 of units) {

		if (unit2 === unit1) {
			continue;
		}

		if (isUnitInRange(unit1, unit2, unit1.attackRange)) {
			unit2.currentHealth -= unit1.attackPower;
		}
	}
}

export default attack;